import { type RefObject, useLayoutEffect } from 'react'
import gsap from 'gsap'

export function usePortfolioAnimation(
  pageRef: RefObject<HTMLDivElement | null>,
  enabled = true,
  path = '',
) {
  useLayoutEffect(() => {
    if (!pageRef.current || !enabled) return

    let observer: IntersectionObserver | undefined

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('[data-reveal]', {
          clearProps: 'all',
        })
        return
      }

      const revealItems = gsap.utils.toArray<HTMLElement>('[data-reveal]')

      gsap.set(revealItems, {
        autoAlpha: 0,
        filter: 'blur(10px)',
        y: 28,
      })

      const reveal = (targets: HTMLElement[]) => {
        gsap.to(targets, {
          autoAlpha: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.78,
          ease: 'power3.out',
          stagger: 0.07,
          overwrite: true,
        })
      }

      const revealObserver = new IntersectionObserver(
        (entries) => {
          const visibleTargets = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement)
            .sort(
              (first, second) =>
                revealItems.indexOf(first) - revealItems.indexOf(second),
            )

          if (visibleTargets.length === 0) return

          reveal(visibleTargets)
          visibleTargets.forEach((target) => revealObserver.unobserve(target))
        },
        {
          rootMargin: '0px 0px -12% 0px',
          threshold: 0.16,
        },
      )

      observer = revealObserver
      revealItems.forEach((item) => revealObserver.observe(item))
    }, pageRef)

    return () => {
      observer?.disconnect()
      context.revert()
    }
  }, [pageRef, enabled, path])
}
