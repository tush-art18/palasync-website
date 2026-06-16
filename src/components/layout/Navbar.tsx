import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const LINKS = [
  { label: 'Work',     href: '/work'     },
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing'  },
  { label: 'About',    href: '/about'    },
  { label: 'Blog',     href: '/blog'     },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          transition: 'all 300ms ease',
          background: scrolled ? 'var(--surface)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          gap: 16,
        }}>
          {/* Logo */}
          <Link to="/" aria-label="PalaSync home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={theme === 'dark' ? '/main dark logo.png' : '/main light logo.png'}
              alt="PalaSync"
              className="nav-logo"
              style={{ width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hide-mobile">
            {LINKS.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 99,
                    fontSize: 14,
                    fontWeight: active ? 600 : 500,
                    color: active ? 'var(--violet)' : 'var(--muted)',
                    background: active ? 'var(--violet-mute)' : 'transparent',
                    transition: 'all 180ms ease',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--muted)' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                width: 36, height: 36,
                borderRadius: 99,
                border: '1.5px solid var(--border-2)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15,
                transition: 'all 180ms ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--violet)'; e.currentTarget.style.background = 'var(--violet-mute)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.background = 'transparent' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', lineHeight: 1 }}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* CTA — hidden on very small screens */}
            <Link
              to="/contact"
              className="btn btn-primary hide-mobile"
              style={{ padding: '9px 20px', fontSize: 13 }}
            >
              Let's talk
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                padding: '8px 4px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                flexShrink: 0,
              }}
              className="hide-desktop"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--text)',
                  borderRadius: 2,
                  transition: 'all 220ms ease',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translateY(7px)'
                    : i === 2 ? 'rotate(-45deg) translateY(-7px)'
                    : 'scaleX(0)'
                    : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                zIndex: 198,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 72, left: 12, right: 12,
                zIndex: 199,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '12px 8px 16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              }}
            >
              {LINKS.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    display: 'block',
                    padding: '13px 16px',
                    borderRadius: 12,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: pathname === link.href ? 'var(--violet)' : 'var(--text)',
                    background: pathname === link.href ? 'var(--violet-mute)' : 'transparent',
                    marginBottom: 2,
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div style={{ height: 1, background: 'var(--border)', margin: '10px 8px 14px' }} />

              <div style={{ padding: '0 8px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Let's talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-logo { height: 26px !important; }
        .hide-mobile { display: none !important; }
        .hide-desktop { display: flex !important; }
        @media (min-width: 900px) {
          .nav-logo { height: 34px !important; }
          .hide-mobile { display: flex !important; }
          .hide-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
