<<<<<<< HEAD
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
=======
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
<<<<<<< HEAD
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;
=======
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
<<<<<<< HEAD
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);
=======
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';
=======
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
  const { error, formItemId } = useFormField();
=======
  const { error, formItemId } = useFormField()
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

  return (
    <Label
      ref={ref}
<<<<<<< HEAD
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';
=======
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
<<<<<<< HEAD
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
=======
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
<<<<<<< HEAD
  );
});
FormControl.displayName = 'FormControl';
=======
  )
})
FormControl.displayName = "FormControl"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
<<<<<<< HEAD
  const { formDescriptionId } = useFormField();
=======
  const { formDescriptionId } = useFormField()
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

  return (
    <p
      ref={ref}
      id={formDescriptionId}
<<<<<<< HEAD
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';
=======
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
<<<<<<< HEAD
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
=======
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
<<<<<<< HEAD
      className={cn('text-sm font-medium text-destructive', className)}
=======
      className={cn("text-sm font-medium text-destructive", className)}
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
      {...props}
    >
      {body}
    </p>
<<<<<<< HEAD
  );
});
FormMessage.displayName = 'FormMessage';
=======
  )
})
FormMessage.displayName = "FormMessage"
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
<<<<<<< HEAD
};
=======
}
>>>>>>> 9b78a282fe1308a188ab7bd7da4e086ddc886dc8
