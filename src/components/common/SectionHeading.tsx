import { type ReactNode } from 'react'

type SectionHeadingProps = {
  kicker: string
  title: string
  icon?: ReactNode
  reveal?: boolean
}

export function SectionHeading({
  kicker,
  title,
  icon,
  reveal = true,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 max-w-3xl" data-reveal={reveal || undefined}>
      <div className="flex items-center gap-2 text-[var(--portfolio-accent)]">
        {icon}
        <p className="m-0 text-xs font-bold tracking-[0.16em] uppercase">
          {kicker}
        </p>
      </div>
      <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.7rem)] leading-[0.96] font-semibold tracking-[-0.06em] text-foreground">
        {title}
      </h2>
    </div>
  )
}
