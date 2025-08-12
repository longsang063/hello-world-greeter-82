import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { TournamentRewards } from '@/types/tournament-extended';
import { RankCode, getDefaultRank } from '@/utils/eloConstants';
import { calculateRewards } from '@/utils/tournamentRewards';
import { useRewardTemplates } from '@/hooks/useRewardTemplates';

interface TournamentContextType {
  tournament: any | null;
  loading: boolean;
  error: string | null;
  rewards: TournamentRewards | null;
  loadTournament: (id: string) => Promise<void>;
  refreshTournament: () => Promise<void>;
  saveTournamentRewards: (
    tournamentId: string,
    rewards: TournamentRewards
  ) => Promise<void>;
  loadRewards: (
    tournamentId: string,
    rank?: RankCode
  ) => Promise<TournamentRewards | null>;
  // Additional properties for enhanced form
  updateTournament?: (data: Partial<any>) => void;
  updateRewards?: (rewards: TournamentRewards) => void;
  validateTournament?: () => boolean;
  resetTournament?: () => void;
  isValid?: boolean;
  validationErrors?: any;
  calculateRewards?: () => TournamentRewards;
  recalculateOnChange?: boolean;
  setRecalculateOnChange?: (value: boolean) => void;
  createTournament?: () => Promise<any>;
  updateExistingTournament?: (id: string) => Promise<any>;
  loadLatestTournament?: () => Promise<any>;
}

const TournamentContext = createContext<TournamentContextType | undefined>(
  undefined
);

export const TournamentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tournament, setTournament] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rewards, setRewards] = useState<TournamentRewards | null>(null);
  const [recalculateOnChange, setRecalculateOnChange] = useState(false);
  const [validationErrors, setValidationErrors] = useState<any>({});

  const { user } = useAuth();
  const { templates, convertTemplatesToRewards, copyTemplateToTournament } =
    useRewardTemplates();

  // Updated loadRewardsFromDatabase to work with new structure
  const loadRewardsFromDatabase = useCallback(
    async (tournament: any, rank: RankCode = getDefaultRank()) => {
      try {
        console.log(
          '🔍 Loading rewards from database for tournament:',
          tournament.id
        );

        // Use tournament prize_pool or fallback to entry_fee calculation
        const finalTotalPrize =
          tournament.prize_pool ||
          (tournament.entry_fee && tournament.max_participants
            ? tournament.entry_fee * tournament.max_participants * 0.75
            : 0);

        let rewards: TournamentRewards | null = null;
        if (finalTotalPrize > 0) {
          rewards = calculateRewards(
            {
              entry_fee: tournament.entry_fee,
              max_participants: tournament.max_participants,
              prize_pool: finalTotalPrize,
            },
            rank
          );
          console.log('📝 Calculating rewards from tournament data');
        }

        console.log('✅ Loaded rewards:', rewards);
        return (
          rewards || {
            totalPrize: 0,
            showPrizes: false,
            positions: [],
            specialAwards: [],
          }
        );
      } catch (error) {
        console.error('❌ Error loading rewards from database:', error);
        // Return fallback rewards
        return {
          totalPrize: 0,
          showPrizes: false,
          positions: [
            {
              position: 1,
              name: 'Vô địch',
              eloPoints: 100,
              spaPoints: 1000,
              cashPrize: 0,
              items: ['Cúp vô địch'],
              isVisible: true,
            },
          ],
          specialAwards: [],
        };
      }
    },
    []
  );

  const calculateRewardsInternal = useCallback((): TournamentRewards => {
    if (!tournament) {
      return {
        totalPrize: 0,
        showPrizes: false,
        positions: [],
        specialAwards: [],
      };
    }

    // Simple default calculation for now
    const totalPrize = tournament.prize_pool || 0;

    return {
      totalPrize,
      showPrizes: totalPrize > 0,
      positions: [
        {
          position: 1,
          name: 'Vô địch',
          eloPoints: 100,
          spaPoints: 1000,
          cashPrize: totalPrize * 0.5,
          items: ['Cúp vô địch'],
          isVisible: true,
        },
        {
          position: 2,
          name: 'Á quân',
          eloPoints: 75,
          spaPoints: 700,
          cashPrize: totalPrize * 0.3,
          items: ['Huy chương bạc'],
          isVisible: true,
        },
        {
          position: 3,
          name: 'Hạng 3',
          eloPoints: 50,
          spaPoints: 500,
          cashPrize: totalPrize * 0.2,
          items: ['Huy chương đồng'],
          isVisible: true,
        },
      ],
      specialAwards: [],
    };
  }, [tournament]);

  const loadTournament = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('tournaments')
          .select(
            `
          *,
          club:club_profiles(
            id,
            club_name,
            address,
            phone,
            contact_info
          ),
          registrations:tournament_registrations(
            id,
            user_id,
            registration_status,
            profiles:user_id(
              id,
              display_name,
              full_name,
              avatar_url,
              verified_rank
            )
          )
        `
          )
          .eq('id', id)
          .maybeSingle();

        if (fetchError) {
          console.error('Error fetching tournament:', fetchError);
          throw fetchError;
        }

        if (!data) {
          throw new Error('Giải đấu không tồn tại');
        }

        console.log('✅ Tournament loaded:', data);
        setTournament(data);

        // Load rewards
        const rewardsData = await loadRewardsFromDatabase(data);
        setRewards(rewardsData);
      } catch (err) {
        console.error('❌ Error loading tournament:', err);
        const errorMessage =
          err instanceof Error ? err.message : 'Lỗi không xác định';
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [loadRewardsFromDatabase]
  );

  const refreshTournament = useCallback(async () => {
    if (tournament?.id) {
      await loadTournament(tournament.id);
    }
  }, [tournament?.id, loadTournament]);

  const saveTournamentRewards = useCallback(
    async (tournamentId: string, rewardsData: TournamentRewards) => {
      try {
        console.log('💾 Saving tournament rewards:', {
          tournamentId,
          rewardsData,
        });

        if (!rewardsData || typeof rewardsData !== 'object') {
          throw new Error('Dữ liệu phần thưởng không hợp lệ');
        }

        // Note: prize_distribution column removed - using tournament_prize_tiers table

        const { error } = await supabase
          .from('tournaments')
          .update({
            updated_at: new Date().toISOString(),
          })
          .eq('id', tournamentId);

        if (error) throw error;

        setRewards(rewardsData);
        toast.success('Đã lưu phần thưởng giải đấu');
      } catch (error) {
        console.error('❌ Error saving tournament rewards:', error);
        const errorMessage =
          error instanceof Error ? error.message : 'Lỗi khi lưu phần thưởng';
        toast.error(errorMessage);
        throw error;
      }
    },
    []
  );

  const loadRewards = useCallback(
    async (
      tournamentId: string,
      rank: RankCode = 'K'
    ): Promise<TournamentRewards | null> => {
      try {
        // Fetch tournament data
        const { data, error } = await supabase
          .from('tournaments')
          .select('prize_pool, entry_fee, max_participants')
          .eq('id', tournamentId)
          .single();

        if (error) {
          console.error('❌ Database error:', error);
          throw error;
        }

        if (!data) {
          console.warn('⚠️ No tournament data found for:', tournamentId);
          return null;
        }

        return await loadRewardsFromDatabase(data, rank);
      } catch (error) {
        console.error('❌ Error loading rewards:', error);
        return null;
      }
    },
    [loadRewardsFromDatabase]
  );

  // Load latest tournament data for auto-fill
  const loadLatestTournament = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!user) {
        throw new Error('User must be authenticated');
      }

      console.log('🔍 Loading latest tournament for user:', user.id);

      const { data, error: fetchError } = await supabase
        .from('tournaments')
        .select(
          `
          name,
          description,
          tournament_type,
          game_format,
          max_participants,
          tier_level,
          entry_fee,
          prize_pool,
          venue_address,
          contact_info,
          rules,
          requires_approval,
          allow_all_ranks,
          eligible_ranks,
          is_public
        `
        )
        .eq('created_by', user.id)
        .neq('status', 'draft')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (fetchError) {
        console.error('Error fetching latest tournament:', fetchError);
        throw fetchError;
      }

      if (!data) {
        console.log('ℹ️ No previous tournaments found for user');
        toast.info('Không tìm thấy giải đấu trước đó để sao chép dữ liệu');
        return null;
      }

      console.log('✅ Latest tournament loaded:', data);

      // Create template data with updated dates
      const now = new Date();
      const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      const nextWeekEnd = new Date(
        nextWeek.getTime() + 1 * 24 * 60 * 60 * 1000
      );
      const registrationEnd = new Date(
        nextWeek.getTime() - 1 * 24 * 60 * 60 * 1000
      );

      const templateData = {
        ...data,
        name: `${data.name} - Copy`,
        tournament_start: nextWeek.toISOString(),
        tournament_end: nextWeekEnd.toISOString(),
        registration_start: now.toISOString(),
        registration_end: registrationEnd.toISOString(),
      };

      setTournament(templateData);
      toast.success(
        'Đã tải dữ liệu từ giải đấu gần nhất! Vui lòng kiểm tra và cập nhật thông tin.'
      );

      return templateData;
    } catch (err) {
      console.error('❌ Error loading latest tournament:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Lỗi không xác định';
      setError(errorMessage);
      toast.error(`Lỗi khi tải dữ liệu: ${errorMessage}`);
      return null;
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Update tournament data
  const updateTournament = useCallback(
    (data: Partial<any>) => {
      setTournament(prev => {
        const updated = { ...prev, ...data };

        // Auto-calculate rewards if enabled
        if (
          recalculateOnChange &&
          updated.tier_level &&
          updated.max_participants
        ) {
          const newRewards = calculateRewardsInternal();
          setRewards(newRewards);
        }

        return updated;
      });
    },
    [recalculateOnChange, calculateRewardsInternal]
  );

  // Update rewards
  const updateRewards = useCallback(
    (newRewards: TournamentRewards) => {
      setRewards(newRewards);
      if (tournament) {
        setTournament(prev => ({ ...prev, rewards: newRewards }));
      }
    },
    [tournament]
  );

  // Validate tournament
  const validateTournament = useCallback(() => {
    const errors: any = {};

    if (!tournament?.name) errors.name = 'Tên giải đấu là bắt buộc';
    if (!tournament?.tier_level) errors.tier_level = 'Hạng thi đấu là bắt buộc';
    if (!tournament?.max_participants) errors.max_participants = 'Số người tham gia là bắt buộc';
    if (!tournament?.venue_address) errors.venue_address = 'Địa chỉ tổ chức là bắt buộc';
    if (!tournament?.tournament_type) errors.tournament_type = 'Loại giải là bắt buộc';
    if (!tournament?.game_format) errors.game_format = 'Thể thức là bắt buộc';
    if (!tournament?.registration_start) errors.registration_start = 'Thời gian bắt đầu đăng ký là bắt buộc';
    if (!tournament?.registration_end) errors.registration_end = 'Thời gian kết thúc đăng ký là bắt buộc';
    if (!tournament?.tournament_start) errors.tournament_start = 'Thời gian bắt đầu giải là bắt buộc';
    if (!tournament?.tournament_end) errors.tournament_end = 'Thời gian kết thúc giải là bắt buộc';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [tournament]);

  // Reset tournament
  const resetTournament = useCallback(() => {
    setTournament(null);
    setRewards(null);
    setValidationErrors({});
    setError(null);
  }, []);

  // Create tournament
  const createTournament = useCallback(async () => {
    try {
      if (!user) {
        throw new Error('Bạn cần đăng nhập để tạo giải đấu');
      }

      if (!validateTournament()) {
        throw new Error('Vui lòng điền đầy đủ thông tin bắt buộc');
      }

      setLoading(true);
      setError(null);

      // Chuẩn bị dữ liệu theo bảng tournaments
      const now = new Date().toISOString();
      const tournamentData = {
        // id sẽ được sinh tự động bởi DB
        name: tournament.name,
        description: tournament.description || '',
        tournament_type: tournament.tournament_type || 'double_elimination',
        game_format: tournament.game_format || 'billiards_pool_8',
        tier_level: tournament.tier_level,
        max_participants: tournament.max_participants,
        current_participants: tournament.current_participants || 0,
        entry_fee: tournament.entry_fee || 0,
        prize_pool: tournament.prize_pool || 0,
        first_prize: tournament.first_prize || 0,
        second_prize: tournament.second_prize || 0,
        third_prize: tournament.third_prize || 0,
        registration_start: tournament.registration_start || now,
        registration_end: tournament.registration_end || now,
        tournament_start: tournament.tournament_start || now,
        tournament_end: tournament.tournament_end || now,
        club_id: tournament.club_id || null,
        venue_address: tournament.venue_address || '',
        created_by: user.id,
        organizer_id: tournament.organizer_id || null,
        status: 'registration_open',
        is_public: tournament.is_public !== false,
        requires_approval: tournament.requires_approval || false,
        rules: tournament.rules || '',
        contact_info: tournament.contact_info || {}, // jsonb
        created_at: now,
        updated_at: now,
      };

      // Create tournament in database
      const { data: newTournament, error: tournamentError } = await supabase
        .from('tournaments')
        .insert([tournamentData])
        .select()
        .single();

      if (tournamentError) {
        throw tournamentError;
      }

      // Apply reward template if available
      if (templates.length > 0) {
        const templateRewards = convertTemplatesToRewards(templates);
        const success = await copyTemplateToTournament(
          newTournament.id,
          templateRewards
        );

        if (success) {
          console.log('✅ Reward template applied successfully');
        } else {
          console.warn(
            '⚠️ Failed to apply reward template, but tournament created'
          );
        }
      }

      // Update local state
      setTournament(newTournament);

      toast.success('Tạo giải đấu thành công!');
      return newTournament;
    } catch (err) {
      console.error('❌ Error creating tournament:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Lỗi không xác định';
      setError(errorMessage);
      toast.error(`Lỗi khi tạo giải đấu: ${errorMessage}`);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [
    user,
    tournament,
    validateTournament,
    templates,
    convertTemplatesToRewards,
    copyTemplateToTournament,
  ]);

  // Update existing tournament
  const updateExistingTournament = useCallback(
    async (id: string) => {
      try {
        if (!user) {
          throw new Error('Bạn cần đăng nhập để cập nhật giải đấu');
        }

        if (!validateTournament()) {
          throw new Error('Vui lòng điền đầy đủ thông tin bắt buộc');
        }

        setLoading(true);
        setError(null);

        const updateData = {
          name: tournament.name,
          description: tournament.description || '',
          tournament_type: tournament.tournament_type || 'double_elimination',
          game_format: tournament.game_format || 'billiards_pool_8',
          tier_level: tournament.tier_level,
          max_participants: tournament.max_participants,
          current_participants: tournament.current_participants || 0,
          entry_fee: tournament.entry_fee || 0,
          prize_pool: tournament.prize_pool || 0,
          first_prize: tournament.first_prize || 0,
          second_prize: tournament.second_prize || 0,
          third_prize: tournament.third_prize || 0,
          registration_start: tournament.registration_start,
          registration_end: tournament.registration_end,
          tournament_start: tournament.tournament_start,
          tournament_end: tournament.tournament_end,
          club_id: tournament.club_id || null,
          venue_address: tournament.venue_address || '',
          organizer_id: tournament.organizer_id || null,
          status: tournament.status || 'registration_open',
          is_public: tournament.is_public !== false,
          requires_approval: tournament.requires_approval || false,
          rules: tournament.rules || '',
          contact_info: tournament.contact_info || {},
          updated_at: new Date().toISOString(),
        };

        const { data: updatedTournament, error: updateError } = await supabase
          .from('tournaments')
          .update(updateData)
          .eq('id', id)
          .eq('created_by', user.id) // Ensure user owns the tournament
          .select()
          .single();

        if (updateError) {
          throw updateError;
        }

        setTournament(updatedTournament);
        toast.success('Cập nhật giải đấu thành công!');
        return updatedTournament;
      } catch (err) {
        console.error('❌ Error updating tournament:', err);
        const errorMessage =
          err instanceof Error ? err.message : 'Lỗi không xác định';
        setError(errorMessage);
        toast.error(`Lỗi khi cập nhật giải đấu: ${errorMessage}`);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [user, tournament, validateTournament]
  );

  const value: TournamentContextType = {
    tournament,
    loading,
    error,
    rewards,
    loadTournament,
    refreshTournament,
    saveTournamentRewards,
    loadRewards,
    loadLatestTournament,
    // Enhanced implementations
    updateTournament,
    updateRewards,
    validateTournament,
    resetTournament,
    isValid: Object.keys(validationErrors).length === 0,
    validationErrors,
    calculateRewards: calculateRewardsInternal,
    recalculateOnChange,
    setRecalculateOnChange,
    createTournament,
    updateExistingTournament,
  };

  return (
    <TournamentContext.Provider value={value}>
      {children}
    </TournamentContext.Provider>
  );
};

export const useTournamentContext = () => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error(
      'useTournamentContext must be used within TournamentProvider'
    );
  }
  return context;
};

export const useTournament = useTournamentContext;

export default TournamentContext;
