import { motion, useReducedMotion } from 'framer-motion'
import { expertise } from '../data/portfolio'
import { ArrowUpRight } from './icons'
import { SectionHeading } from './SectionHeading'

export function Expertise() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="expertise" id="expertise" aria-labelledby="expertise-title">
      <div className="section-shell">
        <SectionHeading
          id="expertise-title"
          index="05"
          eyebrow="Направления"
          title="Темы материалов"
          tone="dark"
        />
        <motion.div
          className="expertise__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
          }}
        >
          {expertise.map((item) => (
            <motion.article
              className="expertise-card"
              data-accent={item.accent}
              key={item.code}
              tabIndex={0}
              variants={{
                hidden: { opacity: 0, y: 46 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="expertise-card__meta">
                <span>{item.code}</span>
                <ArrowUpRight />
              </div>
              <h3>{item.title}</h3>
              <div className="expertise-card__orb" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
