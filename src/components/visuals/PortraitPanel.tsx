import { Orbit, ServerCog } from 'lucide-react'
import photoSrc from '@/assets/leo-torres.webp'

export function PortraitPanel() {
  return (
    <div
      className="relative overflow-hidden rounded-[2.25rem] border border-[var(--portfolio-line)] bg-[linear-gradient(145deg,var(--portfolio-panel-strong),color-mix(in_oklch,var(--portfolio-panel)_80%,transparent))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
      data-reveal
    >
      <div className="absolute -top-16 -right-20 size-56 rounded-full border border-[color-mix(in_oklch,var(--portfolio-cyan)_20%,transparent)]" />
      <div className="absolute -bottom-20 -left-16 size-48 rounded-full border border-[color-mix(in_oklch,var(--portfolio-amber)_22%,transparent)]" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[var(--portfolio-line)] bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklch,var(--portfolio-cyan)_22%,transparent),transparent_42%),linear-gradient(160deg,var(--portfolio-bg-b),var(--portfolio-bg-c))]">
        <div
          aria-hidden="true"
          className="absolute inset-8 rounded-full border border-[var(--portfolio-orbit)]"
        />
        <div
          aria-hidden="true"
          className="absolute top-14 left-1/2 h-44 w-[150%] -translate-x-1/2 rotate-[-18deg] rounded-full border border-[color-mix(in_oklch,var(--portfolio-amber)_22%,transparent)]"
        />
        <img
          src={photoSrc}
          alt="Portrait de Leo Torres"
          className="size-full object-cover"
        />
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--portfolio-text-soft)]">
            <ServerCog className="size-3.5" aria-hidden="true" />
            Profil
          </span>
          <strong className="mt-1 block text-foreground">DevOps</strong>
        </div>
        <div className="rounded-2xl border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--portfolio-text-soft)]">
            <Orbit className="size-3.5" aria-hidden="true" />
            Passion
          </span>
          <strong className="mt-1 block text-foreground">Espace</strong>
        </div>
      </div>
    </div>
  )
}
