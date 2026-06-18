type SectionHeadingProps = {
  kicker: string
  title: string
  reveal?: boolean
}

export function SectionHeading({
  kicker,
  title,
  reveal = true,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 max-w-3xl" data-reveal={reveal || undefined}>
      <p className="m-0 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase">
        {kicker}
      </p>
      <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-normal text-foreground">
        {title}
      </h2>
    </div>
  )
}
