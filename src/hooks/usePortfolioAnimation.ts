import { type RefObject, useEffect } from 'react'
import gsap from 'gsap'

export function usePortfolioAnimation(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    if (!pageRef.current) return

    const context = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 18,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, pageRef)

    return () => context.revert()
  }, [pageRef])
}
