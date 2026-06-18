import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// ─── Reveal wrapper ──────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────
const HERO_WORDS = ['Convert.', 'Perform.', 'Impress.', 'Last.']

const SERVICES = [
  { n: '01', title: 'Web Design',      tag: 'UI/UX',       desc: 'Custom Figma prototypes tailored for your audience. Layouts engineered to guide visitors toward conversion — not just look good.', href: '/services/web-design',      accent: '#6B3FFF' },
  { n: '02', title: 'Web Development', tag: 'React · TS',  desc: 'React, TypeScript, 98+ Lighthouse. Clean type-safe code that loads instantly and provides app-like speed with zero template bloat.', href: '/services/web-development', accent: '#8B65FF' },
  { n: '03', title: 'SaaS Products',   tag: 'Full-Stack',  desc: 'Full-stack apps with dashboards, secure login, database architecture, and Stripe payment integration — built end-to-end.', href: '/services/saas-products',   accent: '#22C55E' },
  { n: '04', title: 'Branding',        tag: 'Identity',    desc: 'Custom logos, typography pairings, and a complete digital stylebook to make your brand globally recognizable and consistent.', href: '/services/branding',        accent: '#C8FF00' },
]

const WORK = [
  { n: '01', name: 'WoW Saplings',       cat: 'SaaS Dashboard · Web App', stat: '3× traffic / 30d',  year: '2026', desc: 'Interactive EdTech portal with real-time class analytics',          href: '/work/wow-saplings',       accent: '#22C55E' },
  { n: '02', name: 'Client Portal Pro',  cat: 'Full-Stack Web App',       stat: '98 Lighthouse',      year: '2026', desc: 'Secure B2B collaboration platform with role-based access',          href: '/work/client-portal-pro',  accent: '#8B65FF' },
  { n: '03', name: 'Brown Beans Coffee', cat: 'E-commerce · Branding',    stat: '+240% orders',       year: '2025', desc: 'Full brand identity and e-commerce conversion overhaul',           href: '/work/brown-beans-coffee', accent: '#C8813A' },
]

const STATS = [
  { value: '10+',    label: 'Projects Delivered', sub: 'since 2025' },
  { value: '3 wks',  label: 'Average Delivery',   sub: 'fast without cutting corners' },
  { value: '100%',   label: 'Client Satisfaction', sub: 'zero refund requests' },
  { value: '₹9,999', label: 'Starting Price',      sub: 'world-class quality, India rates' },
]

const PROCESS = [
  { n: '01', title: 'Discover', body: 'Deep research into your market position and customer pain points before writing a single line of code.' },
  { n: '02', title: 'Design',   body: 'Custom Figma prototypes reviewed directly with you — covering desktop, tablet, and mobile breakpoints.' },
  { n: '03', title: 'Build',    body: 'Clean React SPA implementation with zero template bloat, custom animations, and speed-optimized from line one.' },
  { n: '04', title: 'Launch',   body: 'Domain routing via Cloudflare, form submissions, sitemap indexing, and Google Search Console registration.' },
]

const TESTIMONIALS = [
  { q: 'PalaSync delivered a site our investors reference in meetings. The layout quality and speed speaks for itself.',                        name: 'Rahul M.',  role: 'Founder · Codeink',          accent: '#6B3FFF' },
  { q: 'Launched in 19 days. Converts better than the site that cost us 5× more. Highly recommended.',                                         name: 'Kiran T.',  role: 'CEO · Junaids Group',         accent: '#C8FF00' },
  { q: 'The attention to detail was extraordinary. They thought about our users more than we did — and the results proved it.',                  name: 'Priya D.',  role: 'Head of Product · TechVenture', accent: '#22C55E' },
]

const MARQUEE_ITEMS = ['Web Design','SaaS Products','Branding','React Apps','UI/UX Design','E-commerce','Web Design','SaaS Products','Branding','React Apps','UI/UX Design','E-commerce']

// ─── Main Component ──────────────────────────────────────────────────
export default function Home() {
  const [wordIndex, setWordIndex]         = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const scrollRailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % HERO_WORDS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRailRef.current) {
      const scrollAmount = 380 // card width + gap
      scrollRailRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>PalaSync — Premium Web Design & Development India</title>
        <meta name="description" content="PalaSync builds premium custom websites, E-commerce and SaaS platforms, and brand identities for your businesses. No templates, ever." />
      </Helmet>

      {/* ════════════════════════════════════════════════════════
          §1  HERO — Full-bleed editorial, bottom-anchored
      ════════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        /* Uses CSS variable — adapts: dark ink in light mode, elevated surface in dark mode */
        background: 'var(--bg-accent)',
        /* iOS PWA: pushes past the notch */
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}>
        <div aria-hidden className="grain-overlay" />

        {/* Primary violet glow */}
        <div aria-hidden style={{
          position: 'absolute', top: '-5%', right: '-8%',
          width: 'min(750px, 100vw)', height: 'min(750px, 100vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,63,255,0.22) 0%, transparent 68%)',
          filter: 'blur(90px)', pointerEvents: 'none',
        }} />
        {/* Acid glow — bottom left */}
        <div aria-hidden style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: 'min(450px, 80vw)', height: 'min(450px, 80vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        {/* Vertical label — desktop only */}
        <div aria-hidden className="hero-label-left" style={{
          position: 'absolute', left: 28, top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center center',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'var(--muted2-accent)',
          whiteSpace: 'nowrap',
        }}>PalaSync — Est. 2022 — India</div>

        {/* Year marker — desktop only */}
        <div aria-hidden className="hero-label-right" style={{
          position: 'absolute', right: 28, top: 108,
          fontSize: 9, fontWeight: 700, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--muted2-accent)',
        }}>2026</div>

        <div className="container" style={{
          position: 'relative', zIndex: 1,
          /* Extra top padding so content clears the fixed navbar + safe area */
          paddingTop: 'calc(100px + env(safe-area-inset-top, 0px))',
          paddingBottom: 'clamp(48px, 8vh, 84px)',
        }}>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: 'clamp(32px, 5vw, 52px)' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              fontSize: 11, fontWeight: 600,
              color: '#22C55E', letterSpacing: '0.08em',
            }}>
              <span className="pulse" style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#22C55E', display: 'inline-block', flexShrink: 0,
              }} />
              Accepting new projects — June 2026
            </div>
          </motion.div>

          {/* ── Main headline: single h1, inline word swap ── */}
          <div style={{ overflow: 'hidden', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.6rem, 8vw, 7rem)',
                lineHeight: 1.0, letterSpacing: '-0.035em',
                color: 'var(--text-accent)', margin: 0,
                wordBreak: 'break-word',
              }}
            >
              We build websites
              {' '}that{' '}
              {/* Inline word-swap clip container */}
              <span style={{
                display: 'inline-block', verticalAlign: 'bottom',
                overflow: 'hidden',
                /* Height = 1 line of the current font */
                lineHeight: '1em', height: '1.05em',
              }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-110%' }}
                    transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #6B3FFF 0%, #A78BFA 60%, #8B65FF 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      lineHeight: '1em',
                    }}
                  >
                    {HERO_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-end', gap: 24, flexWrap: 'wrap',
              paddingTop: 28, borderTop: '1px solid var(--border-accent)',
            }}
          >
            <p style={{
              color: 'var(--muted-accent)', maxWidth: 400,
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: 1.8,
              margin: 0,
            }}>
              Premium custom websites, E-commerce and SaaS platforms, and brand identities for
              your businesses that refuse to look ordinary.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-acid" style={{ fontSize: 14 }}>
                Start a project
              </Link>
              <Link to="/work" className="btn btn-ghost-light" style={{ fontSize: 14 }}>
                See our work →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: 24, left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            opacity: 0.2, zIndex: 1,
          }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--text-accent))' }} />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §2  MARQUEE — Skewed scrolling ticker
      ════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: '1px solid var(--border-accent)',
        borderBottom: '1px solid var(--border-accent)',
        padding: '18px 0', overflow: 'hidden',
        background: 'var(--bg-accent)',
        transform: 'skewY(-1.2deg)',
        marginTop: -1, position: 'relative', zIndex: 1,
      }}>
        <div className="marquee-inner">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 22,
              padding: '0 30px', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: i % 4 === 0 ? '#6B3FFF' : i % 4 === 2 ? 'rgba(200,255,0,0.55)' : 'var(--muted-accent)',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: 6, opacity: 0.4 }}>{i % 2 === 0 ? '◆' : '/'}</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          §3  SERVICES — Numbered accordion list
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px, 12vw, 140px) 0' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <p className="section-overline">Our Expertise</p>
                <h2 className="section-heading">
                  Services<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
              </div>
              <Link to="/services" className="subtle-link">Full details & pricing →</Link>
            </div>
          </Reveal>

          {SERVICES.map((svc, i) => (
            <Reveal key={svc.n} delay={i * 0.06}>
              <div
                style={{ borderTop: '1px solid var(--border)', cursor: 'pointer' }}
                onClick={() => setExpandedService(expandedService === i ? null : i)}
              >
                {/* Row header */}
                <div
                  className={`svc-row ${expandedService === i ? 'svc-row--open' : ''}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr auto',
                    alignItems: 'center',
                    gap: 16,
                    padding: 'clamp(20px, 3vw, 30px) 0',
                  }}
                >
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700, color: 'var(--muted-2)', letterSpacing: '0.06em',
                  }}>
                    {svc.n}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                    <h3 style={{
                      fontWeight: 800,
                      fontSize: 'clamp(1.15rem, 3.5vw, 2.2rem)',
                      letterSpacing: '-0.025em', color: 'var(--text)', margin: 0,
                      transition: 'color 240ms ease',
                    }} className="svc-title">
                      {svc.title}
                    </h3>
                    <span className="svc-tag" style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', flexShrink: 0,
                      color: svc.accent === '#C8FF00' ? '#080810' : svc.accent,
                      background: svc.accent === '#C8FF00' ? 'rgba(200,255,0,0.85)' : `${svc.accent}16`,
                      border: svc.accent === '#C8FF00' ? 'none' : `1px solid ${svc.accent}30`,
                      padding: '4px 12px', borderRadius: 99,
                    }}>
                      {svc.tag}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: expandedService === i ? 45 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontSize: 22, color: 'var(--muted)', display: 'inline-block',
                      lineHeight: 1, fontWeight: 300,
                      /* Ensure tap target */
                      padding: '4px 8px', margin: '-4px -8px',
                    }}
                  >+</motion.span>
                </div>

                {/* Expand panel */}
                <AnimatePresence>
                  {expandedService === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        paddingBottom: 32,
                        paddingLeft: 'clamp(40px, 5vw, 56px)',
                        display: 'flex', gap: 24,
                        alignItems: 'flex-start', flexWrap: 'wrap',
                      }}>
                        <p style={{
                          color: 'var(--muted)', lineHeight: 1.8,
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                          flex: 1, minWidth: 220, margin: 0,
                        }}>
                          {svc.desc}
                        </p>
                        <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
                          <Link to={svc.href} className="btn btn-primary" style={{
                            background: svc.accent,
                            boxShadow: `0 8px 24px ${svc.accent}35`,
                            fontSize: 13,
                            color: svc.accent === '#C8FF00' ? '#080810' : '#fff',
                          }}>
                            View scope →
                          </Link>
                          <Link to="/contact" className="btn btn-secondary" style={{ fontSize: 13 }}>
                            Book a call
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §4  SELECTED WORK — Full-width editorial rows
      ════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg-alt)',
        padding: 'clamp(72px, 12vw, 140px) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', bottom: 0, right: '-5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(107,63,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="container">
          <Reveal style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <p className="section-overline">Portfolio</p>
                <h2 className="section-heading">
                  Selected Work<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
              </div>
              <Link to="/work" className="subtle-link">All case studies →</Link>
            </div>
          </Reveal>

          {WORK.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.08}>
              <Link to={w.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="work-row"
                  style={{
                    borderTop: '1px solid var(--border)',
                    padding: 'clamp(24px, 4vw, 44px) 0',
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: 'clamp(14px, 3vw, 32px)',
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'padding-left 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.paddingLeft = '20px'
                    ;(e.currentTarget.querySelector('.work-border') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-border') as HTMLElement).style.opacity = '1')
                    ;(e.currentTarget.querySelector('.work-num') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-num') as HTMLElement).style.color = w.accent)
                    ;(e.currentTarget.querySelector('.work-title') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-title') as HTMLElement).style.color = w.accent)
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.paddingLeft = '0'
                    ;(e.currentTarget.querySelector('.work-border') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-border') as HTMLElement).style.opacity = '0')
                    ;(e.currentTarget.querySelector('.work-num') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-num') as HTMLElement).style.color = 'var(--muted-2)')
                    ;(e.currentTarget.querySelector('.work-title') as HTMLElement)?.style && ((e.currentTarget.querySelector('.work-title') as HTMLElement).style.color = 'var(--text)')
                  }}
                >
                  <div className="work-border" style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: 3, background: w.accent,
                    opacity: 0, transition: 'opacity 320ms ease',
                    borderRadius: '0 2px 2px 0',
                  }} />

                  <span className="work-num" style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                    fontWeight: 800, color: 'var(--muted-2)',
                    letterSpacing: '-0.02em', transition: 'color 320ms ease', lineHeight: 1,
                    flexShrink: 0,
                  }}>{w.n}</span>

                  {/* Content + stat row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: w.accent,
                        }}>{w.cat}</span>
                        <span style={{ fontSize: 11, color: 'var(--muted-2)' }}>{w.year}</span>
                      </div>
                      <h3 className="work-title" style={{
                        fontWeight: 800,
                        fontSize: 'clamp(1.05rem, 2.5vw, 1.7rem)',
                        letterSpacing: '-0.025em', color: 'var(--text)',
                        margin: '0 0 5px', transition: 'color 320ms ease',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>{w.name}</h3>
                      <p style={{ fontSize: 'clamp(0.78rem, 1.5vw, 0.875rem)', color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>
                        {w.desc}
                      </p>
                    </div>
                    <div className="work-stat" style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{
                        fontWeight: 800,
                        fontSize: 'clamp(0.9rem, 2vw, 1.4rem)',
                        color: w.accent, letterSpacing: '-0.02em', lineHeight: 1.2,
                      }}>{w.stat}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3 }}>result</div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §5  MANIFESTO — Split-screen diagonal
      ════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="manifesto-grid">
          {/* Left: Violet — always violet in both themes */}
          <div style={{
            background: 'var(--violet)',
            padding: 'clamp(52px, 10vw, 96px) clamp(24px, 6vw, 72px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            minHeight: 'clamp(340px, 45vw, 540px)',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: '-20%', right: '-20%',
              width: 380, height: 380,
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <Reveal>
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                marginBottom: 28,
              }}>Our Belief</p>
              <p style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)',
                lineHeight: 1.18, letterSpacing: '-0.025em',
                color: '#fff', margin: 0,
              }}>
                A great website is not designed in an afternoon.
              </p>
            </Reveal>
          </div>

          {/* Right: Adaptive — dark in light mode, elevated in dark mode */}
          <div style={{
            background: 'var(--bg-accent)',
            padding: 'clamp(52px, 10vw, 96px) clamp(24px, 6vw, 72px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            borderLeft: '1px solid var(--border-accent)',
            minHeight: 'clamp(340px, 45vw, 540px)',
          }}>
            <Reveal delay={0.15}>
              <p style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)',
                lineHeight: 1.18, letterSpacing: '-0.025em',
                color: 'var(--text-accent)', marginBottom: 40,
              }}>
                It's researched, debated,{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #6B3FFF, #A78BFA)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>and built with intent.</span>
              </p>
              <div style={{ display: 'flex', gap: 'clamp(20px, 5vw, 48px)', flexWrap: 'wrap', marginBottom: 40 }}>
                {[
                  { v: 'No templates',   s: 'Every layout built from scratch' },
                  { v: 'Custom code',    s: 'No page builders, ever' },
                  { v: '98+ Lighthouse', s: 'Speed-first from commit one' },
                ].map(item => (
                  <div key={item.v}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: 4 }}>{item.v}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--subtext-accent)' }}>{item.s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link to="/about" style={{
                fontSize: 13, fontWeight: 600,
                color: 'var(--muted-accent)',
                textDecoration: 'none', letterSpacing: '0.04em',
                transition: 'color 220ms ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-accent)')}
              >
                Our story & team →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §6  STATS — Stacked editorial numbers
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px, 12vw, 140px) 0' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <p className="section-overline">By the numbers</p>
          </Reveal>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="stat-row" style={{
                display: 'grid',
                alignItems: 'center', gap: 16,
                padding: 'clamp(20px, 3vw, 32px) 0',
                borderTop: '1px solid var(--border)',
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 6.5vw, 5rem)',
                  letterSpacing: '-0.045em', color: 'var(--text)', lineHeight: 1,
                }}>{s.value}</div>
                <div>
                  <div style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{s.sub}</div>
                </div>
                <div className="stat-index" style={{
                  fontSize: '0.7rem',
                  fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--muted-2)', textAlign: 'right',
                }}>0{i + 1}</div>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §7  PROCESS — Zigzag timeline
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px, 12vw, 140px) 0' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 64 }}>
            <p className="section-overline">How we work</p>
            <h2 className="section-heading">
              Our process<span style={{ color: 'var(--red)' }}>.</span>
            </h2>
          </Reveal>

          {/* Desktop: Alternating list */}
          <div className="process-desktop" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 1, background: 'var(--border)',
            }} />
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 60px 1fr',
                  alignItems: 'center', marginBottom: 80,
                }}>
                  {/* Left slot */}
                  <div style={{
                    textAlign: 'right', paddingRight: 52,
                    opacity: i % 2 === 0 ? 1 : 0.12,
                    pointerEvents: i % 2 === 0 ? 'auto' : 'none',
                    transition: 'opacity 300ms ease',
                  }}>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                      letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10,
                    }}>{step.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0, maxWidth: 300, marginLeft: 'auto' }}>{step.body}</p>
                  </div>

                  {/* Center circle */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: '50%',
                      border: '1.5px solid var(--border-2)', background: 'var(--surface)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: 12,
                      color: 'var(--violet)', letterSpacing: '0.04em', flexShrink: 0,
                      boxShadow: '0 4px 20px rgba(107,63,255,0.1)',
                    }}>{step.n}</div>
                  </div>

                  {/* Right slot */}
                  <div style={{
                    paddingLeft: 52,
                    opacity: i % 2 !== 0 ? 1 : 0.12,
                    pointerEvents: i % 2 !== 0 ? 'auto' : 'none',
                    transition: 'opacity 300ms ease',
                  }}>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                      letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10,
                    }}>{step.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0, maxWidth: 300 }}>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile: numbered vertical list */}
          <div className="process-mobile">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div style={{
                  display: 'flex', gap: 18,
                  paddingBottom: 32, marginBottom: 32,
                  borderBottom: i < PROCESS.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                    border: '1.5px solid var(--border-2)', background: 'var(--surface)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 12,
                    color: 'var(--violet)',
                  }}>{step.n}</div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.1rem', letterSpacing: '-0.02em',
                      color: 'var(--text)', marginBottom: 8,
                    }}>{step.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §8  TESTIMONIALS — Horizontal scroll rail
      ════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(72px, 12vw, 140px) 0 clamp(40px, 6vw, 80px)',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ marginBottom: 44 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p className="section-overline">Reviews</p>
                <h2 className="section-heading">
                  Client Voices<span style={{ color: 'var(--violet)' }}>.</span>
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', maxWidth: 260, lineHeight: 1.65, margin: 0 }}>
                  What happens in the months after we deliver.
                </p>
                <div className="arrow-btn-container" style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => scroll('left')}
                    aria-label="Previous testimonials"
                    className="arrow-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    aria-label="Next testimonials"
                    className="arrow-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll rail — iOS momentum + snap with scroll padding to prevent margin cutoff */}
        <div
          ref={scrollRailRef}
          className="scroll-rail"
          style={{
            display: 'flex', gap: 16,
            paddingLeft:  'max(20px, calc((100vw - 1100px) / 2 + 40px))',
            paddingRight: 'max(20px, calc((100vw - 1100px) / 2 + 40px))',
            scrollPaddingLeft: 'max(20px, calc((100vw - 1100px) / 2 + 40px))',
            paddingBottom: 8,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              whileHover={{ y: -6, borderColor: t.accent, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
              style={{
                flexShrink: 0,
                width: 'clamp(280px, 34vw, 360px)',
                scrollSnapAlign: 'start',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 22,
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${t.accent}, transparent 80%)`,
              }} />
              <div style={{
                fontFamily: 'Georgia, serif', fontSize: 76,
                color: `${t.accent}18`, lineHeight: 0.7,
                marginBottom: 8, fontWeight: 700, userSelect: 'none',
              }}>“</div>
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: '#F59E0B', fontSize: 12 }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: 'clamp(0.83rem, 1.5vw, 0.9rem)',
                color: 'var(--text-2)', lineHeight: 1.8,
                flex: 1, margin: '0 0 22px', fontStyle: 'italic',
              }}>{t.q}</p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                paddingTop: 18, borderTop: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13,
                  color: t.accent === '#C8FF00' ? '#080810' : '#fff',
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §9  CTA — Premium floating card layout
      ════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg-alt)',
        padding: 'clamp(60px, 10vw, 100px) 0',
        /* iOS: bottom safe area for home indicator */
        paddingBottom: 'max(clamp(60px, 10vw, 100px), calc(clamp(60px, 10vw, 100px) + env(safe-area-inset-bottom, 0px)))',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="cta-card" style={{
              background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border)',
              borderRadius: '32px',
              padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
              boxShadow: '0 32px 80px -20px rgba(107, 63, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}>
              {/* Internal glows */}
              <div aria-hidden style={{
                position: 'absolute', top: '-20%', right: '-10%',
                width: 350, height: 350, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(107,63,255,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)', pointerEvents: 'none',
              }} />
              <div aria-hidden style={{
                position: 'absolute', bottom: '-20%', left: '-10%',
                width: 250, height: 250, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)',
                filter: 'blur(30px)', pointerEvents: 'none',
              }} />
              <div aria-hidden className="grain-overlay" />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Availability Badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  fontSize: 11, fontWeight: 600, color: '#22C55E',
                  letterSpacing: '0.1em', marginBottom: 32,
                }}>
                  <span className="pulse" style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#22C55E', display: 'inline-block', flexShrink: 0,
                  }} />
                  Accepting projects now — spots are limited
                </div>

                {/* Heading */}
                <h2 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.04em', lineHeight: 1.05,
                  color: 'var(--text)', marginBottom: 20,
                }}>
                  Ready to build<br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--violet) 0%, var(--violet-soft) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>something great?</span>
                </h2>

                {/* Description */}
                <p style={{
                  color: 'var(--muted)', maxWidth: 440,
                  margin: '0 auto 36px',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', lineHeight: 1.75,
                }}>
                  We take a limited number of projects each month to ensure every
                  client receives our full attention and premium quality.
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36, position: 'relative', zIndex: 2 }}>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: 14 }}>
                    Start a project
                  </Link>
                  <a href="https://calendly.com/palasync" target="_blank" rel="noreferrer"
                    className="btn btn-secondary" style={{ padding: '14px 36px', fontSize: 14 }}
                  >
                    Book a free call
                  </a>
                </div>

                {/* Trust Tags */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px, 3vw, 24px)', flexWrap: 'wrap' }}>
                  {['🇮🇳 India-based', '⚡ Reply in 4 hrs', '✦ Custom-coded', '💰 From ₹9,999'].map(t => (
                    <span key={t} style={{ fontSize: 11, color: 'var(--muted-2)', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        /* ── Hero section layout ── */
        .hero-section {
          justify-content: center;
        }
        @media (min-width: 900px) {
          .hero-section {
            justify-content: flex-end !important;
          }
        }

        /* ── Section utility classes ── */
        .section-overline {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--violet);
          margin-bottom: 12px; display: block;
        }
        .section-heading {
          font-family: Syne, sans-serif; font-weight: 800;
          font-size: clamp(1.9rem, 5vw, 3.5rem);
          letter-spacing: -0.03em; color: var(--text); margin: 0;
        }
        .subtle-link {
          font-size: 13px; color: var(--muted); font-weight: 600;
          text-decoration: none; white-space: nowrap;
          transition: color 200ms ease;
        }
        .subtle-link:hover { color: var(--violet); }

        /* ── Hero labels: desktop only ── */
        .hero-label-left, .hero-label-right { display: none !important; }
        @media (min-width: 1000px) {
          .hero-label-left, .hero-label-right { display: block !important; }
        }

        /* ── Service tag: visible ≥480px ── */
        .svc-tag { display: none; }
        @media (min-width: 480px) { .svc-tag { display: inline; } }

        /* ── Service row hover ── */
        .svc-row:hover .svc-title { color: var(--violet) !important; }
        .svc-row--open .svc-title { color: var(--violet) !important; }

        /* ── Work rows ── */
        .work-row { transition: padding-left 320ms cubic-bezier(0.22, 1, 0.36, 1); }
        /* On mobile: hide stat column */
        .work-stat { display: none; }
        @media (min-width: 520px) { .work-stat { display: block; } }

        /* ── Manifesto grid ── */
        .manifesto-grid { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 600px) { .manifesto-grid { grid-template-columns: 1fr 1fr !important; } }

        /* ── Stats row ── */
        .stat-row { grid-template-columns: 1fr 1fr; }
        .stat-index { display: none; }
        @media (min-width: 560px) {
          .stat-row { grid-template-columns: 1fr 1.3fr 48px !important; }
          .stat-index { display: block !important; }
        }

        /* ── Process: desktop zigzag vs mobile list ── */
        .process-desktop { display: none; }
        .process-mobile  { display: block; }
        @media (min-width: 768px) {
          .process-desktop { display: block; }
          .process-mobile  { display: none; }
        }

        /* ── Scroll rail ── */
        .scroll-rail::-webkit-scrollbar { display: none; }

        /* ── Testimonials Arrow buttons ── */
        .arrow-btn-container {
          display: flex;
          gap: 8px;
        }
        .arrow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid var(--border-2);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
        }
        .arrow-btn:hover {
          border-color: var(--violet);
          background: var(--violet-mute);
          color: var(--violet);
        }
        @media (max-width: 600px) {
          .arrow-btn-container { display: none !important; }
        }

        /* ── Marquee ── */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-inner { display: inline-flex; animation: marquee 28s linear infinite; white-space: nowrap; }
        @media (prefers-reduced-motion: reduce) { .marquee-inner { animation: none; } }

        /* ── Pulse ── */
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(34,197,94,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(34,197,94,0);   }
          100% { box-shadow: 0 0 0 0   rgba(34,197,94,0);   }
        }
        .pulse { animation: pulse-ring 2s ease-out infinite; }

        /* ── Grain ── */
        .grain-overlay {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        /* ── PWA: hide scrollbars globally on scroll rails ── */
        div::-webkit-scrollbar { display: none; }

        /* ── Mobile: no title overflow on work rows ── */
        @media (max-width: 519px) {
          .work-row { grid-template-columns: 36px 1fr !important; }
        }
      `}</style>
    </>
  )
}
