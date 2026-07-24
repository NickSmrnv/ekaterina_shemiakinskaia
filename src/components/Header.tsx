import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navigation } from '../data/portfolio'
import { ArrowUpRight } from './icons'

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 32)
  })

  return (
    <motion.header
      className="site-header"
      data-scrolled={isScrolled}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="site-header__nav" aria-label="Основная навигация">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="site-header__contact" href="#contact">
        Связаться
        <ArrowUpRight className="site-header__contact-icon" />
      </a>
    </motion.header>
  )
}
