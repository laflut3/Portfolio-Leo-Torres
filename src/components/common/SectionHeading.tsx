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
      <div className="flex items-center gap-2 text-[var(--portfolio-cyan)]">
        {icon}
        <p className="m-0 text-xs font-bold tracking-[0.16em] uppercase">
          {kicker}
        </p>
      </div>
      <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-normal text-foreground">
        {title}
      </h2>
    </div>
  )
}
