import React from "react"
import { twMerge } from "tailwind-merge"

const base = {
  style: `font-display inline-flex items-center justify-center font-bold rounded-md transition-all ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`,
}

const variants = {
  style: {
    callers: `${base.style} text-on-primary border-2 border-dev-secondary hover:bg-dev-secondary hover:text-on-neutral focus:ring-dev-secondary dark:border-dev-primary dark:hover:bg-dev-primary dark:focus:ring-dev-primary`,
    info: `${base.style} text-on-neutral-dark bg-pro-primary hover:bg-pro-secondary focus:ring-on-neutral-dark`,
  },
  size: {
    sm: `px-4 py-2 text-sm gap-2`,
    md: `px-6 py-3 text-lg gap-3`,
    lg: `px-8 py-4 text-2xl gap-4`,
  },
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants.style
  size?: keyof typeof variants.size
  handler?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "callers",
      size = "lg",
      handler,
      children,
      className,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          variants.style[variant],
          variants.size[size],
          className,
        )}
        onClick={handler}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export default Button
