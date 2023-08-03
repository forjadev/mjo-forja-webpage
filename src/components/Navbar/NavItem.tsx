import Link from "next/link"
import { HtmlHTMLAttributes } from "react"

interface NavItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  textPrimary: string
  textSecondary?: string
  href: string
  isActive?: boolean
}

export const NavItem = ({ textPrimary = "Default", textSecondary, isActive = false, href, ...props }: NavItemProps) => {
  return (
    <li {...props}>
      <Link 
        className={`text-xl text-[#D9E0EE] capitalize px-[0.875rem] py-2 cursor-pointer hover:opacity-80 
        ${isActive ? 'text-[#191B21] font-bold rounded-full bg-gradient-to-br from-[#3ADBC8] to-[#1E82BA]' : ''}`} 
        href={href} as={href}
      >
          {textPrimary}
          {textSecondary && 
          <span className="text-[#FF8139] font-bold uppercase pl-1">
            {textSecondary}
          </span>}
      </Link>
    </li>
  )
}

NavItem.displayName = "NavItem"