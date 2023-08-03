import { NavItem } from "./NavItem"

const Navbar = () => {
  return (
    <nav className="px-8 py-4 border border-[#43485F] rounded-full bg-[#221E1E]/50 shadow-lg shadow-[#45A6AA]/5">
      <ul className="flex gap-10 text-[#D9E0EE]">
        <NavItem textPrimary="Início" href="/" isActive={true} />
        <NavItem textPrimary="Sobre" href="#" />
        <NavItem textPrimary="Conteúdos" href="#" />
        <NavItem textPrimary="Seja" textSecondary="pro" href="#" />
      </ul>
    </nav>
  )
}

export default Navbar