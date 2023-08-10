import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("font-display text-on-neutral-dark", {
  variants: {
    level: {
      h1: "font-bold text-5xl",
      h2: "font-bold text-4xl",
      h3: "font-semibold text-2xl",
      h4: "font-medium text-lg",
      h5: "font-normal text-base",
      h6: "font-normal text-sm",
    },
    colors: {
      gradient:
        "bg-clip-text text-transparent  bg-gradient-to-br from-dev-primary to-dev-secondary",
      devPrimary: "text-dev-primary",
      devSecondary: "text-dev-secondary",
      surfacePrimaryDark: "text-surface-primary-dark",
      surfacePrimaryLight: "text-surface-primary-light",
      surfaceSecondaryDark: "text-surface-secondary-dark",
      surfaceSecondaryLight: "text-surface-secondary-light",
      onPrimary: "text-on-primary",
      onSecondary: "text-on-secondary",
    },
  },
  defaultVariants: {
    level: "h1",
    colors: "onPrimary",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, colors, className, ...props }: HeadingProps, ref) => {
    const Tag = level || "h1";

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, colors, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";
export { Heading, headingVariants };
