import { motion, useReducedMotion } from 'framer-motion'
import { conferenceProject } from '../data/portfolio'
import { ArrowUpRight } from './icons'
import { SectionHeading } from './SectionHeading'

export function Conference() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="conference" id="conference" aria-labelledby="conference-title">
      <div className="section-shell">
        <SectionHeading
          id="conference-title"
          index="02"
          eyebrow="Специальный проект"
          title={conferenceProject.name}
          intro={conferenceProject.description}
          tone="dark"
        />

        <motion.article
          className="conference-case"
          initial={reduceMotion ? false : { opacity: 0, y: 58 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="conference-case__top">
            <a
              className="conference-case__link"
              href={conferenceProject.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="conference-case__link-label">
                <small>Femtech Force Jam</small>
                <strong>Открыть сайт конференции</strong>
              </span>
              <span className="conference-case__link-icon">
                <ArrowUpRight />
              </span>
            </a>
          </div>

          <div className="conference-production">
            <div className="conference-production__heading">
              <h3>Что я делала</h3>
            </div>

            <ol className="conference-production__flow">
              {conferenceProject.responsibilities.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.article>
      </div>

    </section>
  )
}
