import { useRef } from 'react'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { PipelineSection } from '@/components/sections/PipelineSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SignalSection } from '@/components/sections/SignalSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { SpaceNoteSection } from '@/components/sections/SpaceNoteSection'
import { usePortfolioAnimation } from '@/hooks/usePortfolioAnimation'

function App() {
  const pageRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)

  usePortfolioAnimation(pageRef, orbitRef)

  return (
    <div
      ref={pageRef}
      className="relative min-h-svh overflow-hidden bg-[radial-gradient(circle_at_78%_12%,color-mix(in_oklch,var(--portfolio-cyan)_18%,transparent),transparent_28rem),radial-gradient(circle_at_18%_6%,color-mix(in_oklch,var(--portfolio-amber)_14%,transparent),transparent_20rem),linear-gradient(135deg,var(--portfolio-bg-a)_0%,var(--portfolio-bg-b)_44%,var(--portfolio-bg-c)_100%)] text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle,var(--portfolio-star)_1px,transparent_1px)] bg-[length:92px_92px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(var(--portfolio-line)_1px,transparent_1px),linear-gradient(90deg,var(--portfolio-line)_1px,transparent_1px)] bg-[length:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]"
      />
      <Header />
      <main
        id="top"
        className="relative mx-auto w-[min(1120px,calc(100%_-_40px))] max-md:w-[min(100%_-_28px,1120px)]"
      >
        <HeroSection orbitRef={orbitRef} />
        <SignalSection />
        <SkillsSection />
        <ProjectsSection />
        <PipelineSection />
        <SpaceNoteSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
