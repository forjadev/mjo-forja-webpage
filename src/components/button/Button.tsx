import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
  [
    // Structure
    "font-display",
    "font-bold",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    // Behaviour
    "cursor-pointer",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
    // Animation
    "transition-all",
    "transform",
    "ease-out",
    "active:scale-95",
  ],
  {
    variants: {
      variant: {
        default: [
          // Light Theme
          "text-on-primary-dark",
          "bg-surface-metal-dark",
          "hover:bg-surface-secondary-dark",
          "focus:ring-surface-metal-dark",
          // Dark Theme
          "dark:text-on-primary-light",
          "dark:bg-surface-metal-light",
          "dark:hover:bg-surface-secondary-light",
          "dark:focus:ring-surface-metal-light",
        ],
        neutral: [
          // Light Theme
          "text-on-neutral-dark",
          "bg-on-neutral-light",
          "hover:bg-surface-metal-light",
          "focus:ring-on-neutral-light",
          // Dark Theme
          "dark:text-on-neutral-light",
          "dark:bg-surface-metal-dark",
          "dark:hover:bg-on-primary-light",
          "dark:focus:ring-surface-metal-dark",
        ],
        ghost: [
          // Light Theme
          "text-on-neutral-dark",
          "bg-transparent",
          "hover:bg-surface-primary-dark",
          "hover:bg-opacity-10",
          "focus:ring-surface-primary-dark/10",
          // Dark Theme
          "dark:text-on-neutral-light",
          "dark:hover:bg-surface-primary-light",
          "dark:hover:bg-opacity-10",
          "dark:focus:ring-surface-primary-light/10",
        ],
        primary: [
          // Both Themes
          "text-on-primary-light",
          "bg-palette-cyan-300",
          "hover:bg-palette-cyan-400",
          "focus:ring-palette-cyan-300",
        ],
        secondary: [
          // Light Theme
          "text-on-neutral-dark",
          "bg-palette-purple-400",
          "hover:bg-palette-purple-500",
          "focus:ring-palette-purple-400",
          // Dark Theme
          "dark:text-on-neutral-light",
          "dark:bg-palette-purple-500",
          "dark:hover:bg-palette-purple-600",
          "dark:focus:ring-palette-purple-500",
        ],
        accent: [
          // Light Theme
          "text-on-neutral-dark",
          "bg-palette-yellow-400",
          "hover:bg-palette-yellow-500",
          "focus:ring-palette-yellow-400",
          // Dark Theme
          "dark:hover:text-on-neutral-light",
          "dark:bg-palette-yellow-500",
          "dark:hover:bg-palette-yellow-600",
          "dark:focus:ring-palette-yellow-500",
        ],
      },
      size: {
        sm: ["px-4", "py-2", "text-sm", "gap-2"],
        md: ["px-6", "py-3", "text-lg", "gap-3"],
        lg: ["px-8", "py-4", "text-2xl", "gap-4"],
      },
      outline: {
        true: ["bg-transparent", "border-2", "dark:bg-transparent"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
    compoundVariants: [
      {
        variant: "default",
        outline: true,
        class: [
          // Light Theme
          "border-surface-metal-dark",
          "text-surface-metal-dark",
          "hover:text-surface-secondary-light",
          // Dark Theme
          "dark:border-surface-metal-light",
          "dark:text-surface-metal-light",
          "dark:hover:text-surface-secondary-dark",
        ],
      },
      {
        variant: "primary",
        outline: true,
        class: [
          "border-palette-cyan-300",
          "text-palette-cyan-300",
          "hover:text-on-primary-light",
          "hover:bg-palette-cyan-300",
          "dark:hover:bg-palette-cyan-300",
        ],
      },
    ],
  },
)

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  outline?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, outline, size, className, asChild, ...props }: ButtonProps,
    ref,
  ) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, outline, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
