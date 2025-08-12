<<<<<<< HEAD
import { useToast } from '@/hooks/use-toast';
=======
import { useToast } from "@/hooks/use-toast"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
<<<<<<< HEAD
} from '@/components/ui/toast';

export function Toaster() {
  const { toasts } = useToast();
=======
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
<<<<<<< HEAD
            <div className='grid gap-1'>
=======
            <div className="grid gap-1">
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
<<<<<<< HEAD
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
=======
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
}
