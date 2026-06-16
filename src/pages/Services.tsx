import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// Core services data structure
const SERVICES_DATA = {
  'web-design': {
    title: 'Web Design',
    subtitle: 'Custom layouts engineered for maximum conversion. Zero generic templates.',
    price: '₹14,999',
    timeline: '1-2 Weeks',
    icon: '✦',
    accent: '#6B3FFF',
    glow: 'rgba(107, 63, 255, 0.15)',
    included: [
      'Custom Figma prototype tailored from research',
      'Typography hierarchy & premium color palette',
      'High-converting above-the-fold layout structure',
      'Responsive design optimized for mobile & tablet',
      'Custom SVG graphics, micro-animations & layout decorations',
      '2 rounds of detailed feedback & layout reviews'
    ],
    notIncluded: [
      'Copywriting & content creation (we review your copy)',
      'Frontend code implementation (offered in Web Dev)',
      'Complex animations or 3D scene files'
    ],
    examples: [
      { name: 'Brown Beans Coffee', desc: 'Premium Cafe UI Design' },
      { name: 'WoW Saplings', desc: 'EdTech Landing Layout' },
      { name: 'Unify Platform', desc: 'SaaS App Mockup Layout' }
    ],
    faqs: [
      { q: 'What deliverables do I get?', a: 'You receive a complete, developer-ready Figma file containing all pages, mobile layouts, UI kit, and graphic assets.' },
      { q: 'Can you write the copy for me?', a: 'We structure the layouts for optimal readability and conversion, providing content prompts. You provide the raw text, and we edit it for alignment.' },
      { q: 'What if I need updates later?', a: 'We provide 14 days of post-handoff support for adjustments. Extended maintenance agreements are also available.' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Clean, type-safe code using modern frameworks. Fast, robust, and search-optimized.',
    price: '₹24,999',
    timeline: '2-3 Weeks',
    icon: '⚡',
    accent: '#8B65FF',
    glow: 'rgba(139, 101, 255, 0.15)',
    included: [
      'React + TypeScript + Vite project structure',
      'Tailwind CSS v4 utilities and custom styling layers',
      '98+ Lighthouse speed & technical SEO scores',
      'Fully responsive implementation for all screen sizes',
      'Custom animations using Framer Motion',
      'Vercel or Netlify hosting integration & launch support'
    ],
    notIncluded: [
      'Design phase (Figma file must be provided)',
      'Database integration or complex backends',
      'Ongoing SEO content marketing setup'
    ],
    examples: [
      { name: 'WoW Saplings', desc: 'High-performance React SPA' },
      { name: 'Client Portal Pro', desc: 'Vite Frontend Dashboard' },
      { name: 'PalaSync Studio', desc: 'Our own portfolio site' }
    ],
    faqs: [
      { q: 'Which framework do you use?', a: 'We build standard websites using React + TypeScript + Vite. It is fast, easy to host, and scale.' },
      { q: 'Will the website be editable?', a: 'We can integrate a headless CMS like Sanity.io or Contentful, allowing you to update text and blog posts without coding.' },
      { q: 'Is hosting included?', a: 'We set up your hosting on Vercel or Netlify for free. You only pay for your custom domain name.' }
    ]
  },
  'saas-products': {
    title: 'SaaS Products',
    subtitle: 'Full-stack application development. From database architecture to custom client portals.',
    price: '₹59,999',
    timeline: '4-6 Weeks',
    icon: '◆',
    accent: '#22C55E',
    glow: 'rgba(34, 197, 94, 0.15)',
    included: [
      'Interactive dashboards, charts & data visualizations',
      'User authentication (OAuth, magic links, email auth)',
      'Database integration (PostgreSQL, Supabase, MongoDB)',
      'Stripe or Razorpay payment subscription gateway',
      'Role-based permissions & secure API structure',
      'Full documentation and code handoff'
    ],
    notIncluded: [
      'Marketing website creation (unless combined in custom package)',
      'Marketing strategy or customer acquisition setup',
      'Covering direct database or API subscription costs'
    ],
    examples: [
      { name: 'WoW Saplings Admin Portal', desc: 'Interactive teacher-training suite' },
      { name: 'Client Portal Pro', desc: 'Secure B2B client collaboration space' },
      { name: 'SyncAnalytics', desc: 'Real-time telemetry tool' }
    ],
    faqs: [
      { q: 'How secure is the platform?', a: 'We implement industry standards including JWT, encrypted database connections, and secure third-party auth engines like Supabase or Clerk.' },
      { q: 'Can we self-host?', a: 'Yes. We provide complete code ownership, allowing you to deploy to AWS, Vercel, or any server setup.' },
      { q: 'Do you offer updates?', a: 'We provide 30 days of free bug-fix warranty and offer ongoing retainer options for active feature development.' }
    ]
  },
  'branding': {
    title: 'Branding & Identity',
    subtitle: 'Cohesive visuals and guidelines to make your brand recognizable globally.',
    price: '₹9,999',
    timeline: '1 Week',
    icon: '❋',
    accent: '#E8372A',
    glow: 'rgba(232, 55, 42, 0.15)',
    included: [
      'Custom Logo design (Primary, Secondary, Monogram)',
      'Handpicked brand typography pairings',
      'Premium CSS-ready color palette rules',
      'Brand stylebook PDF summarizing colors, fonts, usage',
      'Social media graphics starter kit (banner, profile assets)',
      'Vector output files (.SVG, .AI, .PNG, .PDF)'
    ],
    notIncluded: [
      'Trademark filing or legal services',
      'Physical printing of stationery',
      'Packaging design templates (available as custom add-on)'
    ],
    examples: [
      { name: 'Brown Beans Coffee', desc: 'Identity & package assets' },
      { name: 'PalaSync Website', desc: 'Creative logo & palette assets' },
      { name: 'WoW Saplings', desc: 'Submark & child logo branding' }
    ],
    faqs: [
      { q: 'How many concepts do I get?', a: 'We present 3 unique creative directions. Once one is selected, we iterate to perfection.' },
      { q: 'Who owns the final logos?', a: 'You have 100% intellectual property ownership. We supply all production vectors.' },
      { q: 'Can you design business cards?', a: 'Yes. Standard templates for business cards and stationery are included in the brand stylebook deliverables.' }
    ]
  }
}

type ServiceKey = keyof typeof SERVICES_DATA

export default function Services() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()
  
  // Set current service based on URL slug or fall back to 'web-design'
  const activeKey: ServiceKey = (slug && SERVICES_DATA[slug as ServiceKey]) ? (slug as ServiceKey) : 'web-design'
  const service = SERVICES_DATA[activeKey]

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  // Redirect if visiting general /services to default 'web-design' to keep a premium detailed view visible,
  // or we can render a beautiful index selection. Let's make it so they can easily toggle services inside the page.
  const handleSelectService = (key: ServiceKey) => {
    navigate(`/services/${key}`)
    setActiveFaq(null)
  }

  return (
    <>
      <Helmet>
        <title>{`${service.title} — Premium Custom Services | PalaSync`}</title>
        <meta name="description" content={`${service.subtitle} Transparent pricing starting at ${service.price}.`} />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 100, paddingBottom: 80, minHeight: '100vh' }}>
        {/* Background Grid Pattern */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.25,
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black, transparent 75%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient Glowing Orb */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 350,
          background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 640, margin: '0 auto 48px' }}>
            <div className="label" style={{ marginBottom: 16 }}>Our Expertise</div>
            <h1 className="heading-2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              lineHeight: 1.1,
              marginBottom: 16,
              background: `linear-gradient(to right, var(--text), ${service.accent})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Services Tailored to Convert
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              We build custom websites, portals, and branding assets to give your company a strong competitive identity.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="services-tabs">
            {(Object.keys(SERVICES_DATA) as ServiceKey[]).map((key) => {
              const item = SERVICES_DATA[key]
              const isSelected = activeKey === key
              return (
                <button
                  key={key}
                  onClick={() => handleSelectService(key)}
                  className={`services-tab-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    '--accent-color': service.accent,
                  } as React.CSSProperties}
                >
                  <span className="tab-icon">{item.icon}</span>
                  {item.title}
                </button>
              )
            })}
          </div>

          {/* Service Detailed Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 40,
              }}
              className="service-grid"
            >
              {/* Left Column - Core Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div className="service-details-card" style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 24,
                  boxShadow: `0 10px 30px -10px ${service.glow}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <span className="service-title-icon" style={{
                        fontSize: 28,
                        color: service.accent,
                        background: `${service.accent}12`,
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {service.icon}
                      </span>
                      <h2 className="service-title-text" style={{ fontSize: '1.6rem', color: 'var(--text)' }}>{service.title}</h2>
                    </div>
                    <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.6 }}>{service.subtitle}</p>
                  </div>

                  {/* Metadata values */}
                  <div className="service-meta-grid" style={{
                    padding: '20px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em' }}>Starting Price</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text)', fontFamily: 'Syne, sans-serif', marginTop: 4 }}>{service.price}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em' }}>Average Timeline</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text)', fontFamily: 'Syne, sans-serif', marginTop: 4 }}>{service.timeline}</div>
                    </div>
                  </div>

                  {/* Checklist Columns */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="checklist-cols">
                    {/* Included */}
                    <div>
                      <h4 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--text)', letterSpacing: '0.05em', marginBottom: 12 }}>What's Included</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {service.included.map((item, index) => (
                          <li key={index} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.4 }}>
                            <span style={{ color: '#22C55E', fontWeight: 'bold' }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    <div>
                      <h4 style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: 12 }}>What's NOT Included</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {service.notIncluded.map((item, index) => (
                          <li key={index} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                            <span style={{ color: '#E8372A', fontWeight: 'bold' }}>✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: 12 }}>
                    <Link
                      to={`/contact?service=${activeKey}`}
                      className="btn btn-primary"
                      style={{ background: service.accent, width: '100%', padding: '16px 28px' }}
                    >
                      Book a project scope discussion
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Work examples & FAQs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {/* Visual Project Examples Section */}
                <div className="showcase-card" style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 24,
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 20 }}>Example Showcase</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {service.examples.map((ex, index) => (
                      <div
                        key={index}
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 16,
                          padding: '18px 24px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 200ms ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = service.accent
                          e.currentTarget.style.transform = 'translateX(4px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border)'
                          e.currentTarget.style.transform = 'none'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{ex.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2 }}>{ex.desc}</div>
                        </div>
                        <span style={{ color: service.accent, fontSize: 18 }}>→</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <Link to="/work" style={{ fontSize: 13, fontWeight: 700, color: service.accent, textDecoration: 'none' }}>
                      View our full case studies portfolio ↗
                    </Link>
                  </div>
                </div>

                {/* FAQ Accordions */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 20, paddingLeft: 8 }}>Service FAQ</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {service.faqs.map((faq, index) => {
                      const isOpened = activeFaq === index
                      return (
                        <div
                          key={index}
                          style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: 16,
                            overflow: 'hidden',
                            transition: 'border-color 200ms ease',
                          }}
                        >
                          <button
                            onClick={() => setActiveFaq(isOpened ? null : index)}
                            className="faq-btn"
                            style={{
                              width: '100%',
                              background: 'transparent',
                              border: 'none',
                              textAlign: 'left',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              color: 'var(--text)',
                            }}
                          >
                            <span>{faq.q}</span>
                            <span style={{
                              color: service.accent,
                              transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 200ms ease',
                            }}>
                              ▼
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpened && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="faq-content" style={{
                                  fontSize: '0.875rem',
                                  color: 'var(--muted)',
                                  lineHeight: 1.6,
                                }}>
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Styled Breakpoints */}
      <style>{`
        .services-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 56px;
          background: var(--surface-2);
          padding: 6px;
          border-radius: 99px;
          max-width: 620px;
          margin: 0 auto 56px;
          border: 1px solid var(--border);
        }
        .services-tab-btn {
          padding: 10px 22px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          background: transparent;
          color: var(--muted);
          border: none;
          transition: all 220ms ease;
          font-family: Syne, sans-serif;
          display: inline-flex;
          align-items: center;
        }
        .services-tab-btn:hover {
          color: var(--text);
        }
        .services-tab-btn.active {
          background: var(--accent-color);
          color: #ffffff;
        }
        .tab-icon {
          margin-right: 6px;
        }
        .service-details-card {
          padding: 40px;
        }
        .showcase-card {
          padding: 32px;
        }
        .faq-btn {
          padding: 18px 24px;
        }
        .faq-content {
          padding: 0 24px 20px 24px;
        }
        .service-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 900px) {
          .services-tabs {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .service-details-card {
            padding: 32px 24px;
          }
          .showcase-card {
            padding: 24px 20px;
          }
          .faq-btn {
            padding: 16px 20px;
          }
          .faq-content {
            padding: 0 20px 16px 20px;
          }
        }

        @media (max-width: 600px) {
          .services-tabs {
            border-radius: 16px;
            padding: 8px;
            width: 100%;
            margin-bottom: 32px;
          }
          .services-tab-btn {
            flex: 1 1 calc(50% - 6px);
            justify-content: center;
            padding: 8px 12px;
            font-size: 12px;
          }
          .service-meta-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .services-tabs {
            flex-direction: column;
            gap: 4px;
            border-radius: 14px;
          }
          .services-tab-btn {
            width: 100%;
            padding: 10px;
          }
          .service-details-card {
            padding: 24px 16px;
            border-radius: 18px !important;
          }
          .showcase-card {
            padding: 20px 16px;
            border-radius: 18px !important;
          }
          .service-title-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 20px !important;
            border-radius: 10px !important;
          }
          .service-title-text {
            font-size: 1.3rem !important;
          }
        }

        @media (min-width: 800px) {
          .service-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (min-width: 640px) {
          .checklist-cols {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
