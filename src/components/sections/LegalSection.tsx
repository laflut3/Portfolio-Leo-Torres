import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react'
import { useTranslation } from '@/i18n'

export function LegalSection() {
  const { copy } = useTranslation()
  const legal = copy.legal
  const sections = [
    {
      title: legal.publisherTitle,
      content: (
        <>
          <p>{legal.publisher}</p>
          <p>{legal.contact}</p>
        </>
      ),
    },
    {
      title: legal.hostingTitle,
      content: (
        <>
          <p>{legal.hosting}</p>
          <a
            href="https://vercel.com/contact"
            target="_blank"
            rel="noreferrer"
            className="legal-external-link"
          >
            {legal.hostingContact}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </>
      ),
    },
    {
      title: legal.dataTitle,
      content: (
        <>
          <p>{legal.dataIntro}</p>
          <p>{legal.dataTheme}</p>
          <p>{legal.dataContact}</p>
          <p>{legal.dataHosting}</p>
          <a
            href="https://vercel.com/legal/privacy-notice"
            target="_blank"
            rel="noreferrer"
            className="legal-external-link"
          >
            {legal.vercelPrivacy}
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        </>
      ),
    },
    {
      title: legal.cookiesTitle,
      content: <p>{legal.cookies}</p>,
    },
    {
      title: legal.rightsTitle,
      content: (
        <>
          <p>{legal.rights}</p>
          <a
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noreferrer"
            className="legal-external-link"
          >
            <ShieldCheck aria-hidden="true" className="size-4" />
            {legal.cnil}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </>
      ),
    },
  ]

  return (
    <section
      className="mt-20 max-w-4xl pb-8 max-md:mt-12"
      aria-labelledby="legal-title"
    >
      <header className="mb-9 border-b border-[var(--portfolio-line)] pb-8">
        <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
          <ShieldCheck className="size-4" aria-hidden="true" />
          {legal.kicker}
        </p>
        <h1
          id="legal-title"
          className="m-0 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] font-semibold tracking-[-0.07em] text-foreground"
        >
          {legal.title}
        </h1>
        <p className="mt-5 mb-0 max-w-2xl text-base leading-7 text-[var(--portfolio-text-soft)]">
          {legal.intro}
        </p>
      </header>

      <ol className="m-0 list-none p-0">
        {sections.map((section, index) => (
          <li
            key={section.title}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5 border-b border-[var(--portfolio-line)] py-7 max-md:grid-cols-[2rem_minmax(0,1fr)] max-md:gap-3"
          >
            <span className="pt-1 font-mono text-sm tabular-nums text-[var(--portfolio-accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <section aria-labelledby={`legal-section-${index}`}>
              <h2
                id={`legal-section-${index}`}
                className="m-0 text-lg font-semibold tracking-[-0.03em] text-foreground"
              >
                {section.title}
              </h2>
              <div className="legal-copy mt-3 max-w-3xl text-sm leading-7 text-[var(--portfolio-text-soft)]">
                {section.content}
              </div>
            </section>
          </li>
        ))}
      </ol>
    </section>
  )
}
