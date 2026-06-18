import { useRef } from 'react'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { SignalSection } from '@/components/sections/SignalSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ThemeSwitch } from '@/components/layout/ThemeSwitch'
import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation'

function App() {
  const pageRef = useRef<HTMLDivElement>(null)

  usePortfolioAnimation(pageRef)

  return (
    <div
      ref={pageRef}
      className="relative min-h-svh overflow-hidden bg-[radial-gradient(circle_at_82%_18%,color-mix(in_oklch,var(--portfolio-cyan)_18%,transparent),transparent_26rem),radial-gradient(circle_at_8%_34%,color-mix(in_oklch,var(--portfolio-amber)_13%,transparent),transparent_22rem),linear-gradient(135deg,var(--portfolio-bg-a)_0%,var(--portfolio-bg-b)_46%,var(--portfolio-bg-c)_100%)] text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle,var(--portfolio-star)_1px,transparent_1px)] bg-[length:110px_110px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(var(--portfolio-line)_1px,transparent_1px),linear-gradient(90deg,var(--portfolio-line)_1px,transparent_1px)] bg-[length:88px_88px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-24 right-[8vw] size-[38rem] rounded-full border border-[var(--portfolio-orbit)] opacity-50"
      />
      <ThemeSwitch />
      <Header />
      <main
        id="top"
        className="relative mx-auto w-[min(1120px,calc(100%_-_40px))] max-md:w-[min(100%_-_28px,1120px)]"
      >
        <HeroSection />
        <SignalSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
