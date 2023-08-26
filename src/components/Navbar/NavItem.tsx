"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { cva, VariantProps } from "class-variance-authority";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink } from "./NavIgationPrimitives";

export interface NavItemProps extends VariantProps<typeof navItemVariants>, NavigationMenu.NavigationMenuLinkProps {
  href: string;
}

const navItemVariants = cva(
  [
    "relative",
    "group",
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "text-xl",
    "font-body",
    "capitalize",
    "text-on-secondary-light",
    "dark:text-on-secondary-dark",
    "hover:text-on-primary-light",
    "dark:hover:text-on-primary-dark",
    "disabled:pointer-events-none",
    "disabled:opacity-50 ",
    "cursor-pointer",
  ],
  {
    variants: {
      isActive: {
        true:
          [
            "transition-colors",
            "focus:outline-none", 
            "focus:text-on-primary-light",
            "dark:focus:text-on-primary-dark",
            "text-on-primary-light",
            "dark:text-on-primary-dark",
            "hover:text-on-secondary-light",
            "dark:hover:text-on-secondary-dark",
            "before:absolute",
            "before:w-full",
            "before:h-px",
            "before:rounded-full",
            "before:-bottom-4",
            "before:bg-surface-primary-dark",
            "dark:before:bg-surface-primary-light",
            "hover:before:bg-on-secondary-light",
            "dark:hover:before:bg-on-secondary-dark",
          ],
      },
    },
  }
);

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ children, className, isActive, href, ...props }, ref) => {
    const pathname = usePathname()
    const activeLink = pathname === href

    return (

      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(navItemVariants({ isActive: activeLink || isActive, className }))}
          ref={ref}
          asChild
          active={activeLink}
          {...props}
        >
          <Link href={href}>{children}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem >
    );
  }
);
NavItem.displayName = "NavItem";
