<<<<<<< HEAD
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;
=======
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
<<<<<<< HEAD
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
=======
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
    ref={ref}
  />
<<<<<<< HEAD
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
=======
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
<<<<<<< HEAD
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
=======
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
<<<<<<< HEAD
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
=======
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      'flex flex-col space-y-2 text-center sm:text-left',
=======
      "flex flex-col space-y-2 text-center sm:text-left",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
);
AlertDialogHeader.displayName = 'AlertDialogHeader';
=======
)
AlertDialogHeader.displayName = "AlertDialogHeader"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
<<<<<<< HEAD
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
=======
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
=======
)
AlertDialogFooter.displayName = "AlertDialogFooter"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
<<<<<<< HEAD
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
=======
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
<<<<<<< HEAD
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
=======
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
<<<<<<< HEAD
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
=======
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
<<<<<<< HEAD
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
=======
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
=======
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
<<<<<<< HEAD
};
=======
}
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
