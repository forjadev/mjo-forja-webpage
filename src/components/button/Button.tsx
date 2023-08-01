import React from "react"

const base = {
  style: `text-2xl font-bold px-8 py-4 rounded-md transition-all ease-out cursor-pointer`,
}

const variants = {
  style: {
    callers: `${base.style} border-2 border-[#3ADBC8] hover:bg-[#3ADBC8] hover:text-[#202036]`,
    info: `${base.style} text-[#202036] bg-[#FBB361] hover:bg-[#FF9F2F]`,
  },
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants.style
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "callers", children, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={variants.style[variant]}
        onClick={() => alert("Vamos Nessa!")}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export default Button
