import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownPrimitives"
import { MobileLink } from "./MobileLink"
import { FiMenu } from "react-icons/fi"

// Change the href when using the menu
const menuitems: { text: string, href: string, active?: boolean }[] = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Sobre",
    href: "/sobre",
  },
  {
    text: "Conteúdo",
    href: "/conteudo",
  },
  {
    text: "Seja PRO",
    href: "/pro",
  }
]

export const MenuMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-surface-secondary-dark dark:text-surface-secondary-light">
        <FiMenu width={24} height={24} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent 
          className="bg-surface-secondary-light dark:bg-surface-secondary-dark border-surface-metal-light dark:border-surface-metal-dark shadow-[#45A6AA]/5"
        >
          <DropdownMenuLabel 
            className="text-on-secondary-light/70 dark:text-on-secondary-dark/70"
          >
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuitems.map((item) => (
            <DropdownMenuItem key={item.text} asChild>
              <MobileLink href={item.href} active={item.active}>
                {item.text}
              </MobileLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}