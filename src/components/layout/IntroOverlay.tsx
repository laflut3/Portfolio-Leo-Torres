import { useGSAP } from '@gsap/react'
import { lazy, Suspense, type RefObject, useRef } from 'react'
import gsap from 'gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslation } from '@/i18n'

gsap.registerPlugin(useGSAP)

const IntroArtifact = lazy(async () => {
  const module = await import('@/components/visuals/IntroArtifact')
  return { default: module.IntroArtifact }
})

type IntroOverlayProps = {
  onComplete: () => void
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const introRef = useRef<HTMLDivElement>(null)
  const { copy } = useTranslation()
  const reducedMotion = useReducedMotion()

  useIntroAnimation(introRef, onComplete, reducedMotion)

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[var(--portfolio-bg-a)] text-foreground"
    >
      <Suspense fallback={null}>
        <IntroArtifact reducedMotion={reducedMotion} />
      </Suspense>
      <div
        aria-hidden="true"
        data-intro-aura
        className="absolute size-[min(74vw,44rem)] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--portfolio-accent)_24%,transparent),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        data-intro-rule
        className="absolute inset-x-[max(1.75rem,calc((100%_-_1240px)/2))] top-1/2 h-px origin-left bg-[var(--portfolio-line)]"
      />

      <div className="relative z-10 flex w-[min(46rem,calc(100%_-_40px))] flex-col items-center px-6 text-center">
        <p
          data-intro-label
          className="m-0 text-xs font-semibold tracking-[0.22em] text-[var(--portfolio-accent)] uppercase"
        >
          {copy.intro.title}
        </p>
        <h1
          data-intro-name
          className="mt-3 text-[clamp(3.5rem,11vw,10rem)] leading-[0.8] font-semibold tracking-[-0.085em] whitespace-nowrap text-foreground"
        >
          {copy.intro.name}
        </h1>
        <div
          data-intro-loader
          className="mt-9 h-px w-[min(15rem,65vw)] overflow-hidden bg-[var(--portfolio-line)]"
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
  reducedMotion: boolean,
) {
  useGSAP(
    () => {
      if (!introRef.current) return

      if (reducedMotion) {
        gsap.set(introRef.current, { autoAlpha: 0 })
        onComplete()
        return
      }

      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
          onComplete,
        })
        .fromTo(
          '[data-intro-rule]',
          { opacity: 0, scaleX: 0.15 },
          { opacity: 1, scaleX: 1, duration: 0.58 },
        )
        .fromTo(
          '[data-intro-aura]',
          { autoAlpha: 0, scale: 0.6 },
          { autoAlpha: 1, scale: 1, duration: 0.7 },
          '<0.1',
        )
        .fromTo(
          '[data-intro-label]',
          { autoAlpha: 0, y: 12, filter: 'blur(4px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.38,
          },
          '<0.12',
        )
        .fromTo(
          '[data-intro-name]',
          { autoAlpha: 0, y: 34, scale: 0.92, filter: 'blur(12px)' },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.68,
          },
          '<0.08',
        )
        .to('[data-intro-progress]', {
          scaleX: 1,
          duration: 0.7,
          ease: 'power2.inOut',
        })
        .to('[data-intro-aura]', {
          opacity: 1,
          duration: 1.6,
        })
        .to(
          introRef.current,
          {
            autoAlpha: 0,
            scale: 1.04,
            duration: 0.48,
            ease: 'power2.inOut',
          },
          '<0.08',
        )
    },
    { dependencies: [onComplete, reducedMotion], scope: introRef },
  )
}
