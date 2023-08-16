import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
  "font-display inline-flex items-center justify-center font-bold rounded-md transition-all ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "text-on-primary-dark bg-surface-metal-dark hover:bg-surface-secondary-dark focus:ring-surface-metal-dark dark:text-on-primary-light dark:bg-surface-metal-light dark:hover:bg-surface-secondary-light dark:focus:ring-surface-metal-light",
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
