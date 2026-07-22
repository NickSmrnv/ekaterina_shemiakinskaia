import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { publications, type Publication } from '../data/portfolio'
import { ArrowUpRight } from './icons'
import { SectionHeading } from './SectionHeading'

interface PublicationCardProps {
  item: Publication
  index: number
  expanded: boolean
  subdued: boolean
  onToggle: (id: string) => void
  onCollapseComplete: (id: string, node: HTMLDivElement | null) => void
}

function PublicationCard({
  item,
  index,
  expanded,
  subdued,
  onToggle,
  onCollapseComplete,
}: PublicationCardProps) {
  const reduceMotion = useReducedMotion()
  const slotRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const previousExpandedRef = useRef(expanded)
  const collapsePendingRef = useRef(false)
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 190, damping: 24 })
  const rotateY = useSpring(rawRotateY, { stiffness: 190, damping: 24 })
  const panelId = `${item.id}-articles`
  const titleId = `${item.id}-title`
  const toggleLabelId = `${item.id}-toggle-label`

  const resetTilt = useCallback(() => {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }, [rawRotateX, rawRotateY])

  const scrollToCardStart = useCallback(() => {
    const top = (slotRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [reduceMotion])

  useEffect(() => {
    if (!expanded) return

    resetTilt()
    const scrollFrame = window.requestAnimationFrame(scrollToCardStart)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      onToggle(item.id)
      window.requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }))
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(scrollFrame)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded, item.id, onToggle, reduceMotion, resetTilt, scrollToCardStart])

  useEffect(() => {
    const wasExpanded = previousExpandedRef.current
    previousExpandedRef.current = expanded

    if (expanded) {
      collapsePendingRef.current = false
      return
    }

    if (!wasExpanded) return

    if (reduceMotion) {
      const scrollFrame = window.requestAnimationFrame(() =>
        onCollapseComplete(item.id, slotRef.current),
      )
      return () => window.cancelAnimationFrame(scrollFrame)
    }

    collapsePendingRef.current = true
  }, [expanded, item.id, onCollapseComplete, reduceMotion])

  const handleLayoutAnimationComplete = useCallback(() => {
    if (expanded) {
      scrollToCardStart()
      return
    }

    if (!collapsePendingRef.current) return
    collapsePendingRef.current = false
    onCollapseComplete(item.id, slotRef.current)
  }, [expanded, item.id, onCollapseComplete, scrollToCardStart])

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (expanded || reduceMotion || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rawRotateX.set(y * -7)
    rawRotateY.set(x * 7)
  }

  return (
    <motion.div
      ref={slotRef}
      className="publication-card-slot"
      data-size={item.size}
      data-expanded={expanded}
      layout={reduceMotion ? false : true}
      onLayoutAnimationComplete={handleLayoutAnimationComplete}
      animate={{ opacity: subdued ? 0.46 : 1, scale: subdued ? 0.985 : 1 }}
      transition={{
        layout: reduceMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 170, damping: 25, mass: 0.9 },
        opacity: { duration: reduceMotion ? 0 : 0.24 },
        scale: { duration: reduceMotion ? 0 : 0.24 },
      }}
    >
      <motion.article
        className="publication-card"
        data-accent={item.accent}
        data-expanded={expanded}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onBlur={resetTilt}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        initial={reduceMotion ? false : { opacity: 0, y: 72, rotateZ: index % 2 ? 1.2 : -1.2 }}
        whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.75, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={toggleRef}
          type="button"
          className="publication-card__toggle"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-labelledby={`${titleId} ${toggleLabelId}`}
          onClick={() => onToggle(item.id)}
        >
          <span id={toggleLabelId} className="sr-only">
            {expanded ? 'Свернуть список публикаций' : 'Открыть список публикаций'}
          </span>
          <span className="publication-card__toggle-content" aria-hidden="true">
            {expanded ? 'Свернуть' : 'Открыть публикации'}
            <span>{expanded ? '×' : '+'}</span>
          </span>
        </button>

        <motion.div
          className="publication-card__top"
          layout={reduceMotion ? false : 'position'}
          transition={{ layout: { type: 'spring', stiffness: 190, damping: 28 } }}
        >
          <span className="publication-card__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="publication-card__logo" data-shape={item.logoShape} aria-hidden="true">
            <img src={item.logoSrc} alt="" />
          </span>
        </motion.div>

        <motion.div
          className="publication-card__body"
          layout={reduceMotion ? false : 'position'}
          transition={{ layout: { type: 'spring', stiffness: 170, damping: 26 } }}
        >
          <motion.h3 id={titleId} layout={reduceMotion ? false : 'position'}>
            {item.outlet}
          </motion.h3>
        </motion.div>

        <AnimatePresence initial={false} mode="popLayout">
          {expanded && (
            <motion.div
              id={panelId}
              className="publication-card__expanded"
              role="region"
              aria-labelledby={titleId}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: 14, transition: { duration: 0.18, delay: 0 } }
              }
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1 }}
            >
              <ol className="publication-card__articles" aria-label={`Материалы в издании ${item.outlet}`}>
                {item.articles.map((article, articleIndex) => (
                  <li key={article.url ?? article.title}>
                    {article.url ? (
                      <a href={article.url} target="_blank" rel="noreferrer noopener">
                        <span className="publication-card__article-index">
                          {String(articleIndex + 1).padStart(2, '0')}
                        </span>
                        <span>{article.title}</span>
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <div className="publication-card__pending">
                        <span>Ссылка на материал скоро появится</span>
                        <span aria-hidden="true">—</span>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </motion.div>
  )
}

export function Publications() {
  const reduceMotion = useReducedMotion()
  const activePublicationRef = useRef<string | null>(null)
  const collapseTargetRef = useRef<string | null>(null)
  const [activePublicationId, setActivePublicationId] = useState<string | null>(null)
  const handleToggle = useCallback((id: string) => {
    const nextId = activePublicationRef.current === id ? null : id

    collapseTargetRef.current = nextId === null ? id : null
    activePublicationRef.current = nextId
    setActivePublicationId(nextId)
  }, [])

  const handleCollapseComplete = useCallback(
    (id: string, node: HTMLDivElement | null) => {
      if (
        collapseTargetRef.current !== id ||
        activePublicationRef.current !== null ||
        !node?.isConnected
      ) {
        return
      }

      window.requestAnimationFrame(() => {
        if (
          collapseTargetRef.current !== id ||
          activePublicationRef.current !== null ||
          !node.isConnected
        ) {
          return
        }

        node.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' })
        collapseTargetRef.current = null
      })
    },
    [reduceMotion],
  )

  return (
    <>
      <section
        className="publications"
        id="publications"
        aria-labelledby="publications-title"
      >
        <div className="section-shell">
          <SectionHeading
            id="publications-title"
            index="01"
            eyebrow="Выборка работ"
            title="Публикации"
          />
          <div className="publications__legend" aria-hidden="true">
            <span>selected media</span>
            <span>{publications.length} outlets</span>
            <span>open a card</span>
          </div>
          <LayoutGroup id="publications-grid">
            <div className="publications__grid">
              {publications.map((publication, index) => (
                <PublicationCard
                  key={publication.id}
                  item={publication}
                  index={index}
                  expanded={activePublicationId === publication.id}
                  subdued={Boolean(activePublicationId && activePublicationId !== publication.id)}
                  onToggle={handleToggle}
                  onCollapseComplete={handleCollapseComplete}
                />
              ))}
            </div>
          </LayoutGroup>
        </div>
      </section>

      <div className="publications__ticker" aria-hidden="true">
        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <span key={index}>
              science <b>×</b> health <b>×</b> technology <b>×</b> community <b>×</b>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
