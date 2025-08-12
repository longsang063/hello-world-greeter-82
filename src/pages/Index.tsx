import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Users,
  Calendar,
  Star,
  PlayCircle,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  console.log('[Index] 🏠 SABO ARENA Index page rendering...');

  React.useEffect(() => {
    console.log('[Index] ✅ SABO ARENA Index page mounted successfully');

    return () => {
      console.log('[Index] 👋 SABO ARENA Index page unmounting');
    };
  }, []);

  return (
    <>
      <div className='min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'></div>
        
        {/* Header */}
        <header className='relative z-10 container mx-auto px-4 py-6 flex justify-between items-center backdrop-blur-sm bg-slate-900/50 rounded-lg mx-4 mt-4'>
          <div className='flex items-center space-x-2'>
            <Target className='h-8 w-8 text-yellow-400' />
            <h1 className='text-2xl font-bold text-white'>SABO ARENA</h1>
          </div>
          <div className='flex space-x-4'>
            <Button
              variant='outline'
              className='text-white border-white hover:bg-white hover:text-slate-900'
            >
              Đăng nhập
            </Button>
            <Button className='bg-yellow-400 text-slate-900 hover:bg-yellow-500'>
              Đăng ký
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className='relative z-10 container mx-auto px-4 py-20 text-center'>
          <Badge className='mb-6 bg-yellow-400 text-slate-900 text-lg px-4 py-2'>
            CLB Billiards Chuyên Nghiệp
          </Badge>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            Chào Mừng Đến
            <br />
            <span className='text-yellow-400 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
              SABO ARENA
            </span>
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Hệ thống quản lý và đặt bàn billiards hiện đại. Không gian chơi đẳng
            cấp, trang thiết bị chuyên nghiệp và dịch vụ tận tâm.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8 py-3 text-lg'
            >
              <PlayCircle className='mr-2 h-5 w-5' />
              Bắt đầu ngay
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-white border-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg'
            >
              Khám phá tính năng
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className='relative z-10 container mx-auto px-4 py-20'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
              Tại sao chọn SABO ARENA?
            </h2>
            <p className='text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed'>
              Hệ thống quản lý arena billiards toàn diện với công nghệ hiện đại
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300'>
              <CardHeader>
                <Trophy className='h-12 w-12 text-yellow-400 mb-4' />
                <CardTitle className='text-white text-xl'>
                  Hệ thống ELO chuyên nghiệp
                </CardTitle>
                <CardDescription className='text-gray-300'>
                  Xếp hạng công bằng và chính xác theo tiêu chuẩn quốc tế
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='text-gray-300 space-y-2'>
                  <li>• Tính toán ELO real-time</li>
                  <li>• Theo dõi thống kê chi tiết</li>
                  <li>• Lịch sử trận đấu đầy đủ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300'>
              <CardHeader>
                <Users className='h-12 w-12 text-blue-400 mb-4' />
                <CardTitle className='text-white text-xl'>
                  Cộng đồng sôi động
                </CardTitle>
                <CardDescription className='text-gray-300'>
                  Kết nối với hàng nghìn tay cơ trên toàn quốc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='text-gray-300 space-y-2'>
                  <li>• Thách đấu trực tuyến</li>
                  <li>• Chat và kết bạn</li>
                  <li>• Chia sẻ kinh nghiệm</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300'>
              <CardHeader>
                <Calendar className='h-12 w-12 text-green-400 mb-4' />
                <CardTitle className='text-white text-xl'>
                  Giải đấu thường xuyên
                </CardTitle>
                <CardDescription className='text-gray-300'>
                  Tham gia các giải đấu với giải thưởng hấp dẫn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='text-gray-300 space-y-2'>
                  <li>• Giải đấu hàng tuần</li>
                  <li>• Giải thưởng tiền mặt</li>
                  <li>• Hệ thống bracket tự động</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className='relative z-10 container mx-auto px-4 py-20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div className='p-6'>
              <div className='text-4xl lg:text-5xl font-bold text-yellow-400 mb-2'>
                5,000+
              </div>
              <div className='text-gray-300 text-lg'>Người chơi</div>
            </div>
            <div className='p-6'>
              <div className='text-4xl lg:text-5xl font-bold text-yellow-400 mb-2'>
                200+
              </div>
              <div className='text-gray-300 text-lg'>Arena đối tác</div>
            </div>
            <div className='p-6'>
              <div className='text-4xl lg:text-5xl font-bold text-yellow-400 mb-2'>
                1,000+
              </div>
              <div className='text-gray-300 text-lg'>Giải đấu</div>
            </div>
            <div className='p-6'>
              <div className='text-4xl lg:text-5xl font-bold text-yellow-400 mb-2'>
                50K+
              </div>
              <div className='text-gray-300 text-lg'>Trận đấu</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative z-10 container mx-auto px-4 py-20 text-center'>
          <Card className='bg-gradient-to-r from-yellow-400/90 to-orange-500/90 backdrop-blur-sm border-0 max-w-4xl mx-auto'>
            <CardHeader className='py-8'>
              <CardTitle className='text-3xl lg:text-4xl font-bold text-slate-900 mb-4'>
                Sẵn sàng thể hiện kỹ năng?
              </CardTitle>
              <CardDescription className='text-slate-800 text-lg'>
                Tham gia ngay hôm nay và bắt đầu hành trình trở thành cao thủ
                billiards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size='lg'
                className='bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 text-lg'
              >
                Đăng ký miễn phí
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className='relative z-10 container mx-auto px-4 py-8 border-t border-slate-700/50 backdrop-blur-sm bg-slate-900/20'>
          <div className='text-center text-gray-400'>
            <p>&copy; 2024 SABO ARENA Hub. Tất cả quyền được bảo lưu.</p>
            <p className='mt-2'>Nền tảng billiards hàng đầu Việt Nam</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;