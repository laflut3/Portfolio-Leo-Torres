import photoSrc from '@/assets/leo-torres.webp'
import { useTranslation } from '@/i18n'

export function PortraitPanel() {
  const { copy } = useTranslation()

  return (
    <figure className="portrait-editorial relative m-0" data-reveal>
      <div className="portrait-editorial-frame">
        <img
          src={photoSrc}
          alt={copy.hero.photoAlt}
          className="size-full object-cover object-center"
        />
      </div>
    </figure>
  )
}
