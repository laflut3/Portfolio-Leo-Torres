import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from '@/i18n'

export function ProjectLink({
  slug,
  children,
  className,
}: {
  slug: string
  children: ReactNode
  className?: string
}) {
  const { locale } = useTranslation()

  if (locale === 'fr-fr') {
    return (
      <Link to="/fr-fr/projets/$slug" params={{ slug }} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link to="/en-us/projects/$slug" params={{ slug }} className={className}>
      {children}
    </Link>
  )
}
