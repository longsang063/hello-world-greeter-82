<<<<<<< HEAD
import * as React from 'react';

import { cn } from '@/lib/utils';
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div className='relative w-full overflow-auto'>
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';
=======
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';
=======
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
<<<<<<< HEAD
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';
=======
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
=======
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
TableFooter.displayName = 'TableFooter';
=======
))
TableFooter.displayName = "TableFooter"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
=======
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
TableRow.displayName = 'TableRow';
=======
))
TableRow.displayName = "TableRow"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));
TableHead.displayName = 'TableHead';
=======
))
TableHead.displayName = "TableHead"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
<<<<<<< HEAD
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';
=======
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
<<<<<<< HEAD
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';
=======
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
<<<<<<< HEAD
};
=======
}
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
