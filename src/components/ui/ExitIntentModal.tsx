import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useExitIntent } from '../../hooks/useExitIntent'

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Trigger exit intent
  useExitIntent(() => {
    // Only show if not shown/submitted in the current session
    const hasSeen = sessionStorage.getItem('palasync-exit-seen')
    if (!hasSeen) {
      setIsOpen(true)
      sessionStorage.setItem('palasync-exit-seen', 'true')
    }
  })

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailOrPhone.trim()) return
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      // Clear value
      setEmailOrPhone('')
    }, 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 480,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: '40px 32px',
              boxShadow: '0 24px 64px -12px rgba(0,0,0,0.25)',
              zIndex: 1,
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'transparent',
                border: 'none',
                color: 'var(--muted)',
                fontSize: 20,
                cursor: 'pointer',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              ✕
            </button>

            {/* Content */}
            {!submitted ? (
              <>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--violet)',
                  background: 'var(--violet-mute)',
                  border: '1px solid rgba(107, 63, 255, 0.15)',
                  padding: '4px 10px',
                  borderRadius: 99,
                  marginBottom: 16,
                }}>
                  ⚡ Limited Offer
                </div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.25,
                  marginBottom: 12,
                  color: 'var(--text)',
                }}>
                  Wait! Is your website costing you customers?
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}>
                  Get a <strong style={{ color: 'var(--text)' }}>Free 30-Minute UX &amp; SEO Audit</strong> of your current website. We will find 3 major bottlenecks blocking your sales.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input
                    type="text"
                    required
                    placeholder="Email address or WhatsApp number"
                    value={emailOrPhone}
                    onChange={e => setEmailOrPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: 99,
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border-2)',
                      color: 'var(--text)',
                      fontSize: 14,
                      outline: 'none',
                      transition: 'all 200ms ease',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'var(--violet)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px var(--violet-mute)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'var(--border-2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '14px 24px', width: '100%' }}>
                    Claim My Free Audit
                  </button>
                </form>

                <div style={{
                  fontSize: 11,
                  color: 'var(--muted-2)',
                  textAlign: 'center',
                  marginTop: 16,
                }}>
                  No spam. We reply manually within 4 hours.
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '24px 0' }}
              >
                <div style={{
                  fontSize: 48,
                  marginBottom: 16,
                }}>
                  🎉
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.03em',
                  marginBottom: 8,
                }}>
                  Audit Claimed!
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                }}>
                  We will reach out on <strong style={{ color: 'var(--text)' }}>{emailOrPhone}</strong> within the next 4 hours to begin your analysis.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
