import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>Our Story &amp; Values — About PalaSync</title>
        <meta name="description" content="Meet the mind behind PalaSync. We help Indian businesses build premium custom websites that compete globally. No templates, ever." />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
        {/* Background Grid Pattern */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black, transparent 80%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient Glowing Blobs */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(107, 63, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Section 1: Hero */}
          <div style={{ textAlign: 'center', marginBottom: 72, maxWidth: 700, margin: '0 auto 72px' }}>
            <Reveal>
              <div className="label" style={{ marginBottom: 18 }}>Who We Are</div>
              <h1 className="display" style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                lineHeight: 1.1,
                marginBottom: 20,
                background: 'linear-gradient(to right, var(--text) 30%, var(--violet-soft))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                We build code, not templates.
              </h1>
              <p className="body-lg" style={{ color: 'var(--muted)' }}>
                PalaSync was founded to rescue ambitious Indian brands from the sea of boring, slow WordPress templates. We believe your site is your primary client acquisition engine.
              </p>
            </Reveal>
          </div>

          {/* Section 2: Founder Story */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
            alignItems: 'center',
            marginBottom: 96,
          }} className="about-grid">
            <Reveal>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 24,
                padding: '40px clamp(24px, 5vw, 40px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--violet)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>The Philosophy</div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: 20, color: 'var(--text)' }}>A Message From Palase</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--text-2)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <p>
                    I founded PalaSync because I was tired of seeing businesses spend money on agencies that simply download a theme, swap the logo, and call it a day. In 2026, clients are smarter. They expect premium performance, smooth interactions, and layouts that align perfectly with their brand.
                  </p>
                  <p>
                    We operate with extreme transparency. When you work with us, you deal directly with developers and designers who own the work. We do not subcontract. We design in Figma and code custom React architectures from scratch.
                  </p>
                  <p>
                    Whether you are an early-stage startup needing speed to launch or a Rs. 5Cr business seeking a website audit to unlock sales, we design specifically for your target audience.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Founder Graphic Box */}
            <Reveal delay={0.15}>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
                border: '1px solid var(--border)',
                borderRadius: 24,
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 20,
                boxShadow: '0 10px 40px -10px rgba(107, 63, 255, 0.08)',
              }}>
                <div style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet), var(--violet-soft))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 54,
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: 'Syne, sans-serif',
                  boxShadow: '0 10px 24px rgba(107, 63, 255, 0.25)',
                }}>
                  P
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 4, color: 'var(--text)' }}>Palase</h3>
                  <div style={{ fontSize: 13, color: 'var(--violet)', fontWeight: 600 }}>Founder &amp; Principal Architect</div>
                </div>
                <div style={{ height: 1, width: '60%', background: 'var(--border)' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: 280 }}>
                  "We believe a company website should be a reflection of pride, engineered cleanly, without bloat."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Section 3: Core Values */}
          <div style={{ marginBottom: 96 }}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <div className="label" style={{ marginBottom: 16 }}>Our DNA</div>
                <h2 className="heading-2">Built On Three Core Values</h2>
              </div>
            </Reveal>

            <div className="grid-3" style={{ gap: 24 }}>
              {[
                {
                  title: 'Build',
                  desc: 'We focus on clean, type-safe React code and high-performance engineering. Every line has a purpose.',
                  icon: '🛠️',
                  glow: 'rgba(107, 63, 255, 0.06)'
                },
                {
                  title: 'Grow',
                  desc: 'A website is a client conversion funnel. We build interfaces specifically optimized to guide and convert warm traffic.',
                  icon: '📈',
                  glow: 'rgba(34, 197, 94, 0.06)'
                },
                {
                  title: 'Sync',
                  desc: 'Constant collaboration. We share weekly updates, Figma boards, and preview links, keeping our goals perfectly aligned.',
                  icon: '🔄',
                  glow: 'rgba(232, 55, 42, 0.06)'
                }
              ].map((val, i) => (
                <Reveal key={val.title} delay={i * 0.1}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 20,
                    padding: 32,
                    height: '100%',
                    boxShadow: `0 10px 30px -10px ${val.glow}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}>
                    <span style={{ fontSize: 32 }}>{val.icon}</span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text)' }}>{val.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{val.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Section 4: Final CTA */}
          <Reveal>
            <div style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: '48px clamp(24px, 5vw, 60px)',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: 12 }}>Want to work with a partner, not a vendor?</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 460, margin: '0 auto 28px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Let's discuss how we can build a tailor-made digital experience that sets your company apart from competitors.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  Start a project
                </Link>
                <Link to="/work" className="btn btn-secondary">
                  Browse our portfolio
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </main>

      <style>{`
        @media (min-width: 800px) {
          .about-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
