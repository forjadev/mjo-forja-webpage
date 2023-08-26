import { NavItem } from "./NavItem";
import { NavigationMenu, NavigationMenuList } from "./NavIgationPrimitives";

// change the href when implementing this
export const Navbar = ({className}: {className?: string}) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-10">
          <NavItem href="/">
            Início
          </NavItem>
          <NavItem href="/about">
            Sobre
          </NavItem>
          <NavItem href="/conteudos">
            Conteúdos
          </NavItem>
          <NavItem href="/pro">
            Seja <span className="font-bold text-palette-orange-500 whitespace-pre"> PRO</span>
          </NavItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
