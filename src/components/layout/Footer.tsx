import { Link } from '@tanstack/react-router'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GitFork,
  Mail,
} from 'lucide-react'
import { pathFor, type PageKey, useTranslation } from '@/i18n'

const pages = [
  'profile',
  'skills',
  'projects',
  'experience',
  'contact',
] as const satisfies readonly PageKey[]

export function Footer() {
  const { locale, copy } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer-shell relative mt-24 border-t border-[var(--portfolio-line)]">
      <div className="mx-auto grid w-[min(1240px,calc(100%_-_48px))] grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] gap-x-10 gap-y-10 py-14 max-lg:grid-cols-2 max-md:w-[min(100%_-_28px,1240px)] max-md:grid-cols-1 max-md:gap-y-8 max-md:py-10">
        <div className="max-w-xs">
          <Link
            to={pathFor(locale, 'profile')}
            className="inline-flex items-center gap-3 text-lg font-semibold tracking-[-0.04em] text-foreground no-underline"
          >
            <span className="grid size-10 place-items-center border border-[var(--portfolio-accent)] font-bold text-[var(--portfolio-accent)]">
              LT
            </span>
            Leo Torres
          </Link>
          <p className="mt-5 text-sm leading-6 text-[var(--portfolio-text-soft)]">
            {copy.footer.description}
          </p>
        </div>

        <div>
          <h2 className="footer-heading">{copy.footer.navigation}</h2>
          <ul className="footer-links">
            {pages.map((page) => (
              <li key={page}>
                <Link to={pathFor(locale, page)}>{copy.nav[page]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">{copy.footer.connect}</h2>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/laflut3"
                target="_blank"
                rel="noreferrer"
              >
                <GitFork aria-hidden="true" className="size-4" />
                {copy.footer.github}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leo-torres-804687264/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness aria-hidden="true" className="size-4" />
                {copy.footer.linkedin}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </li>
            <li>
              <Link to={pathFor(locale, 'contact')}>
                <Mail aria-hidden="true" className="size-4" />
                {copy.footer.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">{copy.footer.stack}</h2>
          <p className="mt-4 flex max-w-44 items-start gap-2 text-sm leading-6 text-[var(--portfolio-text-soft)]">
            <Code2
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-[var(--portfolio-accent)]"
            />
            {copy.footer.stackValue}
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-[min(1240px,calc(100%_-_48px))] items-center justify-between gap-4 border-t border-[var(--portfolio-line)] py-6 text-xs text-[var(--portfolio-text-soft)] max-md:w-[min(100%_-_28px,1240px)] max-md:flex-col max-md:items-start">
        <span>© {year} Leo Torres.</span>
        <span>{copy.footer.copyright}</span>
      </div>
    </footer>
  )
}
