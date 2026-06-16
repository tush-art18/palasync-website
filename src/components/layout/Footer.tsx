import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

const SERVICES = ['Web Design', 'Web Development', 'SaaS Products', 'Branding']
const COMPANY  = [
  { label: 'Our Work', href: '/work'    },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'About',    href: '/about'   },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
]

export default function Footer() {
  const { theme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{ padding: '60px 20px 40px' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
        }} className="footer-top">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Link to="/" aria-label="PalaSync home">
              <img
                src={theme === 'dark' ? '/main dark logo.png' : '/main light logo.png'}
                alt="PalaSync"
                style={{ height: 32, width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 260 }}>
              Premium custom websites, SaaS platforms, and brand identities for ambitious Indian businesses.
            </p>
            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['🇮🇳 India-based', '⚡ Reply in 4hrs'].map(b => (
                <span key={b} style={{
                  fontSize: 11, fontWeight: 600, color: 'var(--muted)',
                  border: '1px solid var(--border)', borderRadius: 99, padding: '3px 10px',
                }}>
                  {b}
                </span>
              ))}
            </div>
            {/* Availability */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--muted)' }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                flexShrink: 0,
              }} />
              Currently accepting new projects
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 18 }}>Services</div>
            {SERVICES.map(s => (
              <div key={s} style={{ marginBottom: 10 }}>
                <Link to="/services" style={{
                  fontSize: '0.875rem', color: 'var(--muted)',
                  transition: 'color 150ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {s}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 18 }}>Company</div>
            {COMPANY.map(l => (
              <div key={l.label} style={{ marginBottom: 10 }}>
                <Link to={l.href} style={{
                  fontSize: '0.875rem', color: 'var(--muted)',
                  transition: 'color 150ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 18 }}>Get in touch</div>
            <a href="mailto:hello@palasync.com" style={{
              display: 'block', fontSize: '0.875rem', color: 'var(--muted)',
              marginBottom: 20, transition: 'color 150ms ease', textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--violet)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              hello@palasync.com
            </a>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}>
              Start a project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            © {year} PalaSync. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            Made with care in India 🇮🇳
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-top {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
        @media (min-width: 900px) {
          .footer-top {
            grid-template-columns: 2fr 1fr 1fr 1.4fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
