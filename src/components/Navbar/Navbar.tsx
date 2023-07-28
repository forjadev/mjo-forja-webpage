import { NavItem } from "./NavItem"

interface NavbarProps {
  children?: React.ReactNode
}

// NavLink to do: add a link tag
export const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex items-center border border-[#43485F] rounded-full bg-[#221E1E]/50 shadow-[0_4px_4px_#45A6AA1A]">
      <ul className="flex gap-10 px-4 py-2 text-[#D9E0EE] capitalize">
        <NavItem href="#" isActive>
          inicio
        </NavItem>
        <NavItem href="#">sobre</NavItem>
        <NavItem href="#">conteúdos</NavItem>
        <NavItem href="#">
          seja <span className="text-orange-600 font-black uppercase">pro</span>
        </NavItem>
      </ul>
    </nav>
  )
}
