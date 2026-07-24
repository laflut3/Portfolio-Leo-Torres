import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useTranslation } from '@/i18n'

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'configuration'

export function ContactForm() {
  const { copy } = useTranslation()
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus('sending')
    const form = event.currentTarget

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: new FormData(form).get('name'),
          email: new FormData(form).get('email'),
          message: new FormData(form).get('message'),
        }),
      })

      if (response.status === 503) {
        setStatus('configuration')
        return
      }
      if (!response.ok) throw new Error('Formspree request failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const statusMessage =
    status === 'success'
      ? copy.contact.form.success
      : status === 'error'
        ? copy.contact.form.error
        : status === 'configuration'
          ? copy.contact.form.configuration
          : null

  return (
    <section className="grid grid-cols-[minmax(0,0.9fr)_minmax(21rem,1.1fr)] border-b border-[var(--portfolio-line)] max-lg:grid-cols-1">
      <div
        className="order-2 px-10 py-12 max-lg:order-1 max-lg:border-b max-lg:border-[var(--portfolio-line)] max-md:px-6 max-md:py-9"
        data-reveal
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
          {copy.contact.form.kicker}
        </p>
        <h3 className="mt-4 max-w-md text-[clamp(2rem,3.4vw,3.4rem)] leading-[0.96] font-semibold tracking-[-0.06em] text-foreground">
          {copy.contact.form.title}
        </h3>
        <p className="mt-5 max-w-md leading-7 text-[var(--portfolio-text-soft)]">
          {copy.contact.form.text}
        </p>
      </div>
      <form
        className="order-1 border-r border-[var(--portfolio-line)] px-10 py-12 max-lg:order-2 max-lg:border-r-0 max-md:px-6 max-md:py-9"
        onSubmit={handleSubmit}
        data-reveal
      >
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">{copy.contact.form.name}</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder={copy.contact.form.namePlaceholder}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">{copy.contact.form.email}</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={copy.contact.form.emailPlaceholder}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">{copy.contact.form.message}</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder={copy.contact.form.messagePlaceholder}
              className="min-h-32 resize-y"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-fit"
            disabled={status === 'sending'}
          >
            <Send aria-hidden="true" />
            {status === 'sending'
              ? copy.contact.form.sending
              : copy.contact.form.submit}
          </Button>
          <p
            aria-live="polite"
            className={`m-0 text-sm leading-6 ${status === 'error' ? 'text-destructive' : 'text-[var(--portfolio-text-soft)]'}`}
          >
            {statusMessage}
          </p>
        </div>
      </form>
    </section>
  )
}
