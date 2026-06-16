import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// ─── Reveal wrapper ──────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} style={style}
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

// ─── Magnetic tilt card ──────────────────────────────────────────────
function TiltCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(x, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set(((e.clientX - cx) / rect.width) * 12)
    y.set(-(((e.clientY - cy) / rect.height) * 12))
  }

  return (
    <motion.div ref={ref} style={{ ...style, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </motion.div>
  )
}


// ─── Data ────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '✦', title: 'Web Design', desc: 'Custom Figma prototypes tailored for your audience. Layouts engineered to guide visitors toward conversion.', href: '/services/web-design', accent: '#6B3FFF', tag: 'UI/UX' },
  { icon: '⚡', title: 'Web Development', desc: 'React, TypeScript, 98+ Lighthouse. Clean type-safe code that loads instantly and provides app-like speed.', href: '/services/web-development', accent: '#8B65FF', tag: 'React · TS' },
  { icon: '◆', title: 'SaaS Products', desc: 'Full-stack apps with dashboards, secure login, database architecture, and Stripe payment integration.', href: '/services/saas-products', accent: '#22C55E', tag: 'Full-Stack' },
  { icon: '❋', title: 'Branding', desc: 'Custom logos, typography pairings, and a complete digital stylebook to make your brand globally recognizable.', href: '/services/branding', accent: '#E8372A', tag: 'Identity' },
]

const WORK = [
  { name: 'Brown Beans Coffee', cat: 'E-commerce · Branding', stat: '+240% orders', year: '2025', accent: '#C8813A', href: '/work/brown-beans-coffee', desc: 'Full brand identity and e-commerce conversion overhaul' },
  { name: 'WoW Saplings', cat: 'SaaS Dashboard · Web App', stat: '3× traffic / 30 days', year: '2025', accent: '#22C55E', href: '/work/wow-saplings', desc: 'Interactive EdTech portal with real-time class analytics' },
  { name: 'Client Portal Pro', cat: 'Full-Stack Web App', stat: '98 Lighthouse', year: '2024', accent: '#8B65FF', href: '/work/client-portal-pro', desc: 'Secure B2B collaboration platform with role-based access' },
]

const PROCESS = [
  { n: '01', title: 'Discover', body: 'Deep research into your market position and customer pain points before writing a single line of code.', icon: '🔍' },
  { n: '02', title: 'Design', body: 'Custom Figma prototypes reviewed directly with you — covering desktop, tablet, and mobile breakpoints.', icon: '✦' },
  { n: '03', title: 'Build', body: 'Clean React SPA implementation with zero template bloat, custom animations, and speed-optimized from line one.', icon: '⚡' },
  { n: '04', title: 'Launch', body: 'Domain routing via Cloudflare, form submissions, sitemap indexing, and Google Search Console registration.', icon: '◆' },
]

const TESTIMONIALS = [
  { q: 'PalaSync delivered a site our investors reference in meetings. The layout quality and speed speaks for itself.', name: 'Rahul M.', role: 'Founder · Codeink', accent: '#6B3FFF' },
  { q: 'Three agencies gave us generic templates. PalaSync built our platform custom from scratch — completely different league.', name: 'Ananya S.', role: 'Owner · Sharpners', accent: '#8B65FF' },
  { q: 'Launched in 19 days. Converts better than the site that cost us 5× more. Highly recommended.', name: 'Kiran T.', role: 'CEO · Junaids Group', accent: '#E8372A' },
]

const MARQUEE = ['Web Design', 'SaaS Products', 'Branding', 'React Apps', 'UI/UX Design', 'E-commerce', 'Web Design', 'SaaS Products', 'Branding', 'React Apps', 'UI/UX Design', 'E-commerce']

// ─── Main Component ──────────────────────────────────────────────────
export default function Home() {
  const [activeService, setActiveService] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Helmet>
        <title>PalaSync — Premium Web Design & Development India</title>
        <meta name="description" content="PalaSync builds premium custom websites, SaaS platforms, and brand identities for Indian businesses. Starting ₹9,999. No templates, ever." />
      </Helmet>

      {/* ══════════════════════════════════════════════════════════
          §1  HERO — Dramatic mesh + floating orbs
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '100svh', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', overflow: 'hidden', paddingTop: 110, paddingBottom: 80,
      }}>
        {/* Animated gradient mesh */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(107,63,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(139,101,255,0.08) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 90%, rgba(232,55,42,0.05) 0%, transparent 50%)',
        }} />

        {/* Animated moving cursor glow */}
        <div aria-hidden style={{
          position: 'fixed', zIndex: 0, pointerEvents: 'none',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,63,255,0.06) 0%, transparent 70%)',
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
          transition: 'transform 0.4s ease',
        }} />

        {/* Dot grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(107,63,255,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 100%)',
          opacity: 0.5,
        }} />

        {/* Floating orbs */}
        {[
          { size: 300, x: '-15%', y: '20%', color: 'rgba(107,63,255,0.12)', delay: 0 },
          { size: 200, x: '80%', y: '15%', color: 'rgba(139,101,255,0.10)', delay: 1 },
          { size: 150, x: '70%', y: '65%', color: 'rgba(232,55,42,0.07)', delay: 2 },
        ].map((orb, i) => (
          <motion.div key={i} aria-hidden
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
            style={{
              position: 'absolute', zIndex: 0, pointerEvents: 'none',
              width: orb.size, height: orb.size, borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              left: orb.x, top: orb.y, filter: 'blur(40px)',
            }}
          />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
          {/* Availability badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 18px', borderRadius: 99,
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              fontSize: 12, fontWeight: 600, color: '#22C55E',
              backdropFilter: 'blur(8px)',
            }}>
              <span className="pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
              Accepting new projects — June 2026
            </div>
          </motion.div>

          {/* Main headline */}
          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <motion.h1 className="display"
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ lineHeight: 1.05 }}
            >
              Your business deserves
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 32 }}>
            <motion.div initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="display" style={{
                background: 'linear-gradient(135deg, #6B3FFF 0%, #A78BFA 45%, #8B65FF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', display: 'inline-block',
              }}>a website that converts.</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            We build premium custom websites, SaaS platforms, and brand identities for Indian businesses that refuse to look ordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}
          >
            <Link to="/contact" className="btn btn-primary" style={{
              padding: '15px 32px', fontSize: 15,
              boxShadow: '0 0 30px rgba(107,63,255,0.35), 0 4px 16px rgba(107,63,255,0.2)',
              position: 'relative', overflow: 'hidden',
            }}>
              Start a project
            </Link>
            <Link to="/work" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: 15 }}>
              See our work →
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex' }}>
                {['R', 'A', 'K', 'P', 'M'].map((l, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: `hsl(${255 + i * 15}, 70%, ${55 + i * 4}%)`,
                    border: '2.5px solid var(--bg)', marginLeft: i > 0 ? -10 : 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 11, color: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>{l}</div>
                ))}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: 1 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: 12 }}>★</span>)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>Trusted by <strong style={{ color: 'var(--text)' }}>50+ brands</strong></div>
              </div>
            </div>
            <div style={{ width: 1, height: 32, background: 'var(--border)', flexShrink: 0 }} className="hide-mobile" />
            {['Custom-coded', '98+ Lighthouse', 'From ₹9,999'].map(badge => (
              <span key={badge} style={{
                fontSize: 11, fontWeight: 600, color: 'var(--muted-2)',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                <span style={{ color: 'var(--violet)', fontSize: 8 }}>◆</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Floating hero visual cards (desktop only via .hero-float-card) ── */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="hero-float-card"
          style={{ position: 'absolute', left: 'clamp(16px,4vw,56px)', top: '28%', zIndex: 2 }}
        >
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '18px 22px', minWidth: 160,
            boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(107,63,255,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>📈</div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Traffic Growth</span>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#22C55E', letterSpacing: '-0.03em', lineHeight: 1 }}>+240%</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Avg. client growth</div>
            <div style={{ marginTop: 12, height: 4, borderRadius: 99, background: 'rgba(34,197,94,0.12)', overflow: 'hidden' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 1.2, delay: 1.3, ease: [0.22,1,0.36,1] }}
                style={{ height: '100%', background: '#22C55E', borderRadius: 99 }} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="hero-float-card"
          style={{ position: 'absolute', right: 'clamp(16px,4vw,56px)', top: '22%', zIndex: 2 }}
        >
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '18px 22px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(107,63,255,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Lighthouse</span>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, color: 'var(--violet)', letterSpacing: '-0.03em', lineHeight: 1 }}>98</div>
            <div style={{ fontSize: 10, color: '#22C55E', fontWeight: 600, marginTop: 3 }}>Performance Score</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
              {(['Perf','SEO','A11y','BP'] as const).map((lbl, idx) => (
                <div key={lbl} style={{ textAlign: 'center' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: '#22C55E' }}>{[98,100,97,100][idx]}</div>
                  <div style={{ fontSize: 8, color: 'var(--muted)', marginTop: 3 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 40 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="hero-float-card"
          style={{ position: 'absolute', right: 'clamp(16px,4vw,56px)', top: '56%', zIndex: 2 }}
        >
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '16px 20px', maxWidth: 220,
            boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(107,63,255,0.08)',
          }}>
            <div style={{ display: 'flex', gap: 1, marginBottom: 8 }}>{[...Array(5)].map((_,j) => <span key={j} style={{ color: '#F59E0B', fontSize: 11 }}>★</span>)}</div>
            <p style={{ fontSize: 11, color: 'var(--text-2)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 10 }}>
              "Launched in 19 days. Converts better than what cost us 5× more."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#E8372A,#E8372A88)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 10, color: '#fff' }}>K</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>Kiran T.</div>
                <div style={{ fontSize: 10, color: 'var(--muted)' }}>CEO · Junaids Group</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40, y: 40 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="hero-float-card"
          style={{ position: 'absolute', left: 'clamp(16px,4vw,56px)', top: '57%', zIndex: 2 }}
        >
          <div style={{
            background: 'var(--bg-alt)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '16px 20px', fontFamily: 'monospace',
            boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(107,63,255,0.08)',
          }}>
            <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
              {['#FF5F57','#FFBD2E','#28C840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ fontSize: 11, lineHeight: 1.9 }}>
              <span style={{ color: '#A78BFA' }}>const</span><span style={{ color: 'var(--text-2)' }}> score </span><span style={{ color: 'var(--muted)' }}>=</span><span style={{ color: '#22C55E' }}> 98</span><span style={{ color: 'var(--muted)' }}>;</span><br />
              <span style={{ color: '#A78BFA' }}>const</span><span style={{ color: 'var(--text-2)' }}> built </span><span style={{ color: 'var(--muted)' }}>=</span><span style={{ color: '#F59E0B' }}> true</span><span style={{ color: 'var(--muted)' }}>;</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4, zIndex: 1 }}
        >
          <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--violet), transparent)' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §2  MARQUEE TICKER
      ══════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '16px 0', overflow: 'hidden', background: 'var(--surface)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 1,
          background: 'linear-gradient(to right, var(--surface), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 1,
          background: 'linear-gradient(to left, var(--surface), transparent)',
          pointerEvents: 'none',
        }} />
        <div className="marquee-inner">
          {MARQUEE.map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 20,
              padding: '0 28px', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--muted)', whiteSpace: 'nowrap',
            }}>
              <span style={{ color: 'var(--violet)', fontSize: 7 }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>



      {/* ══════════════════════════════════════════════════════════
          §4  SERVICES — Interactive tab + detail panel
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(107,63,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(60px)',
        }} />
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="label" style={{ marginBottom: 16 }}>Our Expertise</div>
            <h2 className="heading-2">
              Services<span style={{ color: 'var(--red)' }}>.</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Every service is custom-scoped. We don't subcontract — every mockup and line of code is produced in-house.
            </p>
          </Reveal>

          {/* Service tab selector */}
          <Reveal delay={0.1} style={{ marginBottom: 36 }}>
            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 8, maxWidth: 640, margin: '0 auto',
            }}>
              {SERVICES.map((svc, i) => (
                <button key={svc.title}
                  onClick={() => setActiveService(i)}
                  style={{
                    padding: '10px 20px', borderRadius: 10, border: 'none', cursor: 'pointer',
                    fontSize: 13, fontWeight: 700, fontFamily: 'Syne, sans-serif',
                    transition: 'all 220ms ease',
                    background: activeService === i ? svc.accent : 'transparent',
                    color: activeService === i ? '#fff' : 'var(--muted)',
                    flex: '1 1 auto', minWidth: 120,
                  }}
                >
                  <span style={{ marginRight: 6, fontSize: 11 }}>{svc.icon}</span>
                  {svc.title}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active service detail + all cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="services-main-grid">
            {/* Featured active card */}
            <motion.div key={activeService}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--surface)', borderRadius: 24,
                border: `1px solid ${SERVICES[activeService].accent}40`,
                padding: 'clamp(28px, 4vw, 48px)',
                position: 'relative', overflow: 'hidden',
                boxShadow: `0 20px 60px -20px ${SERVICES[activeService].accent}30`,
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, transparent, ${SERVICES[activeService].accent}, transparent)`,
              }} />
              <div style={{
                position: 'absolute', top: '-30%', right: '-10%', width: 350, height: 350,
                background: `radial-gradient(circle, ${SERVICES[activeService].accent}12 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16, flexShrink: 0,
                    background: `${SERVICES[activeService].accent}18`,
                    border: `1px solid ${SERVICES[activeService].accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26, color: SERVICES[activeService].accent,
                  }}>
                    {SERVICES[activeService].icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--text)', fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
                        {SERVICES[activeService].title}
                      </h3>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: SERVICES[activeService].accent,
                        background: `${SERVICES[activeService].accent}18`,
                        border: `1px solid ${SERVICES[activeService].accent}30`,
                        padding: '3px 10px', borderRadius: 99,
                      }}>{SERVICES[activeService].tag}</span>
                    </div>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: 520 }}>
                      {SERVICES[activeService].desc}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to={SERVICES[activeService].href} className="btn btn-primary"
                    style={{ background: SERVICES[activeService].accent, boxShadow: `0 8px 24px ${SERVICES[activeService].accent}40` }}
                  >
                    View scope & pricing →
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">Book a discussion</Link>
                </div>
              </div>
            </motion.div>

            {/* Mini cards for others */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="services-mini-grid">
              {SERVICES.map((svc, i) => i !== activeService && (
                <TiltCard key={svc.title}>
                  <div
                    onClick={() => setActiveService(i)}
                    style={{
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: 20, padding: '24px 24px',
                      cursor: 'pointer', transition: 'all 220ms ease',
                      display: 'flex', gap: 16, alignItems: 'flex-start',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = svc.accent + '60'
                      e.currentTarget.style.boxShadow = `0 8px 24px ${svc.accent}15`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: `${svc.accent}12`,
                      border: `1px solid ${svc.accent}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, color: svc.accent,
                    }}>{svc.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', marginBottom: 6, fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{svc.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{svc.desc}</p>
                      <span style={{ fontSize: 12, fontWeight: 700, color: svc.accent, marginTop: 10, display: 'inline-block' }}>Explore →</span>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
              Full service details & pricing →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5  SELECTED WORK — Full-bleed cards
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(139,101,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(60px)',
        }} />
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <Reveal>
              <div className="label" style={{ marginBottom: 12 }}>Portfolio</div>
              <h2 className="heading-2">Selected Work<span style={{ color: 'var(--red)' }}>.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/work" className="btn btn-secondary" style={{ display: 'inline-flex', fontSize: 13 }}>
                All Case Studies →
              </Link>
            </Reveal>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {WORK.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.1}>
                <Link to={w.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 40px)',
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                    transition: 'all 280ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = w.accent + '60'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `0 24px 48px ${w.accent}15`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {/* Gradient accent top border */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                      background: `linear-gradient(90deg, transparent, ${w.accent}, transparent)`,
                      opacity: 0.7,
                    }} />
                    {/* Background accent glow */}
                    <div style={{
                      position: 'absolute', top: '-20%', right: '-5%', width: 280, height: 280,
                      background: `radial-gradient(circle, ${w.accent}10 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                        <div>
                          <span style={{
                            fontSize: 11, fontWeight: 700, color: w.accent,
                            background: `${w.accent}12`, border: `1px solid ${w.accent}25`,
                            padding: '3px 10px', borderRadius: 99, letterSpacing: '0.04em',
                          }}>{w.cat}</span>
                          <h3 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: 800,
                            fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--text)',
                            marginTop: 12, marginBottom: 6,
                          }}>{w.name}</h3>
                          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: 400 }}>{w.desc}</p>
                        </div>
                        <div style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0,
                        }}>
                          <span style={{ fontSize: 12, color: 'var(--muted-2)', fontWeight: 500 }}>{w.year}</span>
                          <div style={{
                            padding: '10px 20px', borderRadius: 12,
                            background: `${w.accent}12`, border: `1px solid ${w.accent}25`,
                          }}>
                            <span style={{ fontSize: 16, fontWeight: 800, color: w.accent, fontFamily: 'Syne, sans-serif' }}>{w.stat}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: w.accent, fontSize: 13, fontWeight: 700 }}>
                        View case study <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §6  MANIFESTO — Bold typographic statement
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(107,63,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px', opacity: 0.3,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }} />
        <div className="container" style={{ maxWidth: 820, textAlign: 'center', position: 'relative' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 56, justifyContent: 'center' }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--border))' }} />
              <div className="label">Our belief</div>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--border))' }} />
            </div>
          </Reveal>

          {[
            { pre: 'A great website is not', em: 'designed in an afternoon.' },
            { pre: "It's researched, debated,", em: 'and built with intent.' },
          ].map((line, i) => (
            <motion.p key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)',
                lineHeight: 1.15, letterSpacing: '-0.025em',
                marginBottom: 10, color: 'var(--text)',
              }}
            >
              {line.pre}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6B3FFF, #A78BFA)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{line.em}</span>
            </motion.p>
          ))}

          <Reveal delay={0.3} style={{ marginTop: 56 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="belief-grid">
              {[
                { icon: '✦', label: 'Custom-coded', desc: 'No page builders or drag-and-drop platforms' },
                { icon: '⚡', label: '98+ Lighthouse', desc: 'Speed-optimized from the first commit' },
                { icon: '🇮🇳', label: 'India pricing', desc: 'World-class quality at local market rates' },
                { icon: '◆', label: 'No templates', desc: 'Every layout designed for your brand only' },
              ].map(v => (
                <div key={v.label} style={{
                  padding: '24px 20px', background: 'var(--surface)',
                  border: '1px solid var(--border)', borderRadius: 20,
                  textAlign: 'left', transition: 'all 220ms ease',
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--violet)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
                >
                  <span style={{
                    fontSize: 20, color: 'var(--violet)', flexShrink: 0,
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--violet-mute)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{v.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{v.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §6b STATS — After Our Belief
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '72px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 260,
          background: 'radial-gradient(ellipse, rgba(107,63,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container">
          <div className="stats-row">
            {([
              { value: '50+',    label: 'Projects\nDelivered',    color: '#6B3FFF' },
              { value: '3 wks',  label: 'Avg. Delivery\nTime',    color: '#8B65FF' },
              { value: '100%',   label: 'Client\nSatisfaction',   color: '#22C55E' },
              { value: '₹9,999', label: 'Starting\nPrice',        color: '#E8372A' },
            ] as { value: string; label: string; color: string }[]).map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flex: '1 1 0', minWidth: 0,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: 'clamp(20px,3vw,32px) clamp(10px,2vw,20px)',
                  position: 'relative', overflow: 'hidden', textAlign: 'center',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '70%', background: `radial-gradient(ellipse at 50% 0%, ${s.color}15, transparent 70%)`, pointerEvents: 'none' }} />
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: s.color, marginBottom: 10, position: 'relative' }}>{s.value}</div>
                <div style={{ fontSize: 'clamp(9px, 1.1vw, 11px)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--muted)', lineHeight: 1.45, whiteSpace: 'pre-line', position: 'relative' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §7  PROCESS — Animated vertical timeline
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <Reveal>
              <div className="label" style={{ marginBottom: 12 }}>Workflow</div>
              <h2 className="heading-2">Process<span style={{ color: 'var(--red)' }}>.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 300 }}>
                Brief to live. Four clean phases to launch your product.
              </p>
            </Reveal>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, var(--violet), transparent)',
              opacity: 0.2,
            }} className="process-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PROCESS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '60px 1fr',
                    gap: '0 28px', padding: '32px 0',
                    borderBottom: i < PROCESS.length - 1 ? '1px solid var(--border)' : 'none',
                    alignItems: 'start', position: 'relative',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16,
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, position: 'relative', zIndex: 1,
                        transition: 'all 220ms ease',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--violet)'; e.currentTarget.style.borderColor = 'var(--violet)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                      >
                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: 'var(--muted)' }}>{step.n}</span>
                      </div>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                        <span style={{ fontSize: 16, color: 'var(--violet)' }}>{step.icon}</span>
                        <h3 style={{ fontSize: '1.15rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--text)' }}>{step.title}</h3>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 500 }}>{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §8  TESTIMONIALS — Staggered card grid
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', top: '30%', right: '-15%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(107,63,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="label" style={{ marginBottom: 16 }}>Reviews</div>
            <h2 className="heading-2">Client Voices<span style={{ color: 'var(--red)' }}>.</span></h2>
            <p style={{ color: 'var(--muted)', maxWidth: 380, margin: '16px auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
              What happens in the months after we deliver the code.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <TiltCard>
                  <div style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                    display: 'flex', flexDirection: 'column', gap: 20,
                    position: 'relative', overflow: 'hidden', height: '100%',
                    transition: 'all 220ms ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent + '40'; e.currentTarget.style.boxShadow = `0 16px 40px ${t.accent}12` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                    }} />
                    <div style={{
                      position: 'absolute', top: '-20%', right: '-10%', width: 200, height: 200,
                      background: `radial-gradient(circle, ${t.accent}10 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: 3 }}>
                      {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#F59E0B', fontSize: 13 }}>★</span>)}
                    </div>
                    {/* Quote */}
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.75, fontStyle: 'italic', position: 'relative' }}>
                      <span style={{ color: t.accent, fontSize: 28, fontFamily: 'Georgia, serif', lineHeight: 0.5, verticalAlign: -8 }}>"</span>
                      {t.q}
                      <span style={{ color: t.accent, fontSize: 28, fontFamily: 'Georgia, serif', lineHeight: 0.5, verticalAlign: -8 }}>"</span>
                    </p>
                    {/* Attribution */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      paddingTop: 16, borderTop: '1px solid var(--border)', marginTop: 'auto',
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#fff',
                        boxShadow: `0 4px 12px ${t.accent}40`,
                      }}>{t.name[0]}</div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>{t.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §9  CTA — Dramatic gradient card
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <Reveal>
            <div style={{
              borderRadius: 28, padding: 'clamp(48px, 7vw, 80px) clamp(28px, 6vw, 64px)',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
              background: 'var(--surface)',
              border: '1px solid rgba(107,63,255,0.2)',
              boxShadow: '0 0 0 1px rgba(107,63,255,0.05), 0 40px 80px -24px rgba(107,63,255,0.12)',
            }}>
              {/* Gradient mesh BG */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(107,63,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(139,101,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 0% 100%, rgba(232,55,42,0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
              {/* Dot grid overlay */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(107,63,255,0.15) 1px, transparent 1px)',
                backgroundSize: '28px 28px', opacity: 0.4,
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative' }}>
                <div className="label" style={{ display: 'inline-flex', marginBottom: 20 }}>
                  <span className="pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                  Accepting projects now
                </div>

                <h2 className="heading-2" style={{ marginBottom: 16, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  Ready to build something<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #6B3FFF, #A78BFA)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>genuinely great?</span>
                </h2>

                <p style={{ color: 'var(--muted)', maxWidth: 420, margin: '0 auto 36px', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  We take a limited number of projects each month to ensure every client receives our full attention and premium quality.
                </p>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                  <Link to="/contact" className="btn btn-primary" style={{
                    padding: '16px 36px', fontSize: 15,
                    boxShadow: '0 0 30px rgba(107,63,255,0.35), 0 4px 16px rgba(107,63,255,0.2)',
                  }}>
                    Start a project
                  </Link>
                  <a href="https://calendly.com/palasync" target="_blank" rel="noreferrer"
                    className="btn btn-secondary" style={{ padding: '15px 36px', fontSize: 15 }}>
                    Book a free call
                  </a>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 28px' }}>
                  {['🇮🇳 India-based', '⚡ Reply in 4 hrs', '✦ Custom-coded', '💰 From ₹9,999'].map(t => (
                    <span key={t} style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-inner {
          display: inline-flex;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }

        /* ── Stats row: 4 items in one flex row, clamp handles font scaling ── */
        .stats-row {
          display: flex;
          gap: clamp(8px, 2vw, 20px);
          align-items: stretch;
        }
        /* On very small phones: 2×2 grid */
        @media (max-width: 479px) {
          .stats-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
        }

        /* ── Hero float cards: only show on wide screens ── */
        .hero-float-card { display: none !important; }
        @media (min-width: 1100px) {
          .hero-float-card { display: block !important; }
        }

        /* ── Services / layout ── */
        @media (min-width: 640px) {
          .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .belief-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .services-main-grid { grid-template-columns: 1.4fr 1fr !important; }
          .services-mini-grid { grid-template-columns: 1fr !important; }
          .process-line { display: block; }
        }
        @media (max-width: 480px) {
          .belief-grid { grid-template-columns: 1fr !important; }
        }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(34,197,94,0.4); }
          70%  { box-shadow: 0 0 0 8px rgba(34,197,94,0);   }
          100% { box-shadow: 0 0 0 0   rgba(34,197,94,0);   }
        }
        .pulse { animation: pulse-ring 2s ease-out infinite; }
      `}</style>
    </>
  )
}
