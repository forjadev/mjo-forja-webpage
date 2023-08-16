import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
  "font-display inline-flex items-center justify-center font-bold rounded-md transition-all ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        callers:
          "text-on-primary border-2 border-palette-blue-600 hover:bg-palette-blue-600 hover:text-on-neutral focus:ring-palette-blue-600 dark:border-palette-turquoise-400 dark:hover:bg-palette-turquoise-400 dark:focus:ring-palette-turquoise-400",
        info: "text-on-neutral-dark bg-palette-orange-300 hover:bg-palette-orange-500 focus:ring-on-neutral-dark",
      },
      size: {
        sm: "px-4 py-2 text-sm gap-2",
        md: "px-6 py-3 text-lg gap-3",
        lg: "px-8 py-4 text-2xl gap-4",
      },
    },
    defaultVariants: {
      variant: "callers",
      size: "lg",
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
