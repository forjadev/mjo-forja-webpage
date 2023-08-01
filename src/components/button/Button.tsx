import React from "react"

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary, children, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className='
  text-2xl font-bold px-8 py-4 rounded-md border-2 border-[#3ADBC8] hover:bg-[#3ADBC8] hover:text-[#202036] transition-all ease-out cursor-pointer'
        onClick={() => alert("Vamos Nessa!")}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export default Button
