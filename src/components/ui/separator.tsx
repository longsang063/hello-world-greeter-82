<<<<<<< HEAD
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';
=======
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
<<<<<<< HEAD
    { className, orientation = 'horizontal', decorative = true, ...props },
=======
    { className, orientation = "horizontal", decorative = true, ...props },
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
<<<<<<< HEAD
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
=======
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
        className
      )}
      {...props}
    />
  )
<<<<<<< HEAD
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
=======
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
