import Link from "next/link"

interface NavItemProps {
  children: React.ReactNode
  isActive?: boolean
  href: string
}

export const NavItem = ({ children, isActive, href }: NavItemProps) => {
  return (
    <li
      className={`px-4 py-3 cursor-pointer hover:text-[#C8FBEE] transition-all
    ${
      isActive
        ? "bg-gradient-to-br from-[#3EF3FF] to-[#C8FBEE] rounded-full text-black font-bold hover:text-gray-600"
        : ""
    }
  `}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}
