import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import CustomCursor from './components/layout/CustomCursor'
import ExitIntentModal from './components/ui/ExitIntentModal'

// Pages
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/work"      element={<Work />} />
              <Route path="/work/:slug" element={<Work />} />
              <Route path="/services"  element={<Services />} />
              <Route path="/services/:slug" element={<Services />} />
              <Route path="/about"     element={<About />} />
              <Route path="/pricing"   element={<Pricing />} />
              <Route path="/contact"   element={<Contact />} />
              <Route path="/blog"      element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*"          element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
        <WhatsAppButton />
        <ExitIntentModal />
      </BrowserRouter>
    </HelmetProvider>
  )
}
