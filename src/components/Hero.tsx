import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { hero } from '../data/portfolio'

const nameLines = ['Екатерина', 'Шемякинская']

function ScientificField({ progress }: { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const reduceMotion = useReducedMotion()
  const orbY = useTransform(progress, [0, 1], [0, reduceMotion ? 0 : 180])
  const orbRotate = useTransform(progress, [0, 1], [0, reduceMotion ? 0 : 42])
  const fieldScale = useTransform(progress, [0, 1], [1, reduceMotion ? 1 : 1.18])

  return (
    <motion.div className="science-field" style={{ scale: fieldScale }} aria-hidden="true">
      <div className="science-field__grid" />
      <motion.div
        className="science-field__orbit science-field__orbit--one"
        style={{ y: orbY, rotate: orbRotate }}
      >
        <span className="science-field__node science-field__node--blue" />
      </motion.div>
      <motion.div
        className="science-field__orbit science-field__orbit--two"
        style={{ rotate: orbRotate }}
      >
        <span className="science-field__node science-field__node--coral" />
      </motion.div>
      <div className="science-field__sphere">
        <span />
        <span />
        <span />
      </div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const heroProgress = useTransform(scrollY, (value) => {
    const heroHeight = ref.current?.offsetHeight ?? 1

    return Math.min(Math.max(value / heroHeight, 0), 1)
  })
  const titleY = useTransform(heroProgress, [0, 0.82], [0, reduceMotion ? 0 : -90], {
    clamp: true,
  })
  const titleX = useTransform(heroProgress, [0, 0.82], [0, reduceMotion ? 0 : -34], {
    clamp: true,
  })
  const introY = useTransform(heroProgress, [0, 0.82], [0, reduceMotion ? 0 : -58], {
    clamp: true,
  })
  const fade = useTransform(
    heroProgress,
    [0, 0.18, 0.76, 0.9],
    [1, 1, reduceMotion ? 1 : 0.08, reduceMotion ? 1 : 0],
    { clamp: true },
  )

  return (
    <section ref={ref} className="hero" id="top" aria-labelledby="hero-title">
      <ScientificField progress={heroProgress} />

      <motion.div className="hero__content" style={{ opacity: fade }}>
        <motion.div className="hero__kicker" style={{ y: introY }}>
          <span>{hero.role}</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          className="hero__title"
          aria-label={hero.name}
          style={{ y: titleY, x: titleX }}
        >
          {nameLines.map((line, lineIndex) => (
            <span className="hero__title-line" key={line}>
              {line.split('').map((letter, letterIndex) => (
                <motion.span
                  className="hero__letter"
                  key={`${letter}-${letterIndex}`}
                  initial={reduceMotion ? false : { y: '112%', rotate: lineIndex ? 2 : -2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.92,
                    delay: 0.16 + lineIndex * 0.11 + letterIndex * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.figure
          className="hero__portrait"
          style={{ y: introY }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}hero-portrait.jpg`}
              alt="Екатерина Шемякинская"
              width="720"
              height="720"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.figure>

        <motion.div
          className="hero__bottom"
          style={{ y: introY }}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <p>{hero.intro}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
