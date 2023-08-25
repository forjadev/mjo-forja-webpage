"use client"

import { usePathname } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

interface IMobileLinkProps extends LinkProps, VariantProps<typeof mobileLinkVariants> {
  href: string
  children: React.ReactNode
  className?: string
}

const mobileLinkVariants = cva(
  [
    "relative",
    "font-display",
    "text-on-secondary-light",
    "dark:text-on-secondary-dark",
    "hover:text-on-primary-light",
    "dark:hover:text-on-primary-dark", 
    "capitalize"
  ],
  {
    variants: {
        active: {
          true: [
            "text-on-primary-light", 
            "dark:text-on-primary-dark",
            "bg-surface-metal-light",
            "dark:bg-surface-metal-dark",
          ],
        }
      }
  }
);


export const MobileLink = forwardRef<HTMLAnchorElement, IMobileLinkProps>((
  { href, children, active, className, ...props }, ref
) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} ref={ref} className={cn(mobileLinkVariants({ active: isActive || active, className  }))} {...props}>
      {children}
    </Link>
  )
})

MobileLink.displayName = 'Link'