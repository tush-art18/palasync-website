import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You for Contacting Us | PalaSync</title>
        <meta name="description" content="Inquiry received. We are reviewing your website project details and will reply in 4 hours." />
      </Helmet>

      <main style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '100px 20px 60px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Glowing backdrop */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 300,
          background: 'radial-gradient(circle, rgba(107,63,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 580 }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
          
          <h1 className="heading-2" style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Inquiry Received!
          </h1>
          
          <p style={{
            color: 'var(--muted)',
            fontSize: '0.975rem',
            lineHeight: 1.6,
            marginBottom: 36,
          }}>
            Thank you for reaching out to PalaSync. I have personally received your project details and am analyzing your business category. You can expect a WhatsApp message or email reply within the next <strong style={{ color: 'var(--text)' }}>4 hours</strong>.
          </p>

          {/* Timeline roadmap of what happens next */}
          <div style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: 28,
            marginBottom: 40,
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: 16, color: 'var(--text)' }}>What Happens Next?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { step: '1', title: 'Scope Analysis', desc: 'We review your business type and reference competitive layouts.' },
                { step: '2', title: 'Direct Sync', desc: 'We message you to clarify any questions regarding the budget.' },
                { step: '3', title: 'Figma Proposal', desc: 'We deliver a structured project proposal detailing delivery milestones.' }
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <span style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'var(--violet-mute)',
                    border: '1px solid rgba(107, 63, 255, 0.2)',
                    color: 'var(--violet)',
                    fontSize: 11,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{item.title}</h4>
                    <p style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/work" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: 14 }}>
              Browse Our Work
            </Link>
            <Link to="/" className="btn btn-secondary" style={{ padding: '11px 24px', fontSize: 14 }}>
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
