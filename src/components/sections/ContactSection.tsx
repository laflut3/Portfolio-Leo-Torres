import { BriefcaseBusiness, Code, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n'

export function ContactSection() {
  const { copy } = useTranslation()
  return (
    <section
      id="contact"
      className="contact-shell mt-24 mb-18 grid grid-cols-[minmax(0,1fr)_minmax(15rem,0.5fr)] items-end gap-x-16 gap-y-8 border-y border-[var(--portfolio-line)] py-14 max-md:mt-14 max-md:grid-cols-1 max-md:py-10"
      data-reveal
    >
      <div>
        <p className="m-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
          <Mail className="size-4" aria-hidden="true" />
          {copy.contact.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-foreground">
          {copy.contact.title}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-3">
        <Button asChild className="contact-primary-action">
          <a href="https://github.com/laflut3" target="_blank" rel="noreferrer">
            <Code data-icon="inline-start" />
            {copy.contact.github}
          </a>
        </Button>
        <Button asChild variant="outline" className="contact-secondary-action">
          <a
            href="https://www.linkedin.com/in/leo-torres-804687264/"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness data-icon="inline-start" />
            {copy.contact.linkedin}
          </a>
        </Button>
        <Button asChild variant="ghost" className="contact-secondary-action">
          <a href="mailto:leo0609leo@gmail.com">
            <Mail data-icon="inline-start" />
            {copy.contact.email}
          </a>
        </Button>
      </div>
    </section>
  )
}
