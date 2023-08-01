import React from "react"
import { twMerge } from "tailwind-merge"

const base = {
  style: `inline-flex items-center justify-center font-bold rounded-md transition-all ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`,
}

const variants = {
  style: {
    callers: `${base.style} text-[#202036] border-2 border-[#1E82BA] hover:bg-[#1E82BA] hover:text-[#202036] hover:text-[#D9E0EE] focus:ring-[#1E82BA] dark:text-[#D9E0EE] dark:border-[#3ADBC8] dark:hover:bg-[#3ADBC8] dark:hover:text-[#202036] dark:focus:ring-[#3ADBC8]`,
    info: `${base.style} text-[#202036] bg-[#FBB361] hover:bg-[#FF9F2F] focus:ring-[#202036]`,
  },
  size: {
    sm: `px-4 py-2 text-sm`,
    md: `px-6 py-3 text-lg`,
    lg: `px-8 py-4 text-2xl`,
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
