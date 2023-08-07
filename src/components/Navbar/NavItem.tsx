import { cn } from "../../lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export interface NavItemProps extends VariantProps<typeof navItemVariants> {
  textPrimary: string;
  textSecondary?: string;
  href: string;
}

const navItemVariants = cva(
  "text-xl text-on-primary capitalize px-[0.875rem] py-2 cursor-pointer hover:opacity-80",
  {
    variants: {
      variant: {
        isActive:
          "text-surface-primary font-bold rounded-full bg-gradient-to-br from-dev-primary to-dev-secondary",
      },
    },
  }
);

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ textPrimary = "Default", textSecondary, variant, href }, ref) => {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className={cn(navItemVariants({ variant }))}
          href={href}
          ref={ref}
        >
          {textPrimary}
          {textSecondary && (
            <span className="text-[#FF8139] font-bold uppercase pl-1">
              {textSecondary}
            </span>
          )}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }
);
NavItem.displayName = "NavItem";
