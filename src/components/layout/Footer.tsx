import { Server } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-[min(1120px,calc(100%_-_40px))] justify-between gap-5 border-t border-[var(--portfolio-line)] py-6 pb-9 text-sm text-[var(--portfolio-text-soft)] max-md:w-[min(100%_-_28px,1120px)] max-md:flex-col">
      <span>Leo Torres</span>
      <span className="inline-flex items-center gap-2">
        <Server aria-hidden="true" /> Built with React, Vite, Tailwind and
        Docker.
      </span>
    </footer>
  )
}
