import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/portfolio'
import { ArrowUpRight, Asterisk, CheckIcon, CopyIcon } from './icons'

interface ContactLinkProps {
  label: string
  value: string | null
  kind: 'email' | 'telegram'
  copied?: boolean
  onCopy?: (value: string) => void
}

function ContactLink({ label, value, kind, copied = false, onCopy }: ContactLinkProps) {
  if (!value) {
    return (
      <span className="contact-link contact-link--pending" aria-disabled="true">
        <span>
          <small>{label}</small>
          <strong>Контакт скоро появится</strong>
        </span>
        <span aria-hidden="true">—</span>
      </span>
    )
  }

  if (kind === 'email') {
    return (
      <button
        type="button"
        className="contact-link"
        data-copied={copied}
        aria-label={`Скопировать email ${value}`}
        onClick={() => onCopy?.(value)}
      >
        <span>
          <small>{label}</small>
          <strong>{value}</strong>
        </span>
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    )
  }

  return (
    <a
      className="contact-link"
      href={value}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        <small>{label}</small>
        <strong>{value.replace('https://t.me/', '@')}</strong>
      </span>
      <ArrowUpRight />
    </a>
  )
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // Continue with the fallback for browsers that block the Clipboard API.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()

  if (!copied) throw new Error('Clipboard copy failed')
}

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const resetTimer = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const orbOneX = useTransform(scrollYProgress, [0, 1], [45, -55])
  const orbOneY = useTransform(scrollYProgress, [0, 1], [70, -90])
  const orbOneScale = useTransform(scrollYProgress, [0, 1], [0.76, 1.24])
  const orbTwoX = useTransform(scrollYProgress, [0, 1], [-40, 65])
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [-55, 75])
  const orbTwoScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.78])

  useEffect(
    () => () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
    },
    [],
  )

  const handleEmailCopy = async (value: string) => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)

    try {
      await copyToClipboard(value)
      setCopyStatus('success')
    } catch {
      setCopyStatus('error')
    }

    resetTimer.current = window.setTimeout(() => setCopyStatus('idle'), 2400)
  }

  return (
    <section ref={ref} className="contact" id="contact" aria-labelledby="contact-title">
      <motion.div
        className="contact__orb contact__orb--one"
        style={{
          x: reduceMotion ? 0 : orbOneX,
          y: reduceMotion ? 0 : orbOneY,
          scale: reduceMotion ? 1 : orbOneScale,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="contact__orb contact__orb--two"
        style={{
          x: reduceMotion ? 0 : orbTwoX,
          y: reduceMotion ? 0 : orbTwoY,
          scale: reduceMotion ? 1 : orbTwoScale,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="contact__inner section-shell"
        initial={reduceMotion ? false : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact__meta">
          <span>04</span>
          <span>Начать разговор</span>
        </div>
        <div className="contact__main">
          <Asterisk />
          <h2 id="contact-title">Связаться</h2>
          <p>{contact.text}</p>
        </div>
        <div className="contact__links">
          <ContactLink
            label="Email"
            value={contact.email}
            kind="email"
            copied={copyStatus === 'success'}
            onCopy={handleEmailCopy}
          />
          <ContactLink label="Telegram-канал" value={contact.telegram} kind="telegram" />
        </div>
      </motion.div>

      <AnimatePresence>
        {copyStatus !== 'idle' && (
          <motion.div
            className="contact__toast"
            role="status"
            aria-live="polite"
            initial={reduceMotion ? false : { opacity: 0, x: '-50%', y: 14 }}
            animate={{ opacity: 1, x: '-50%', y: 0 }}
            exit={{ opacity: 0, x: '-50%', y: 10 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            {copyStatus === 'success' ? 'Email скопирован' : 'Не удалось скопировать email'}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
