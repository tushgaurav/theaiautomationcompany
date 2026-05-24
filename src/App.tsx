import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LazyMotion, domAnimation, AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Workshops from './pages/Workshops'
import Customers from './pages/Customers'
import About from './pages/About'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LazyMotion>
  )
}
