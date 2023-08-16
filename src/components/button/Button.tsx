import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
  "font-display inline-flex items-center justify-center font-bold rounded-md transition-all ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95 transition-transform",
  {
    variants: {
      variant: {
        default:
          "text-on-primary-dark bg-surface-metal-dark hover:bg-surface-secondary-dark focus:ring-surface-metal-dark dark:text-on-primary-light dark:bg-surface-metal-light dark:hover:bg-surface-secondary-light dark:focus:ring-surface-metal-light",
        neutral:
          "text-on-neutral-dark bg-on-neutral-light hover:bg-surface-metal-light focus:ring-on-neutral-light dark:text-on-neutral-light dark:bg-surface-metal-dark dark:hover:bg-on-primary-light dark:focus:ring-surface-metal-dark",
        ghost:
          "text-on-neutral-dark bg-transparent hover:bg-surface-primary-dark hover:bg-opacity-10 focus:ring-surface-primary-dark/10 dark:text-on-neutral-light dark:hover:bg-surface-primary-light dark:hover:bg-opacity-10 dark:focus:ring-surface-primary-light/10",
      },
      size: {
        sm: "px-4 py-2 text-sm gap-2",
        md: "px-6 py-3 text-lg gap-3",
        lg: "px-8 py-4 text-2xl gap-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, asChild, ...props }: ButtonProps, ref) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
