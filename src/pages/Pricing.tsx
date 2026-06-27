import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const PLANS = [
  {
    name: 'Starter',
    price: '₹7,999',
    desc: 'Perfect for local businesses, portfolios, and landing pages needing a high-end online presence.',
    features: [
      'Single-page layout / Landing Page',
      '100% custom design (No template)',
      'Fully responsive (Mobile first)',
      'Basic SEO configuration',
      'WhatsApp & Email contact form',
      'Free secure Vercel hosting setup',
      '14 days post-launch support'
    ],
    notIncluded: [
      'Headless CMS integration',
      'Subpage/Blog engine creation',
      'Payment gateway setup'
    ],
    popular: false,
    cta: 'Start Starter project',
    badge: 'Launch Fast'
  },
  {
    name: 'Growth',
    price: '₹19,999',
    desc: 'Our most popular plan. Ideal for growing brands and startups needing a blog or multi-page product showcase.',
    features: [
      'Up to 5 custom layout pages',
      'Headless CMS integration (Sanity/Contentful)',
      '4 foundational blog articles integrated',
      'Advanced technical SEO schema markup',
      'Fast performance (98+ Lighthouse target)',
      'WhatsApp chat widget & scheduling integrations',
      '30 days post-launch support'
    ],
    notIncluded: [
      'Complex custom client dashboard database logic',
      'Direct e-commerce credit-card system integrations'
    ],
    popular: true,
    cta: 'Start Growth project',
    badge: 'Most Popular'
  },
  {
    name: 'Premium',
    price: '₹49,999+',
    desc: 'Designed for corporate brands, e-commerce, or SaaS products requiring custom dashboard logic.',
    features: [
      'Unlimited subpages and CMS layouts',
      'E-commerce setup or payment subscription engine',
      'Custom React database logic (Supabase/Firebase)',
      'User login authentication system',
      'Interactive tables, charts, or custom web portals',
      'Premium custom micro-animations & custom cursor',
      '60 days post-launch support & weekly iterations'
    ],
    notIncluded: [
      'Paying direct third-party server/database costs'
    ],
    popular: false,
    cta: 'Discuss Enterprise needs',
    badge: 'Custom Scope'
  }
]

const FAQS = [
  {
    q: 'Why is custom development so much more expensive than a basic WordPress template?',
    a: 'WordPress templates are built with generic, bloated code to fit everyone. This makes them slow, hard to optimize, and vulnerable to security updates. Custom React sites load in under a second, score 98+ on Lighthouse, and are designed specifically to guide your users to contact you. A fast custom site generates more conversions and pays for itself.'
  },
  {
    q: 'How long does it take to build a website from scratch?',
    a: 'Typical timelines are 1-2 weeks for Starter packages, 2-3 weeks for Growth packages, and 4-6 weeks for Premium database applications. We agree on clear delivery deadlines in our initial project scope document.'
  },
  {
    q: 'Are there any hidden recurring fees?',
    a: 'None. You own 100% of the code. We host your site on free-tier Vercel/Netlify hosting, meaning your ongoing server cost is ₹0. Your only recurring fee will be for your domain name (approx. ₹800/year) and any third-party APIs you choose to use.'
  },
  {
    q: 'Do you provide hosting and custom domain names?',
    a: 'We configure and deploy your website to production hosting using Vercel. We will help you link your domain name (e.g. from GoDaddy or Namecheap) to your new site. You buy the domain directly so you maintain complete ownership.'
  },
  {
    q: 'Can I update the content on my website myself later?',
    a: 'Yes. In our Growth and Premium tiers, we integrate a visual headless CMS (like Sanity.io). You can log in and update blog posts, case studies, or page text as easily as typing an email, without touching any code.'
  },
  {
    q: 'How will my website look on mobile devices?',
    a: 'Mobile traffic represents over 75% of Indian web usage. We design mobile layouts first. We test every breakpoint on simulated and real devices to ensure your buttons are easily tappable and margins look flawless.'
  },
  {
    q: 'Will my website rank on Google?',
    a: 'We build all sites with technical SEO best practices, including valid HTML5 semantics, self-referencing canonical links, robots.txt, XML sitemaps, and optimized schema markup (LocalBusiness, Breadcrumbs). Since site speed is a top ranking signal, our ultra-fast build gives you a massive advantage.'
  },
  {
    q: 'What kind of support do you offer after launching the site?',
    a: 'Every package includes free post-launch support (14 to 60 days depending on the tier) to fix any bugs or adjust text. After this, you can hire us on a flexible hourly basis or sign up for a monthly support retainer.'
  }
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Helmet>
        <title>Transparent Pricing Plans — PalaSync Website packages</title>
        <meta name="description" content="View transparent custom website pricing starting at ₹9,999. No hidden fees. Choose Starter, Growth, or Custom plans." />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
        {/* Background grid texture */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle at 50% 10%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 10%, black, transparent 80%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient glowing blob */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          width: 550,
          height: 350,
          background: 'radial-gradient(circle, rgba(139, 101, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 650, margin: '0 auto 56px' }}>
            {/* Spot Urgency banner */}
            <div className="urgency-banner-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="urgency-banner" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 99,
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--text-2)',
              }}>
                <span className="pulse" style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#E8372A',
                  display: 'inline-block',
                }} />
                Only 2 design spots remaining for June client work
              </div>
            </div>

            <h1 className="heading-2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              lineHeight: 1.1,
              marginBottom: 16,
              background: 'linear-gradient(to right, var(--text), var(--violet-soft))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Transparent, Value-First Pricing
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              No surprise estimates. Choose a tier aligned with your brand goals or book a call for a fully custom scope.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 32,
            marginBottom: 96,
            alignItems: 'stretch',
          }}>
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                style={{
                  position: 'relative',
                  background: plan.popular ? 'var(--surface)' : 'var(--surface-2)',
                  border: plan.popular ? '2px solid var(--violet)' : '1px solid var(--border)',
                  borderRadius: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  boxShadow: plan.popular ? '0 16px 48px -12px rgba(107, 63, 255, 0.16)' : 'none',
                  transition: 'all 200ms ease',
                }}
              >
                {/* Popular Badge */}
                <span style={{
                  position: 'absolute',
                  top: -12,
                  right: 28,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  background: plan.popular ? 'var(--violet)' : 'var(--muted)',
                  padding: '4px 12px',
                  borderRadius: 99,
                }}>
                  {plan.badge}
                </span>

                <div>
                  <h3 className="pricing-card-title" style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: 8 }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, minHeight: 45 }}>{plan.desc}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="pricing-card-price" style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--text)',
                    lineHeight: 1,
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>/ project</span>
                </div>

                <Link
                  to={`/contact?plan=${plan.name.toLowerCase()}`}
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                >
                  {plan.cta}
                </Link>

                <div style={{ height: 1, background: 'var(--border)' }} />

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flexGrow: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-2)', letterSpacing: '0.05em' }}>Deliverables</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {plan.features.map((feat) => (
                      <li key={feat} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.4 }}>
                        <span style={{ color: 'var(--violet)', fontWeight: 'bold' }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em', marginTop: 12 }}>Not Included</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {plan.notIncluded.map((feat) => (
                          <li key={feat} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                            <span style={{ color: '#E8372A', fontWeight: 'bold' }}>✕</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordions Section */}
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: 44 }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FAQS.map((faq, index) => {
                const isOpened = openFaq === index
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
                      onClick={() => setOpenFaq(isOpened ? null : index)}
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
                        fontSize: '0.975rem',
                        color: 'var(--text)',
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{
                        color: 'var(--violet)',
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
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                        >
                          <div className="faq-content" style={{
                            fontSize: '0.875rem',
                            color: 'var(--muted)',
                            lineHeight: 1.65,
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
      </main>

      <style>{`
        .pricing-card {
          padding: 36px 30px;
        }
        .pricing-card.popular {
          padding: 44px 32px;
          transform: scale(1.01);
        }
        .faq-btn {
          padding: 20px 28px;
        }
        .faq-content {
          padding: 0 28px 20px 28px;
        }
        
        @media (min-width: 600px) and (max-width: 899px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pricing-card:last-child {
            grid-column: span 2;
          }
        }
        
        @media (max-width: 900px) {
          .pricing-card.popular {
            transform: none !important;
            padding: 36px 30px;
          }
        }
        
        @media (max-width: 600px) {
          .faq-btn {
            padding: 16px 20px !important;
            font-size: 0.9rem !important;
          }
          .faq-content {
            padding: 0 20px 16px 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .pricing-card {
            padding: 24px 20px !important;
            border-radius: 20px !important;
          }
          .pricing-card.popular {
            padding: 28px 20px !important;
          }
          .pricing-card-title {
            font-size: 1.2rem !important;
          }
          .pricing-card-price {
            font-size: 2rem !important;
          }
          .urgency-banner {
            font-size: 11px !important;
            padding: 6px 12px !important;
            text-align: center;
            line-height: 1.3;
          }
        }
        
        @media (min-width: 900px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .pricing-card.popular {
            transform: translateY(-8px) scale(1.03) !important;
          }
          .pricing-card:hover {
            border-color: var(--violet-soft) !important;
            box-shadow: 0 20px 40px -15px rgba(107, 63, 255, 0.12);
          }
        }
      `}</style>
    </>
  )
}
