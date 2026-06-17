import { Link } from 'react-router-dom'

const SERVICES = [
  { label: 'Web Design',       href: '/services/web-design'      },
  { label: 'Web Development',  href: '/services/web-development'  },
  { label: 'SaaS Products',    href: '/services/saas-products'    },
  { label: 'Branding',         href: '/services/branding'         },
]

const COMPANY = [
  { label: 'Our Work', href: '/work'    },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'About',    href: '/about'   },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/pala.sync' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/palasync' },
  { label: 'X / Twitter', href: 'https://x.com/palasync' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-accent)',
        color: 'var(--text-accent)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />

      {/* Violet glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute', bottom: '-30%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,63,255,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, padding: '72px 20px 0' }}
      >
        {/* Giant typographic wordmark */}
        <div
          aria-hidden
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 12vw, 9rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.04)',
            marginBottom: 'clamp(48px, 8vw, 80px)',
            userSelect: 'none',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          PalaSync
        </div>

        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
            paddingBottom: 56,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Link to="/" aria-label="PalaSync home" style={{ display: 'inline-block' }}>
              <img
                src="/color variant.png"
                alt="PalaSync"
                style={{
                  height: 32,
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Link>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.75,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Premium custom websites, SaaS platforms, and brand identities for
              ambitious Indian businesses.
            </p>

            {/* Availability */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 12,
                color: '#22C55E',
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                  flexShrink: 0,
                }}
              />
              Accepting new projects
            </div>

            {/* CTA */}
            <div style={{ marginTop: 4 }}>
              <Link
                to="/contact"
                className="btn btn-acid"
                style={{ fontSize: 13, padding: '11px 24px', display: 'inline-flex' }}
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: 20,
                fontFamily: 'Syne, sans-serif',
              }}
            >
              Services
            </div>
            {SERVICES.map(s => (
              <div key={s.label} style={{ marginBottom: 12 }}>
                <Link
                  to={s.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-accent)',
                    transition: 'color 160ms ease',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-accent)')}
                >
                  {s.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: 20,
                fontFamily: 'Syne, sans-serif',
              }}
            >
              Company
            </div>
            {COMPANY.map(l => (
              <div key={l.label} style={{ marginBottom: 12 }}>
                <Link
                  to={l.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-accent)',
                    transition: 'color 160ms ease',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-accent)')}
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: 20,
                fontFamily: 'Syne, sans-serif',
              }}
            >
              Get in touch
            </div>
            <a
              href="mailto:palasync2@gmail.com"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 20,
                transition: 'color 160ms ease',
                textDecoration: 'none',
                fontWeight: 500,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F0FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              palasync2@gmail.com
            </a>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.35)',
                    transition: 'color 160ms ease',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--acid)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  <span style={{ fontSize: 9, opacity: 0.5 }}>↗</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            padding: '24px 0',
            /* PWA: iPhone home indicator safe area */
            paddingBottom: 'max(28px, calc(20px + env(safe-area-inset-bottom, 0px)))',
          }}
        >
          <span style={{ fontSize: 12, color: 'var(--subtext-accent)', fontWeight: 500 }}>
            © {year} PalaSync. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: 'var(--subtext-accent)', fontWeight: 500 }}>
            Made with care in India 🇮🇳
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr !important;
          }
        }
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.8fr 1fr 1fr 1.2fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
