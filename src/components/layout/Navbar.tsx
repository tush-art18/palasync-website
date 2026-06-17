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

// ── Sun / Moon SVG icons (crisp, no emoji rendering issues) ──────────
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const useDarkNavbar = theme === 'dark' || (isHome && !scrolled)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={useDarkNavbar ? 'nav-theme-dark' : 'nav-theme-light'}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          transition: 'background 350ms ease, border-color 350ms ease, box-shadow 350ms ease',
          background: scrolled ? 'var(--surface)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: scrolled ? '0 1px 0 0 rgba(107,63,255,0.15), 0 4px 24px -4px rgba(0,0,0,0.08)' : 'none',
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
        }}
      >
        <div className="container">
          <div className="nav-inner">

            {/* ── LOGO ── */}
            <Link to="/" aria-label="PalaSync home" className="nav-logo-link">
              <img
                src={useDarkNavbar ? '/main dark logo.png' : '/main light logo.png'}
                alt="PalaSync"
                className="nav-logo-img"
              />
            </Link>

            {/* ── CENTER NAV — desktop only ── */}
            <nav aria-label="Main navigation" className="nav-links">
              {LINKS.map(link => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-item ${active ? 'nav-item--active' : ''}`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* ── RIGHT ACTIONS ── */}
            <div className="nav-actions">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="theme-btn"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
                  >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* CTA — desktop only */}
              <Link to="/contact" className="btn btn-primary nav-cta">
                Let's talk
              </Link>

              {/* ── MENU BUTTON — mobile only ── */}
              <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="menu-btn"
              >
                <div className="menu-icon">
                  {/* Top bar */}
                  <motion.span
                    animate={open
                      ? { rotate: 45, y: 8, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="menu-bar"
                  />
                  {/* Middle bar */}
                  <motion.span
                    animate={open
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="menu-bar"
                    style={{ width: 18 }}
                  />
                  {/* Bottom bar */}
                  <motion.span
                    animate={open
                      ? { rotate: -45, y: -8, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="menu-bar"
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════
          Mobile Drawer
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 198,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />

            {/* Drawer — slides in from top with spring */}
            <motion.div
              key="drawer"
              className="nav-drawer"
              initial={{ opacity: 0, y: -20, scaleY: 0.92, scaleX: 0.97 }}
              animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1 }}
              exit={{ opacity: 0, y: -16, scaleY: 0.94, scaleX: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top center' }}
            >
              {/* Drawer header — logo + close */}
              <div className="drawer-header">
                <Link to="/" aria-label="PalaSync home" onClick={() => setOpen(false)}>
                  <img
                    src={theme === 'dark' ? '/main dark logo.png' : '/main light logo.png'}
                    alt="PalaSync"
                    style={{ height: 26, width: 'auto', display: 'block' }}
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="drawer-close"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav items with stagger */}
              <nav className="drawer-nav">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.href}
                      className={`drawer-link ${pathname === link.href ? 'drawer-link--active' : ''}`}
                    >
                      <span className="drawer-link-num">0{i + 1}</span>
                      <span>{link.label}</span>
                      {pathname === link.href && (
                        <motion.span
                          layoutId="drawer-pill"
                          className="drawer-active-pill"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="drawer-footer">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}
                  onClick={() => setOpen(false)}
                >
                  Let's talk
                </Link>
                <button onClick={toggle} className="drawer-theme-row">
                  <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                  <div className="drawer-theme-icon">
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* ── Nav inner layout ── */
        .nav-inner {
          display: flex;
          align-items: center;
          height: 60px;
          gap: 8px;
        }

        /* ── Logo ── */
        .nav-logo-link {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }
        .nav-logo-img {
          height: 28px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        /* ── Center nav ── */
        .nav-links {
          display: none;
          flex: 1;
          justify-content: center;
          gap: 2px;
          align-items: center;
        }
        .nav-item {
          position: relative;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          transition: color 160ms ease;
          white-space: nowrap;
          z-index: 0;
        }
        .nav-item:hover { color: var(--text); }
        .nav-item--active { color: var(--violet); font-weight: 700; }
        .nav-pill {
          position: absolute;
          inset: 0;
          background: var(--violet-mute);
          border-radius: 8px;
          z-index: -1;
        }

        /* ── Dark Navbar overrides (when transparent overlaying dark hero or in dark mode) ── */
        .nav-theme-dark .nav-item {
          color: rgba(255, 255, 255, 0.6);
        }
        .nav-theme-dark .nav-item:hover {
          color: #ffffff;
        }
        .nav-theme-dark .nav-item--active {
          color: var(--violet-soft);
        }
        .nav-theme-dark .nav-pill {
          background: rgba(255, 255, 255, 0.08);
        }

        /* ── Right actions ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
        }

        /* ── Theme button ── */
        .theme-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid var(--border-2);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition: border-color 180ms ease, background 180ms ease, color 180ms ease;
          flex-shrink: 0;
          touch-action: manipulation;
        }
        .theme-btn:hover {
          border-color: var(--violet);
          background: var(--violet-mute);
          color: var(--violet);
        }

        /* ── Menu button ── */
        .menu-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1.5px solid var(--border-2);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 160ms ease, border-color 160ms ease;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .menu-btn:hover {
          background: var(--violet-mute);
          border-color: var(--violet);
        }
        .menu-icon {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
          width: 24px;
        }
        .menu-bar {
          display: block;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          width: 24px;
          transform-origin: center;
        }

        /* ── Dark Navbar Action Button overrides ── */
        .nav-theme-dark .theme-btn,
        .nav-theme-dark .menu-btn {
          border-color: rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.65);
        }
        .nav-theme-dark .theme-btn:hover,
        .nav-theme-dark .menu-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--violet-soft);
          color: #ffffff;
        }
        .nav-theme-dark .menu-bar {
          background: #ffffff;
        }

        /* ── CTA ── */
        .nav-cta {
          font-size: 13px !important;
          padding: 9px 18px !important;
          min-height: 36px !important;
        }

        /* ── Responsive ── */
        @media (max-width: 899px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .nav-logo-img { height: 26px; }
        }
        @media (min-width: 900px) {
          .nav-links { display: flex !important; }
          .nav-cta   { display: inline-flex !important; }
          .menu-btn  { display: none !important; }
          .nav-logo-img { height: 32px; }
        }
        @media (min-width: 1200px) {
          .nav-logo-img { height: 36px; }
        }

        /* ══════════════════════════════════════
           Drawer
        ══════════════════════════════════════ */
        .nav-drawer {
          position: fixed;
          top: calc(12px + env(safe-area-inset-top, 0px));
          left: 12px;
          right: 12px;
          z-index: 199;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(107,63,255,0.10),
            0 32px 72px -8px rgba(0,0,0,0.28),
            0 8px 24px -4px rgba(0,0,0,0.12);
        }

        /* Drawer header */
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px 14px;
          border-bottom: 1px solid var(--border);
        }
        .drawer-close {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1.5px solid var(--border-2);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition: all 160ms ease;
          touch-action: manipulation;
        }
        .drawer-close:hover {
          border-color: var(--red);
          color: var(--red);
          background: rgba(232,55,42,0.06);
        }

        /* Drawer nav */
        .drawer-nav {
          padding: 10px 12px;
        }
        .drawer-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 12px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-2);
          text-decoration: none;
          transition: color 160ms ease, background 160ms ease;
          overflow: hidden;
          margin-bottom: 2px;
        }
        .drawer-link:hover {
          color: var(--text);
          background: rgba(107,63,255,0.04);
        }
        .drawer-link--active {
          color: var(--violet);
          font-weight: 700;
        }
        .drawer-link-num {
          font-size: 10px;
          font-weight: 700;
          color: var(--muted-2);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          min-width: 20px;
        }
        .drawer-active-pill {
          position: absolute;
          inset: 0;
          background: var(--violet-mute);
          border-radius: 12px;
          z-index: -1;
        }

        /* Drawer footer */
        .drawer-footer {
          padding: 4px 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid var(--border);
          margin-top: 4px;
          padding-top: 14px;
        }
        .drawer-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: transparent;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
          font-family: 'Inter', sans-serif;
          transition: all 160ms ease;
          touch-action: manipulation;
        }
        .drawer-theme-row:hover {
          border-color: var(--violet);
          color: var(--text);
          background: var(--violet-mute);
        }
        .drawer-theme-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet);
        }
      `}</style>
    </>
  )
}
