import { type RefObject, useLayoutEffect, useRef } from 'react'
import {
  Activity,
  RadioTower,
  Rocket,
  Satellite,
  ShieldCheck,
} from 'lucide-react'
import gsap from 'gsap'

type IntroOverlayProps = {
  onComplete: () => void
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const introRef = useRef<HTMLDivElement>(null)

  useIntroAnimation(introRef, onComplete)

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[linear-gradient(135deg,var(--portfolio-bg-a)_0%,var(--portfolio-bg-b)_45%,var(--portfolio-bg-c)_100%)] text-foreground"
    >
      <div
        aria-hidden="true"
        data-intro-grid
        className="absolute inset-0 bg-[linear-gradient(var(--portfolio-line)_1px,transparent_1px),linear-gradient(90deg,var(--portfolio-line)_1px,transparent_1px)] bg-[length:88px_88px] opacity-0 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        data-intro-stars
        className="absolute inset-0 bg-[radial-gradient(circle,var(--portfolio-star)_1px,transparent_1px)] bg-[length:96px_96px] opacity-0"
      />
      <div
        aria-hidden="true"
        data-intro-scan
        className="absolute inset-x-0 top-1/2 h-px origin-left bg-[linear-gradient(90deg,transparent,var(--portfolio-cyan),var(--portfolio-amber),transparent)] opacity-0 shadow-[0_0_32px_color-mix(in_oklch,var(--portfolio-cyan)_55%,transparent)]"
      />
      <div
        aria-hidden="true"
        data-intro-orbit
        className="absolute size-[min(76vw,34rem)] rounded-full border border-[var(--portfolio-orbit)] opacity-0"
      />
      <div
        aria-hidden="true"
        data-intro-orbit
        className="absolute size-[min(58vw,25rem)] rounded-full border border-[color-mix(in_oklch,var(--portfolio-amber)_25%,transparent)] opacity-0"
      />
      <span
        aria-hidden="true"
        data-intro-node
        className="absolute top-1/2 left-1/2 size-3 rounded-full bg-[var(--portfolio-amber)] opacity-0 shadow-[0_0_24px_var(--portfolio-amber)]"
      />

      <div className="relative flex w-[min(34rem,calc(100%_-_40px))] flex-col items-center gap-7 px-6 text-center">
        <div
          data-intro-mark
          className="relative grid size-24 place-items-center overflow-hidden rounded-[1.5rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-panel-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md"
        >
          <span
            aria-hidden="true"
            data-intro-mark-sweep
            className="absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,color-mix(in_oklch,var(--portfolio-cyan)_20%,transparent),transparent)]"
          />
          <Satellite
            aria-hidden="true"
            className="absolute -top-4 -right-4 size-8 text-[var(--portfolio-amber)]"
          />
          <Rocket
            aria-hidden="true"
            className="size-10 text-[var(--portfolio-cyan)]"
          />
        </div>
        <div>
          <p
            data-intro-copy
            className="m-0 text-xs font-bold tracking-[0.18em] text-[var(--portfolio-cyan)] uppercase"
          >
            Leo Torres
          </p>
          <h1
            data-intro-copy
            className="mt-3 text-[clamp(2.2rem,7vw,5.6rem)] leading-[0.92] font-medium tracking-normal"
          >
            Connecting to the system
          </h1>
        </div>
        <div className="grid w-full gap-2 text-left" data-intro-status-list>
          {[
            { label: 'Pipeline', value: 'Build verified', Icon: Activity },
            { label: 'Security', value: 'Checks active', Icon: ShieldCheck },
            { label: 'Signal', value: 'Interface ready', Icon: RadioTower },
          ].map(({ label, value, Icon }) => (
            <div
              key={label}
              data-intro-status
              className="flex items-center justify-between gap-4 rounded-xl border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] px-4 py-3 text-sm backdrop-blur-md"
            >
              <span className="inline-flex items-center gap-2 text-[var(--portfolio-text-soft)]">
                <Icon className="size-4 text-[var(--portfolio-cyan)]" />
                {label}
              </span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
        <div
          data-intro-loader
          className="h-1 w-[min(18rem,70vw)] overflow-hidden rounded-full bg-[color-mix(in_oklch,var(--portfolio-cyan)_12%,transparent)]"
        >
          <div
            data-intro-progress
            className="h-full origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,var(--portfolio-cyan),var(--portfolio-amber))]"
          />
        </div>
      </div>
    </div>
  )
}

function useIntroAnimation(
  introRef: RefObject<HTMLDivElement | null>,
  onComplete: () => void,
) {
  useLayoutEffect(() => {
    if (!introRef.current) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }

    const context = gsap.context(() => {
      gsap.set('[data-intro-node]', {
        x: '-50%',
        y: '-50%',
      })

      gsap.to('[data-intro-stars]', {
        backgroundPosition: '64px 42px',
        duration: 3.4,
        ease: 'none',
      })

      gsap.to('[data-intro-node]', {
        rotate: 360,
        transformOrigin: '0 13rem',
        duration: 2.2,
        ease: 'power1.inOut',
      })

      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
          onComplete,
        })
        .fromTo(
          '[data-intro-grid], [data-intro-stars]',
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 0.65, stagger: 0.08 },
        )
        .fromTo(
          '[data-intro-mark]',
          { autoAlpha: 0, y: 18, scale: 0.86, rotate: -4 },
          { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.62 },
          0.12,
        )
        .fromTo(
          '[data-intro-scan]',
          { opacity: 0, scaleX: 0, y: -90 },
          {
            opacity: 1,
            scaleX: 1,
            y: 100,
            duration: 1.15,
            ease: 'power2.inOut',
          },
          '<0.1',
        )
        .fromTo(
          '[data-intro-orbit]',
          { opacity: 0, scale: 0.72, rotate: -14 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.85, stagger: 0.09 },
          '<0.08',
        )
        .to('[data-intro-node]', { opacity: 1, duration: 0.3 }, '<0.18')
        .fromTo(
          '[data-intro-copy]',
          { autoAlpha: 0, y: 16, filter: 'blur(4px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.42,
            stagger: 0.08,
          },
          0.18,
        )
        .fromTo(
          '[data-intro-mark-sweep]',
          { xPercent: 0 },
          { xPercent: 320, duration: 0.78, ease: 'power2.inOut' },
          0.24,
        )
        .fromTo(
          '[data-intro-status]',
          { autoAlpha: 0, x: -18 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.42,
            stagger: 0.09,
          },
          0.78,
        )
        .to('[data-intro-progress]', {
          scaleX: 1,
          duration: 0.9,
          ease: 'power2.inOut',
        })
        .to(
          '[data-intro-status]',
          {
            borderColor:
              'color-mix(in oklch,var(--portfolio-cyan) 34%,transparent)',
            duration: 0.28,
            stagger: 0.05,
          },
          '<0.2',
        )
        .to(
          '[data-intro-mark]',
          {
            y: -10,
            scale: 0.94,
            duration: 0.38,
            ease: 'power2.in',
          },
          '+=0.08',
        )
        .to(
          introRef.current,
          {
            autoAlpha: 0,
            scale: 1.025,
            duration: 0.52,
            ease: 'power2.inOut',
          },
          '<0.08',
        )
    }, introRef)

    return () => context.revert()
  }, [introRef, onComplete])
}
