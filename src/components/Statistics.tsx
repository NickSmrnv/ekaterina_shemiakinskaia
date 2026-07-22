import { motion, useReducedMotion } from 'framer-motion'
import { statistics } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const stats = [
  {
    index: 0,
    label: 'лет опыта',
    value: statistics.experienceYears,
  },
  {
    index: 1,
    label: 'изданий',
    value: statistics.outletCount,
  },
  {
    index: 2,
    label: 'публикаций',
    value: statistics.publicationCount,
  },
  {
    index: 3,
    label: 'конференции',
    value: statistics.conferenceCount,
  },
]

export function Statistics() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="statistics" id="statistics" aria-labelledby="statistics-title">
      <div className="section-shell">
        <SectionHeading
          id="statistics-title"
          index="02"
          eyebrow="Статистика"
          title="В цифрах"
          tone="dark"
        />

        <div className="statistics__grid">
          {stats.map((item) => (
            <motion.article
              className="statistics-card"
              data-stat-index={item.index}
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : item.index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <strong>{item.value}</strong>
              <div className="statistics-card__label">
                <span>{item.label}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
