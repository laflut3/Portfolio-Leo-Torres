import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from '@tanstack/react-router'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { IntroOverlay } from '@/components/layout/IntroOverlay'
import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation'
import { type Locale, useTranslation } from '@/i18n'

export function PortfolioLayout({ locale }: { locale: Locale }) {
  const pageRef = useRef<HTMLDivElement>(null)
  const [introComplete, setIntroComplete] = useState(false)
  const location = useLocation()
  const { copy } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
  }, [copy.htmlLang])

  const handleIntroComplete = useCallback(() => setIntroComplete(true), [])
  usePortfolioAnimation(pageRef, introComplete, location.pathname)

  return (
    <div
      ref={pageRef}
      className="relative min-h-svh overflow-hidden bg-[var(--portfolio-bg-a)] text-foreground"
    >
      <Header locale={locale} />
      <main className="relative mx-auto w-[min(1240px,calc(100%_-_48px))] max-md:w-[min(100%_-_28px,1240px)]">
        <Outlet />
      </main>
      <Footer />
      {!introComplete && <IntroOverlay onComplete={handleIntroComplete} />}
    </div>
  )
}
