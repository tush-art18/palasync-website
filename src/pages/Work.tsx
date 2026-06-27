import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const PROJECTS = [
  {
    slug: 'wow-saplings',
    name: 'WoW Saplings',
    category: 'SaaS Dashboard',
    catSlug: 'saas',
    desc: 'EdTech teacher portal and training dashboard.',
    stat: '3× traffic / 30 days',
    year: '2026',
    accent: '#22C55E',
    bgGlow: 'rgba(34, 197, 94, 0.08)',
    clientBg: 'An innovative Indian curriculum and teacher training provider servicing schools nationwide.',
    problem: 'Distributing teacher training files and curriculum materials via email attachments and Google Drive was slow and unorganized.',
    solution: 'A secure, responsive portal dashboard built in React + TypeScript where teachers access assets, track lessons, and submit reviews.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
    liveUrl: 'https://wowsaplingsschool.in',
    testimonial: {
      q: 'Our teachers love the dashboard interface. Materials distribution is now completely automated, saving us hours of manual admin.',
      author: 'Yasmeen S.',
      role: 'Founder, WoW Saplings'
    }
  },
  {
    slug: 'client-portal-pro',
    name: 'Client Portal Pro',
    category: 'Web App',
    catSlug: 'webapp',
    desc: 'Secure B2B client collaboration environment.',
    stat: '98 Lighthouse',
    year: '2026',
    accent: '#8B65FF',
    bgGlow: 'rgba(139, 101, 255, 0.08)',
    clientBg: 'A premium corporate advisory firm servicing enterprise clients across Singapore and India.',
    problem: 'Exchanging sensitive legal files and financial data via scattered email threads caused version confusion and security risks.',
    solution: 'A custom, clean portal application with file encryption, real-time sync comments, and clean layout task tracking.',
    tech: ['React', 'Supabase', 'Tailwind CSS v4', 'TypeScript', 'Crypto.js'],
    liveUrl: 'https://netresh-satpute.vercel.app/',
    testimonial: {
      q: 'Our enterprise clients regularly praise the custom portal. It proves our technical capability during onboarding.',
      author: 'David L.',
      role: 'Partner, Advisory Capital'
    }
  },
  {
    slug: 'brown-beans-coffee',
    name: 'Brown Beans Coffee (Demo)',
    category: 'E-commerce Demo',
    catSlug: 'ecommerce',
    desc: 'High-performance headless e-commerce store benchmark.',
    stat: '99 Speed',
    year: '2025',
    accent: '#C8813A',
    bgGlow: 'rgba(200, 129, 58, 0.08)',
    clientBg: 'A high-fidelity headless commerce demo designed and engineered by PalaSync to showcase custom Shopify API integrations and animation architectures.',
    problem: 'Standard e-commerce builders and templates introduce heavy script overhead, rigid layout constraints, and slow page loading, which hurts conversion rates.',
    solution: 'We built a custom headless storefront using React, Tailwind CSS, and Framer Motion. It demonstrates instant route transitions, flavor profile selectors, and optimized checkouts.',
    tech: ['React', 'Tailwind CSS v4', 'Framer Motion', 'Shopify API', 'Sanity CMS'],
    liveUrl: 'https://brown-beans-i89v.vercel.app/',
    testimonial: {
      q: 'We engineered this demo to prove that custom React-based storefronts outperform standard templates. It serves as our live benchmark for speed and premium design.',
      author: 'Palase',
      role: 'Founder, PalaSync'
    }
  }
]

type Project = typeof PROJECTS[number]

export default function Work() {
  const { slug } = useParams<{ slug?: string }>()
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'saas' | 'webapp'>('all')

  // Find dynamic project if slug is active
  const project: Project | undefined = slug ? PROJECTS.find(p => p.slug === slug) : undefined

  // Filter projects list
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.catSlug === activeFilter)

  return (
    <>
      <Helmet>
        <title>
          {project
            ? `${project.name} Case Study | PalaSync Portfolio`
            : 'Our Work — Custom Web Design &amp; Development Portfolio | PalaSync'}
        </title>
        <meta
          name="description"
          content={project
            ? `Read how we built ${project.name} yielding ${project.stat}.`
            : 'Explore custom React websites, SaaS dashboards, and digital branding delivered for premium growing brands.'}
        />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
        {/* Background Grid Pattern */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.22,
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black, transparent 80%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            {!project ? (
              // ─── INDEX VIEW ───
              <motion.div
                key="index"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px' }}>
                  <div className="label" style={{ marginBottom: 16 }}>Case Studies</div>
                  <h1 className="display" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                    lineHeight: 1.1,
                    marginBottom: 20,
                    background: 'linear-gradient(to right, var(--text) 40%, var(--violet))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Proven Results.
                  </h1>
                  <p className="body-lg" style={{ color: 'var(--muted)' }}>
                    We don't showcase mock screenshots. These are real platforms built with intent to solve tangible business bottlenecks.
                  </p>
                </div>

                {/* Filter Selector */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 56,
                }}>
                  {[
                    { label: 'All Projects', value: 'all' },
                    { label: 'E-commerce', value: 'ecommerce' },
                    { label: 'SaaS Products', value: 'saas' },
                    { label: 'Custom Web Apps', value: 'webapp' }
                  ].map((btn) => {
                    const isSelected = activeFilter === btn.value
                    return (
                      <button
                        key={btn.value}
                        onClick={() => setActiveFilter(btn.value as any)}
                        style={{
                          padding: '10px 20px',
                          borderRadius: 99,
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: isSelected ? 'var(--violet)' : 'var(--surface-2)',
                          color: isSelected ? '#ffffff' : 'var(--text-2)',
                          border: isSelected ? '1px solid var(--violet)' : '1px solid var(--border)',
                          transition: 'all 200ms ease',
                        }}
                      >
                        {btn.label}
                      </button>
                    )
                  })}
                </div>

                {/* Case Studies Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 32,
                }} className="work-grid">
                  {filteredProjects.map((p) => (
                    <Link
                      to={`/work/${p.slug}`}
                      key={p.slug}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 24,
                          padding: 40,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 20,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 240ms cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = p.accent
                          e.currentTarget.style.transform = 'translateY(-4px)'
                          e.currentTarget.style.boxShadow = `0 12px 36px -12px ${p.accent}30`
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border)'
                          e.currentTarget.style.transform = 'none'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {/* Background subtle color indicator */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: 140,
                          height: 140,
                          background: `radial-gradient(circle, ${p.bgGlow} 0%, transparent 70%)`,
                          pointerEvents: 'none',
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                          <span style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: p.accent,
                            background: `${p.accent}14`,
                            border: `1px solid ${p.accent}24`,
                            padding: '4px 12px',
                            borderRadius: 99,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}>
                            {p.category}
                          </span>
                          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{p.year}</span>
                        </div>

                        <div>
                          <h3 style={{
                            fontWeight: 800,
                            fontSize: '1.6rem',
                            color: 'var(--text)',
                            marginBottom: 8,
                          }}>
                            {p.name}
                          </h3>
                          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{p.desc}</p>
                        </div>

                        {/* Metric Highlight Box */}
                        <div style={{
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          borderRadius: 16,
                          padding: '16px 20px',
                          display: 'inline-flex',
                          flexDirection: 'column',
                          alignSelf: 'flex-start',
                        }}>
                          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em' }}>Key Result</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: p.accent, marginTop: 2 }}>{p.stat}</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: p.accent, marginTop: 8 }}>
                          Read the complete case study <span>→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ) : (
              // ─── CASE STUDY DETAIL VIEW ───
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Navigation Back */}
                <Link
                  to="/work"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    marginBottom: 36,
                    transition: 'color 150ms ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  ← Back to all projects
                </Link>

                {/* Case Study Header */}
                <div style={{ marginBottom: 56 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: project.accent,
                      background: `${project.accent}14`,
                      border: `1px solid ${project.accent}24`,
                      padding: '4px 12px',
                      borderRadius: 99,
                      textTransform: 'uppercase',
                    }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>Year: {project.year}</span>
                  </div>

                  <h1 className="heading-2" style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}>
                    {project.name}
                  </h1>
                  <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', maxWidth: 640 }}>{project.desc}</p>
                </div>

                {/* Grid layout for Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 40,
                }} className="case-grid">
                  
                  {/* Left content - Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                    {/* Background & Challenge */}
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--text)' }}>The Background</h3>
                      <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: 20 }}>
                        {project.clientBg}
                      </p>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--text)' }}>The Challenge</h3>
                      <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {project.problem}
                      </p>
                    </div>

                    {/* Solutions */}
                    <div style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 32,
                    }}>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--text)' }}>The PalaSync Solution</h3>
                      <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {project.solution}
                      </p>
                    </div>

                    {/* Live project CTA */}
                    <div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ background: project.accent, display: 'inline-flex', padding: '14px 28px' }}
                      >
                        View Live Website ↗
                      </a>
                    </div>
                  </div>

                  {/* Right content - Sidebar with Tech & Testimonial */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                    
                    {/* Stat Highlight Box */}
                    <div style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 32,
                      textAlign: 'center',
                      boxShadow: `0 10px 30px -10px ${project.bgGlow}`,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em' }}>Validated Metric</div>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: project.accent,
                        margin: '12px 0 6px',
                        lineHeight: 1,
                      }}>
                        {project.stat}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>Verified post-launch analytics</div>
                    </div>

                    {/* Tech Stack Box */}
                    <div style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 32,
                    }}>
                      <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text)', letterSpacing: '0.05em', marginBottom: 16 }}>Technology Used</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              padding: '5px 12px',
                              borderRadius: 99,
                              color: 'var(--text-2)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client Quote Box */}
                    <div style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 32,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }}>
                      <div style={{ color: project.accent, fontSize: '2.4rem', fontFamily: 'Georgia, serif', lineHeight: 0.7 }}>“</div>
                      <p style={{ fontSize: '0.925rem', color: 'var(--text-2)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        {project.testimonial.q}
                      </p>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{project.testimonial.author}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)' }}>{project.testimonial.role}</div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <style>{`
        @media (min-width: 768px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .case-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
