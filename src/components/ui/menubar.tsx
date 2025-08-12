<<<<<<< HEAD
import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
=======
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
=======
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
=======
))
Menubar.displayName = MenubarPrimitive.Root.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
=======
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
=======
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
<<<<<<< HEAD
    inset?: boolean;
=======
    inset?: boolean
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
=======
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  >
    {children}
<<<<<<< HEAD
    <ChevronRight className='ml-auto h-4 w-4' />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
=======
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
=======
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
<<<<<<< HEAD
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
=======
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
<<<<<<< HEAD
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
=======
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
<<<<<<< HEAD
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
=======
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
<<<<<<< HEAD
    inset?: boolean;
=======
    inset?: boolean
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
=======
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
=======
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
=======
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    checked={checked}
    {...props}
  >
<<<<<<< HEAD
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MenubarPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
=======
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
<<<<<<< HEAD
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
=======
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
=======
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  >
<<<<<<< HEAD
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MenubarPrimitive.ItemIndicator>
        <Circle className='h-2 w-2 fill-current' />
=======
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
<<<<<<< HEAD
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
=======
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
<<<<<<< HEAD
    inset?: boolean;
=======
    inset?: boolean
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
=======
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
=======
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
<<<<<<< HEAD
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
=======
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
<<<<<<< HEAD
        'ml-auto text-xs tracking-widest text-muted-foreground',
=======
        "ml-auto text-xs tracking-widest text-muted-foreground",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
        className
      )}
      {...props}
    />
<<<<<<< HEAD
  );
};
MenubarShortcut.displayname = 'MenubarShortcut';
=======
  )
}
MenubarShortcut.displayname = "MenubarShortcut"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
<<<<<<< HEAD
};
=======
}
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
