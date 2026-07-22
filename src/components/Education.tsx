import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/portfolio'
import { Asterisk } from './icons'
import { SectionHeading } from './SectionHeading'

export function Education() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 72%', 'end 70%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })

  return (
    <section ref={ref} className="education section-shell" id="education" aria-labelledby="education-title">
      <SectionHeading
        id="education-title"
        index="03"
        eyebrow="Бэкграунд"
        title="Образование"
      />

      <div className="timeline">
        <div className="timeline__rail" aria-hidden="true">
          <motion.span style={{ scaleY: reduceMotion ? 1 : scaleY }} />
        </div>

        {education.map((item, index) => (
          <motion.article
            className="timeline__item"
            data-accent={item.accent}
            key={item.degree}
            initial={reduceMotion ? false : { opacity: 0, y: 58 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline__marker" aria-hidden="true">
              <Asterisk />
            </div>
            <div className="timeline__meta">
              <span>{item.level}</span>
            </div>
            <div className="timeline__content">
              <time>{item.years}</time>
              <h3>{item.university}</h3>
              <p>{item.department}</p>
              <div className="timeline__degree">
                <span>Направление</span>
                <strong>{item.degree}</strong>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
