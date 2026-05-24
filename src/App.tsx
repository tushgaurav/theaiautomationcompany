import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Workshops from './pages/Workshops'
import Customers from './pages/Customers'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  )
}
