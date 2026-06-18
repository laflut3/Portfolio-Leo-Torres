import { type RefObject } from 'react'

type OrbitPanelProps = {
  orbitRef: RefObject<HTMLDivElement | null>
}

export function OrbitPanel({ orbitRef }: OrbitPanelProps) {
  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--portfolio-line)_100%,transparent)] bg-[linear-gradient(180deg,var(--portfolio-panel-strong),color-mix(in_oklch,var(--portfolio-bg-c)_92%,transparent)),radial-gradient(circle_at_center,color-mix(in_oklch,var(--portfolio-cyan)_22%,transparent),transparent_52%)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] before:absolute before:inset-4 before:border before:border-[color-mix(in_oklch,var(--portfolio-cyan)_10%,transparent)] before:content-[''] max-md:min-h-[420px]"
      aria-label="Résumé DevOps"
      data-reveal
    >
      <div ref={orbitRef} className="absolute inset-8" aria-hidden="true">
        <span className="absolute inset-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-[color-mix(in_oklch,var(--portfolio-cyan)_22%,transparent)]"></span>
        <span className="absolute inset-1/2 h-44 w-[430px] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-[color-mix(in_oklch,var(--portfolio-amber)_24%,transparent)]"></span>
        <span className="absolute inset-1/2 h-[420px] w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-[color-mix(in_oklch,var(--portfolio-cyan)_22%,transparent)]"></span>
        <span className="absolute top-[22%] left-[68%] size-2.5 rounded-full bg-[var(--portfolio-cyan)] shadow-[0_0_24px_var(--portfolio-cyan)]"></span>
        <span className="absolute right-[17%] bottom-[26%] size-2.5 rounded-full bg-[var(--portfolio-amber)] shadow-[0_0_24px_var(--portfolio-amber)]"></span>
      </div>
      <div className="relative z-[1] flex min-h-[464px] flex-col justify-between max-md:min-h-[364px]">
        <div>
          <span className="text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase">
            Current focus
          </span>
          <h2 className="mt-3 max-w-sm text-4xl leading-[1.05] font-medium tracking-normal text-foreground">
            Infrastructure fiable, livrée simplement.
          </h2>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-3 border border-[color-mix(in_oklch,var(--portfolio-line)_100%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-bg-a)_58%,transparent)] p-4">
          <span>Build</span>
          <strong className="text-emerald-300">Passing</strong>
          <span>Image</span>
          <strong className="text-emerald-300">Hardened</strong>
          <span>Release</span>
          <strong className="text-emerald-300">SemVer</strong>
        </div>
      </div>
    </div>
  )
}
