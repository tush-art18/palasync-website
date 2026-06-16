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
    desc: 'Every layout earns its place. We design interfaces that guide visitors toward a single, clear decision.',
    href: '/services',
  },
  {
    icon: '⚡',
    title: 'Web Development',
    desc: 'React, TypeScript, 98+ Lighthouse. We write code we\'re proud to put our name on.',
    href: '/services',
  },
  {
    icon: '◆',
    title: 'SaaS Products',
    desc: 'Full-stack dashboards and portals, from database schema to production deploy.',
    href: '/services',
  },
  {
    icon: '❋',
    title: 'Branding',
    desc: 'Logo, colour system, type scale. An identity that remains consistent everywhere it appears.',
    href: '/services',
  },
]

const WORK = [
  { name: 'Brown Beans Coffee', cat: 'E-commerce · Branding',       stat: '+240% orders',        year: '2025', accent: '#C8813A' },
  { name: 'WoW Saplings',       cat: 'SaaS Dashboard · Web App',    stat: '3× traffic / 30 days', year: '2025', accent: '#22C55E' },
  { name: 'Client Portal Pro',  cat: 'Full-Stack Web App',           stat: '98 Lighthouse',        year: '2024', accent: '#8B65FF' },
]

const PROCESS = [
  { n: '01', title: 'Discover',  body: 'Deep research into your business, market position, and users before we write a single line.' },
  { n: '02', title: 'Design',    body: 'Figma prototypes — reviewed and approved by you — before development starts.' },
  { n: '03', title: 'Build',     body: 'Clean, type-safe code. Zero page builders. Every component is built from scratch.' },
  { n: '04', title: 'Launch',    body: 'Deployed, QA\'d on real devices, Lighthouse targets met, documentation handed over.' },
]

const TESTIMONIALS = [
  {
    q: 'PalaSync delivered a site our investors reference in meetings. The quality speaks for itself.',
    name: 'Rahul M.',
    role: 'Founder · Startup, Pune',
    accent: '#6B3FFF',
  },
  {
    q: 'Three agencies gave us templates. PalaSync built our identity from scratch. Completely different experience.',
    name: 'Ananya S.',
    role: 'Owner · Boutique, Mumbai',
    accent: '#8B65FF',
  },
  {
    q: 'Launched in 19 days. Converts better than the site that cost us 5× more. Remarkable ROI.',
    name: 'Kiran T.',
    role: 'CEO · SME, Bangalore',
    accent: '#E8372A',
  },
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
      style={{ textAlign: 'center', padding: '8px 0' }}
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
        fontSize: 12,
        fontWeight: 600,
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
        <title>PalaSync — Premium Web Design & Development India</title>
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
        paddingTop: 80,
        paddingBottom: 60,
      }}>
        {/* Subtle background glow — different per theme */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(107,63,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 780 }}>
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
              Accepting new projects · India-based
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

          {/* Sub */}
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              color: 'var(--muted)',
              maxWidth: 480,
              margin: '0 auto 40px',
            }}
          >
            We build premium custom websites, SaaS platforms, and brand identities
            for Indian businesses that refuse to look ordinary.{' '}
            <span style={{ color: 'var(--violet)', fontWeight: 600 }}>From ₹9,999.</span>
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
            }}
          >
            <Link to="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <Link to="/work" className="btn btn-secondary">
              See our work
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {/* Avatar stack */}
            <div style={{ display: 'flex' }}>
              {['R', 'A', 'K', 'P'].map((l, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: `hsl(${260 + i * 20}, 70%, 60%)`,
                  border: '2px solid var(--bg)',
                  marginLeft: i > 0 ? -10 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 12, color: '#fff',
                }}>
                  {l}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: 12 }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                Trusted by <strong style={{ color: 'var(--text)', fontWeight: 600 }}>50+ businesses</strong>
              </div>
            </div>
          </motion.div>

          {/* Premium Glassmorphic Browser Telemetry Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            style={{
              marginTop: 56,
              width: '100%',
              maxWidth: 720,
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              boxShadow: '0 24px 64px -16px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              margin: '56px auto 0',
            }}
          >
            {/* Browser Header Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '12px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--surface)',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
              <div style={{
                margin: '0 auto 0 16px',
                fontSize: 10,
                color: 'var(--muted)',
                background: 'var(--surface-2)',
                padding: '3px 14px',
                borderRadius: 99,
                letterSpacing: '0.02em',
                fontFamily: 'monospace',
                border: '1px solid var(--border)',
              }}>
                palasync.com/preview/wow-saplings
              </div>
            </div>
            {/* Browser Content */}
            <div style={{
              padding: '24px clamp(16px, 4vw, 32px)',
              background: 'var(--surface-2)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WoW Saplings Admin Portal</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', fontFamily: 'Syne, sans-serif' }}>Active Class Overview</div>
                </div>
                <span style={{ fontSize: 11, background: '#22c55e16', color: '#22c55e', border: '1px solid #22c55e24', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>
                  ● Synced Live
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
                {[
                  { val: '240+', title: 'Active Teachers', change: '+12% this week', color: 'var(--violet)' },
                  { val: '14,890', title: 'Downloads Count', change: '+24% this week', color: '#22c55e' },
                  { val: '99.8%', title: 'Uptime Score', change: 'Excellent stability', color: 'var(--text)' }
                ].map((card, i) => (
                  <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 14 }}>
                    <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600 }}>{card.title}</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: card.color, margin: '4px 0', fontFamily: 'Syne, sans-serif' }}>{card.val}</div>
                    <div style={{ fontSize: 9, color: 'var(--muted-2)' }}>{card.change}</div>
                  </div>
                ))}
              </div>
              
              {/* Telemetry charts */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-2)', textTransform: 'uppercase' }}>Weekly Activity Telemetry</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', height: 42, gap: 5, padding: '0 4px' }}>
                  {[30, 45, 35, 60, 75, 50, 90, 65, 80].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      background: `linear-gradient(to top, var(--violet), var(--violet-soft))`,
                      borderRadius: '2px 2px 0 0',
                      opacity: 0.7 + (i * 0.03),
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 20, height: 30, borderRadius: 10,
              border: '1.5px solid var(--border-2)',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
              paddingTop: 5,
            }}
          >
            <div style={{ width: 3, height: 6, borderRadius: 2, background: 'var(--muted)' }} />
          </motion.div>
        </motion.div>
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
          §3  SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 56 }}>
              <div className="label" style={{ marginBottom: 18 }}>Services</div>
              <h2 className="heading-2" style={{ maxWidth: 460, marginTop: 12 }}>
                One studio.<br />Every digital need.
              </h2>
              <p style={{
                color: 'var(--muted)', marginTop: 14, maxWidth: 360, fontSize: '0.95rem', lineHeight: 1.7,
              }}>
                We don't subcontract. Every project is built in-house, by us.
              </p>
            </div>
          </Reveal>

          <div className="grid-2" style={{ gap: 12 }}>
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.08}>
                <Link to={svc.href} className="card" style={{
                  display: 'flex', flexDirection: 'column', gap: 16,
                  padding: '28px 28px 24px', textDecoration: 'none', height: '100%',
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
                    <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{svc.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>{svc.desc}</p>
                  </div>
                  <div style={{
                    marginTop: 'auto',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--violet)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                    Learn more <span>→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §4  SELECTED WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div className="label" style={{ marginBottom: 16 }}>Selected work</div>
                <h2 className="heading-2" style={{ marginTop: 12 }}>Where deals are won.</h2>
              </div>
              <Link to="/work" className="btn btn-secondary" style={{ padding: '9px 20px', fontSize: 13 }}>
                All projects →
              </Link>
            </div>
          </Reveal>

          {/* Work list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {WORK.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.08}>
                <Link to="/work" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '16px 24px',
                    padding: '24px 0',
                    borderBottom: '1px solid var(--border)',
                    transition: 'padding-left 220ms ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'}
                  >
                    <div>
                      <div style={{
                        fontFamily: 'Syne, sans-serif', fontWeight: 800,
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        letterSpacing: '-0.015em', marginBottom: 4, color: 'var(--text)',
                      }}>
                        {w.name}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--muted)' }}>{w.cat}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: 4 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700,
                        color: w.accent,
                        background: `${w.accent}18`,
                        border: `1px solid ${w.accent}30`,
                        padding: '4px 12px', borderRadius: 99,
                        whiteSpace: 'nowrap',
                      }}>
                        {w.stat}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--muted-2)' }}>{w.year}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5  MANIFESTO (Unique brand statement)
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
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.p
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em',
                  marginBottom: 6,
                  color: 'var(--text)',
                }}
              >
                {line.pre}{' '}
                <span className="grad">{line.em}</span>
              </motion.p>
            </div>
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
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-2)' }}>{v.label}</span>
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
          <div className="grid-4">
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
          §7  PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 56 }}>
              <div className="label" style={{ marginBottom: 16 }}>How we work</div>
              <h2 className="heading-2" style={{ marginTop: 12 }}>
                Brief to live.<br />
                <span className="grad">Four clean steps.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: '0 28px',
                  padding: '32px 0',
                  borderBottom: i < PROCESS.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--border-2)',
                    userSelect: 'none',
                    paddingTop: 4,
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: 10, color: 'var(--text)' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 500 }}>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §8  TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 16 }}>Client voices</div>
            <h2 className="heading-2" style={{ marginTop: 12, maxWidth: 360 }}>
              What happens<br />after we deliver.
            </h2>
          </Reveal>

          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: '#F59E0B', fontSize: 13 }}>★</span>
                    ))}
                  </div>

                  {/* Large opening quote */}
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '2.5rem',
                    lineHeight: 0.7,
                    color: t.accent,
                    opacity: 0.25,
                    userSelect: 'none',
                  }}>
                    "
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.75, flex: 1 }}>
                    {t.q}
                  </p>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    paddingTop: 18,
                    borderTop: '1px solid var(--border)',
                    marginTop: 'auto',
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif', fontWeight: 700,
                      fontSize: 14, color: '#fff', flexShrink: 0,
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
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
              padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)',
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

              <div className="label" style={{ display: 'inline-flex', marginBottom: 24 }}>
                <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                Limited spots this month
              </div>

              <h2 className="heading-2" style={{ marginBottom: 16 }}>
                Ready to build something great?
              </h2>

              <p style={{
                color: 'var(--muted)', maxWidth: 400, margin: '0 auto 36px',
                fontSize: '0.95rem', lineHeight: 1.75,
              }}>
                We take a small number of projects each month to ensure every client gets our full attention and the quality they deserve.
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                  Start a project
                </Link>
                <a
                  href="https://calendly.com/palasync"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '13px 32px' }}
                >
                  Book a free call
                </a>
              </div>

              {/* Trust row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 24px',
                marginTop: 36,
              }}>
                {['🇮🇳 India-based', '⚡ Reply in 4 hrs', '✦ Custom-coded', '💰 From ₹9,999'].map(t => (
                  <span key={t} style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
