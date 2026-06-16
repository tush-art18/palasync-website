import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// ─── Animation wrapper ────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: '✦',
    title: 'Web Design',
    desc: 'Custom Figma prototypes tailored specifically for your target audience. We design layouts that guide visitors toward conversion.',
    href: '/services/web-design',
  },
  {
    icon: '⚡',
    title: 'Web Development',
    desc: 'React, TypeScript, 98+ Lighthouse scores. Clean, type-safe codebase that loads instantly and provides app-like speed.',
    href: '/services/web-development',
  },
  {
    icon: '◆',
    title: 'SaaS Products',
    desc: 'Full-stack application development. Interactive client dashboards, secure login, database structure, and payment widgets.',
    href: '/services/saas-products',
  },
  {
    icon: '❋',
    title: 'Branding',
    desc: 'Custom logos, matching typography pairings, and a digital stylebook to keep your brand assets globally recognizable.',
    href: '/services/branding',
  },
]

const WORK = [
  { name: 'Brown Beans Coffee', cat: 'E-commerce · Branding',       stat: '+240% orders',        year: '2025', accent: '#C8813A', href: '/work/brown-beans-coffee' },
  { name: 'WoW Saplings',       cat: 'SaaS Dashboard · Web App',    stat: '3× traffic / 30 days', year: '2025', accent: '#22C55E', href: '/work/wow-saplings' },
  { name: 'Client Portal Pro',  cat: 'Full-Stack Web App',           stat: '98 Lighthouse',        year: '2024', accent: '#8B65FF', href: '/work/client-portal-pro' },
]

const PROCESS = [
  { n: '01', title: 'Discover',  body: 'Deep research into your market positioning and customer complaints before we write code.' },
  { n: '02', title: 'Design',    body: 'Custom Figma prototypes showing exact dark and light layouts for your direct review.' },
  { n: '03', title: 'Build',     body: 'Clean React SPA implementation. Zero template bloat. Speed-optimized from line one.' },
  { n: '04', title: 'Launch',    body: 'Domain routing setup via Cloudflare, form submissions check, and sitemap indexing on Google.' },
]

const TESTIMONIALS = [
  {
    q: 'PalaSync delivered a site our investors reference in meetings. The layout quality and speed speaks for itself.',
    name: 'Rahul M.',
    role: 'Founder · Codeink',
    accent: '#6B3FFF',
  },
  {
    q: 'Three agencies gave us generic templates. PalaSync built our platform custom from scratch. Completely different league.',
    name: 'Ananya S.',
    role: 'Owner · Sharpners',
    accent: '#8B65FF',
  },
  {
    q: 'Launched in 19 days. Converts better than the site that cost us 5× more. Highly recommended.',
    name: 'Kiran T.',
    role: 'CEO · Junaids Group',
    accent: '#E8372A',
  },
]

const CAPABILITIES = [
  'React Apps', 'Web Design', 'SaaS Dashboards', 'Tailwind CSS', 
  'Custom Code', 'Branding', '98+ Lighthouse', 'SEO Schema'
]

const MARQUEE = [
  'Web Design', 'SaaS Products', 'Branding', 'React Apps',
  'UI/UX Design', 'E-commerce', 'Web Design', 'SaaS Products',
  'Branding', 'React Apps', 'UI/UX Design', 'E-commerce',
]

// ─── Counter ──────────────────────────────────────────────────────
function StatNumber({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', padding: '16px 8px' }}
    >
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        background: 'linear-gradient(135deg, var(--violet), var(--violet-soft))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 8,
      }}>
        {value}
      </div>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}>
        {label}
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PalaSync — Premium Web Design &amp; Development India</title>
        <meta name="description" content="PalaSync builds premium custom websites, SaaS platforms, and brand identities for ambitious Indian businesses. Starting ₹9,999. No templates, ever." />
      </Helmet>

      {/* ══════════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        paddingTop: 100,
        paddingBottom: 60,
      }}>
        {/* Subtle background dotted grid */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle at 50% 25%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 25%, black, transparent 75%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient glow blobs */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: 900,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(107,63,255,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 840 }}>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 99,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--muted)',
            }}>
              <span className="pulse" style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#22C55E', display: 'inline-block', flexShrink: 0,
              }} />
              Accepting new projects
            </div>
          </motion.div>

          {/* Headline */}
          <div style={{ overflow: 'hidden', marginBottom: 10 }}>
            <motion.h1
              className="display"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Your business deserves
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 28 }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="display grad">a website that converts.</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              color: 'var(--muted)',
              maxWidth: 500,
              margin: '0 auto 40px',
            }}
          >
            We build premium custom websites, SaaS platforms, and brand identities
            for Indian businesses that refuse to look ordinary.{' '}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 44,
            }}
          >
            <Link to="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <Link to="/work" className="btn btn-secondary">
              See our work
            </Link>
          </motion.div>

          {/* Social proof stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex' }}>
              {['R', 'A', 'K', 'P'].map((l, i) => (
                <div key={i} style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: `hsl(${260 + i * 20}, 70%, 60%)`,
                  border: '2px solid var(--bg)',
                  marginLeft: i > 0 ? -8 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 11, color: '#fff',
                }}>
                  {l}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 1, marginBottom: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: 11 }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                Trusted by <strong style={{ color: 'var(--text)', fontWeight: 600 }}>50+ brands</strong>
              </div>
            </div>
          </motion.div>

          {/* capability tags directly in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 8,
              marginTop: 36,
            }}
          >
            {CAPABILITIES.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--violet)',
                  background: 'var(--violet-mute)',
                  border: '1px solid rgba(107, 63, 255, 0.18)',
                  padding: '5px 14px',
                  borderRadius: 99,
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--violet)'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.boxShadow = '0 4px 12px var(--violet-mute)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--violet-mute)'
                  e.currentTarget.style.color = 'var(--violet)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §2  MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '14px 0',
        overflow: 'hidden',
        background: 'var(--surface)',
      }}>
        <div className="marquee-inner">
          {MARQUEE.map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 20,
              padding: '0 24px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: 'var(--violet)', fontSize: 6 }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          §3  SERVICES (Split Sticky Layout)
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }} className="split-layout">
            
            {/* Left side - Sticky */}
            <div style={{ height: 'fit-content' }} className="sticky-column">
              <Reveal>
                <div className="label" style={{ marginBottom: 18 }}>Our Expertise</div>
                <h2 className="heading-2" style={{ marginTop: 12 }}>
                  Services<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
                <p style={{
                  color: 'var(--muted)', marginTop: 14, maxWidth: 320, fontSize: '0.95rem', lineHeight: 1.7,
                  marginBottom: 28,
                }}>
                  We don't subcontract. Every mockup, outline, and line of code is produced in-house by our team.
                </p>
                <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
                  Explore Details →
                </Link>
              </Reveal>
            </div>

            {/* Right side - scrolling list */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="grid-right-2">
              {SERVICES.map((svc, i) => (
                <Reveal key={svc.title} delay={i * 0.06}>
                  <Link to={svc.href} className="card" style={{
                    display: 'flex', flexDirection: 'column', gap: 16,
                    padding: '32px 28px', textDecoration: 'none', height: '100%',
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: 'var(--bg-alt)',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, color: 'var(--violet)',
                    }}>
                      {svc.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{svc.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65 }}>{svc.desc}</p>
                    </div>
                    <div style={{
                      marginTop: 'auto',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'var(--violet)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      paddingTop: 12,
                    }}>
                      Scope details <span>→</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §4  SELECTED WORK (Split Sticky Layout)
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }} className="split-layout">
            
            {/* Left side - Sticky */}
            <div style={{ height: 'fit-content' }} className="sticky-column">
              <Reveal>
                <div className="label" style={{ marginBottom: 18 }}>Portfolio</div>
                <h2 className="heading-2" style={{ marginTop: 12 }}>
                  Selected Work<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
                <p style={{
                  color: 'var(--muted)', marginTop: 14, maxWidth: 320, fontSize: '0.95rem', lineHeight: 1.7,
                  marginBottom: 28,
                }}>
                  We build custom systems designed specifically to resolve transaction friction.
                </p>
                <Link to="/work" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
                  All Case Studies →
                </Link>
              </Reveal>
            </div>

            {/* Right side - Projects scrolling */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {WORK.map((w, i) => (
                <Reveal key={w.name} delay={i * 0.08}>
                  <Link to={w.href} style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 20,
                        padding: '32px 28px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = w.accent
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.transform = 'none'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: w.accent }}>{w.cat}</span>
                        <span style={{ fontSize: 12, color: 'var(--muted-2)' }}>{w.year}</span>
                      </div>

                      <h3 style={{
                        fontFamily: 'Syne, sans-serif', fontWeight: 800,
                        fontSize: '1.25rem', color: 'var(--text)',
                      }}>
                        {w.name}
                      </h3>

                      <div style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        padding: '10px 16px',
                        borderRadius: 10,
                        display: 'inline-flex',
                        alignSelf: 'flex-start',
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: w.accent }}>{w.stat}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5  MANIFESTO
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <div className="label">Our belief</div>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
          </Reveal>

          {[
            { pre: 'A great website is not', em: 'designed in an afternoon.' },
            { pre: 'It\'s researched, debated,', em: 'and built with intent.' },
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                marginBottom: 12,
                color: 'var(--text)',
                textAlign: 'center',
              }}
            >
              {line.pre}{' '}
              <span className="grad">{line.em}</span>
            </motion.p>
          ))}

          <Reveal delay={0.3} style={{ marginTop: 48 }}>
            <div className="grid-4" style={{ gap: 12 }}>
              {[
                { icon: '✦', label: 'Custom-coded' },
                { icon: '⚡', label: '98+ Lighthouse' },
                { icon: '🇮🇳', label: 'India pricing' },
                { icon: '◆', label: 'No templates' },
              ].map(v => (
                <div key={v.label} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '20px 12px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 16, gap: 10, textAlign: 'center',
                }}>
                  <span style={{ fontSize: 22, color: 'var(--violet)' }}>{v.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-2)' }}>{v.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §6  STATS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: 24 }}>
            {[
              { value: '50+',   label: 'Projects delivered' },
              { value: '3 wks', label: 'Avg. delivery time'  },
              { value: '100%',  label: 'Client satisfaction' },
              { value: '₹9,999', label: 'Starting price'    },
            ].map(s => (
              <StatNumber key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §7  PROCESS (Split Sticky Layout)
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }} className="split-layout">
            
            {/* Left side - Sticky */}
            <div style={{ height: 'fit-content' }} className="sticky-column">
              <Reveal>
                <div className="label" style={{ marginBottom: 18 }}>Workflow</div>
                <h2 className="heading-2" style={{ marginTop: 12 }}>
                  Process<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
                <p style={{
                  color: 'var(--muted)', marginTop: 14, maxWidth: 320, fontSize: '0.95rem', lineHeight: 1.7,
                }}>
                  Brief to live. Four clean phases to structure your product launch.
                </p>
              </Reveal>
            </div>

            {/* Right side - Scrolling steps */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {PROCESS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: '0 24px',
                    padding: '24px 0',
                    borderBottom: i < PROCESS.length - 1 ? '1px solid var(--border)' : 'none',
                    alignItems: 'start',
                  }}>
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                      lineHeight: 1,
                      color: 'var(--border-2)',
                      userSelect: 'none',
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', marginBottom: 6, color: 'var(--text)' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: 460 }}>{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §8  TESTIMONIALS (Split Sticky Layout)
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }} className="split-layout">
            
            {/* Left side - Sticky */}
            <div style={{ height: 'fit-content' }} className="sticky-column">
              <Reveal>
                <div className="label" style={{ marginBottom: 18 }}>Reviews</div>
                <h2 className="heading-2" style={{ marginTop: 12 }}>
                  Client Voices<span style={{ color: 'var(--red)' }}>.</span>
                </h2>
                <p style={{
                  color: 'var(--muted)', marginTop: 14, maxWidth: 320, fontSize: '0.95rem', lineHeight: 1.7,
                }}>
                  What happens in the months after we deliver the code assets.
                </p>
              </Reveal>
            </div>

            {/* Right side - Testimonials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="grid-right-2">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                    <div style={{ display: 'flex', gap: 1 }}>
                      {[...Array(5)].map((_, j) => (
                        <span key={j} style={{ color: '#F59E0B', fontSize: 11 }}>★</span>
                      ))}
                    </div>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65, fontStyle: 'italic' }}>
                      "{t.q}"
                    </p>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      paddingTop: 12,
                      borderTop: '1px solid var(--border)',
                      marginTop: 'auto',
                    }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Syne, sans-serif', fontWeight: 700,
                        fontSize: 12, color: '#fff', flexShrink: 0,
                      }}>
                        {t.name[0]}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>{t.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §9  CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 48px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow */}
              <div aria-hidden style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500, height: 260,
                background: 'radial-gradient(ellipse, rgba(107,63,255,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div className="label" style={{ display: 'inline-flex', marginBottom: 20 }}>
                <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                Accepting projects now
              </div>

              <h2 className="heading-2" style={{ marginBottom: 16 }}>
                Ready to build something great?
              </h2>

              <p style={{
                color: 'var(--muted)', maxWidth: 400, margin: '0 auto 32px',
                fontSize: '0.925rem', lineHeight: 1.7,
              }}>
                We take a small number of projects each month to ensure every client gets our full attention and premium code quality.
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 30px' }}>
                  Start a project
                </Link>
                <a
                  href="https://calendly.com/palasync"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '13px 30px' }}
                >
                  Book a free call
                </a>
              </div>

              {/* Trust badges */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px',
                marginTop: 36,
              }}>
                {['🇮🇳 India-based', '⚡ Reply in 4 hrs', '✦ Custom-coded', '💰 From ₹9,999'].map(t => (
                  <span key={t} style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Styled Breakpoints */}
      <style>{`
        @media (min-width: 900px) {
          .split-layout {
            grid-template-columns: 1.2fr 2fr !important;
          }
          .sticky-column {
            position: sticky !important;
            top: 100px;
          }
          .grid-right-2 {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px;
          }
        }
      `}</style>
    </>
  )
}
