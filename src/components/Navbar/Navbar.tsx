import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavItem, NavItemProps } from "./NavItem";

const menuitems: NavItemProps[] = [
  {
    textPrimary: "Inicio",
    href: "#",
    variant: "isActive",
  },
  {
    textPrimary: "Sobre",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <NavigationMenu.Root className="px-4 py-4 border border-metal-light rounded-full bg-surface-secondary-light/80 dark:bg-surface-secondary/50 shadow-lg shadow-[#45A6AA]/5">
      <NavigationMenu.List className="flex gap-10">
        {menuitems.map((item) => (
          <NavItem
            key={item.href}
            textPrimary={item.textPrimary}
            textSecondary={item.textSecondary}
            href={item.href}
            variant={item.variant}
          />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;
