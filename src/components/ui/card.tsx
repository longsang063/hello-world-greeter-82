<<<<<<< HEAD
import * as React from 'react';

import { cn } from '@/lib/utils';
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'rounded-lg border bg-card text-card-foreground shadow-sm',
=======
      "rounded-lg border bg-card text-card-foreground shadow-sm",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
Card.displayName = 'Card';
=======
))
Card.displayName = "Card"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';
=======
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-2xl font-semibold leading-none tracking-tight',
=======
      "text-2xl font-semibold leading-none tracking-tight",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
CardTitle.displayName = 'CardTitle';
=======
))
CardTitle.displayName = "CardTitle"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
<<<<<<< HEAD
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';
=======
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';
=======
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
=======
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
