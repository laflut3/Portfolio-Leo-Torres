import { type RefObject, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslation } from '@/i18n'

type IntroOverlayProps = {
  onComplete: () => void
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const introRef = useRef<HTMLDivElement>(null)
  const { copy } = useTranslation()

  useIntroAnimation(introRef, onComplete)

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[var(--portfolio-bg-a)] text-foreground"
    >
      <div
        aria-hidden="true"
        data-intro-rule
        className="absolute inset-x-[max(1.75rem,calc((100%_-_1240px)/2))] top-1/2 h-px origin-left bg-[var(--portfolio-line)]"
      />

      <div className="relative flex w-[min(46rem,calc(100%_-_40px))] flex-col items-start px-6">
        <p
          data-intro-copy
          className="m-0 text-xs font-semibold tracking-[0.18em] text-[var(--portfolio-accent)] uppercase"
        >
          Leo Torres
        </p>
        <h1
          data-intro-copy
          className="mt-4 text-[clamp(3.1rem,7vw,6rem)] leading-[0.92] font-semibold tracking-[-0.065em]"
        >
          {copy.intro.title}
        </h1>
        <div
          data-intro-loader
          className="mt-10 h-px w-[min(16rem,70vw)] overflow-hidden bg-[var(--portfolio-line)]"
        >
          <div
            data-intro-progress
            className="h-full origin-left scale-x-0 bg-[var(--portfolio-accent)]"
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
          '[data-intro-rule]',
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.7 },
        )
        .fromTo(
          '[data-intro-copy]',
          { autoAlpha: 0, y: 16, filter: 'blur(4px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.42,
            stagger: 0.1,
          },
          '<0.12',
        )
        .to('[data-intro-progress]', {
          scaleX: 1,
          duration: 0.9,
          ease: 'power2.inOut',
        })
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
