import { type RefObject, useLayoutEffect, useRef } from 'react'
import { Rocket, Satellite } from 'lucide-react'
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
        data-intro-orbit
        className="absolute size-[min(76vw,34rem)] rounded-full border border-[var(--portfolio-orbit)] opacity-0"
      />
      <div
        aria-hidden="true"
        data-intro-orbit
        className="absolute size-[min(58vw,25rem)] rounded-full border border-[color-mix(in_oklch,var(--portfolio-amber)_25%,transparent)] opacity-0"
      />

      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div
          data-intro-mark
          className="relative grid size-24 place-items-center rounded-[1.5rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-panel-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md"
        >
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
            Initialisation du signal
          </h1>
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
      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
          onComplete,
        })
        .fromTo(
          '[data-intro-grid], [data-intro-stars]',
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08 },
        )
        .fromTo(
          '[data-intro-orbit]',
          { opacity: 0, scale: 0.72, rotate: -14 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, stagger: 0.09 },
          '<0.08',
        )
        .fromTo(
          '[data-intro-mark]',
          { autoAlpha: 0, y: 18, scale: 0.86, rotate: -4 },
          { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.7 },
          '<0.12',
        )
        .fromTo(
          '[data-intro-copy]',
          { autoAlpha: 0, y: 20, filter: 'blur(8px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.68,
            stagger: 0.08,
          },
          '<0.14',
        )
        .to('[data-intro-progress]', {
          scaleX: 1,
          duration: 0.82,
          ease: 'power2.inOut',
        })
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
            scale: 1.035,
            duration: 0.58,
            ease: 'power2.inOut',
          },
          '<0.08',
        )
    }, introRef)

    return () => context.revert()
  }, [introRef, onComplete])
}
