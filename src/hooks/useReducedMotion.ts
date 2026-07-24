import { useEffect, useState } from 'react'

const query = '(prefers-reduced-motion: reduce)'

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setReducedMotion(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reducedMotion
}
