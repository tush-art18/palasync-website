import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found — PalaSync</title>
        <meta name="description" content="The page you are looking for does not exist. Return home to discover how we build custom sites." />
      </Helmet>

      <main style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        padding: '120px 20px 80px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Glow backdrop */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 450,
          height: 250,
          background: 'radial-gradient(circle, rgba(232,55,42,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(5rem, 15vw, 8rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            background: 'linear-gradient(135deg, var(--text), var(--red))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 16,
          }}>
            404
          </div>

          <h1 className="heading-2" style={{ marginBottom: 12, fontSize: '1.5rem' }}>
            Page Lost in Sync.
          </h1>

          <p style={{
            color: 'var(--muted)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: 36,
          }}>
            The layout URL you requested doesn't exist or was moved to another category. Let's guide you back to our custom codebase.
          </p>

          {/* Help navigation categories list */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            maxWidth: 320,
            margin: '0 auto 36px',
            textAlign: 'left'
          }}>
            {[
              { label: 'Go to Homepage', href: '/' },
              { label: 'View Case Studies', href: '/work' },
              { label: 'Read Helpful Guides', href: '/blog' },
              { label: 'Contact Developer Direct', href: '/contact' }
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--text-2)',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--violet)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                <span>{link.label}</span>
                <span>→</span>
              </Link>
            ))}
          </div>

          <Link to="/" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: 13 }}>
            Return to Homepage
          </Link>
        </div>
      </main>
    </>
  )
}
