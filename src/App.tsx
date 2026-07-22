import { LazyMotion, domAnimation } from 'framer-motion'
import { Conference } from './components/Conference'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Publications } from './components/Publications'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Publications />
        <Conference />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  )
}
