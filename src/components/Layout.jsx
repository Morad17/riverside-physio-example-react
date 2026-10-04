import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()
  // useOutlet returns a stable element, so the outgoing page keeps rendering
  // its own content while it animates out
  const outlet = useOutlet()
  const reduceMotion = useReducedMotion()

  const slide = reduceMotion ? 0 : 60

  return (
    <div className="app">
      <Navbar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          className="content"
          key={pathname}
          initial={{ opacity: 0, x: slide }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -slide / 2 }}
          transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.9 }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default Layout
