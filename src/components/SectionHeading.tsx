import { motion, useReducedMotion } from 'framer-motion'

interface SectionHeadingProps {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
  tone = 'light',
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className={`section-heading section-heading--${tone}`}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__main">
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </motion.header>
  )
}
