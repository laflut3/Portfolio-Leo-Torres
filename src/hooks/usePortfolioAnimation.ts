import { type RefObject, useEffect } from 'react'
import gsap from 'gsap'

export function usePortfolioAnimation(
  pageRef: RefObject<HTMLDivElement | null>,
  orbitRef: RefObject<HTMLDivElement | null>,
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

      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 80,
        ease: 'none',
        repeat: -1,
      })
    }, pageRef)

    return () => context.revert()
  }, [orbitRef, pageRef])
}
