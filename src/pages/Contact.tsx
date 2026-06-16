import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    budget: '15k-30k',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call and redirect to Thank You page
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/thank-you')
    }, 1200)
  }

  return (
    <>
      <Helmet>
        <title>Let's Scope Your Project — Contact PalaSync</title>
        <meta name="description" content="Get a custom proposal for your next website or SaaS product. 4-hour reply promise during business days." />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
        {/* Background Grid Pattern */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.2,
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black, transparent 85%)',
          pointerEvents: 'none',
        }} />

        {/* Ambient Glowing Blobs */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: 500,
          height: 400,
          background: 'radial-gradient(circle, rgba(107, 63, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }} className="contact-grid">
            
            {/* Left Column - Details & Booking */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <div className="label" style={{ marginBottom: 16 }}>Get in Touch</div>
                <h1 className="heading-2" style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}>
                  Let's Sync Up.
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '0.975rem', lineHeight: 1.6, maxWidth: 460 }}>
                  We don't do pushy sales pitches. We analyze your requirements and tell you honestly what it takes to build.
                </p>
              </div>

              {/* Trust Metrics Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* 4-Hour Promise */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontSize: 24 }}>⚡</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>Response Guarantee</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 2 }}>We reply to form submissions within 4 hours during business days.</p>
                  </div>
                </div>

                {/* SSL Secure */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontSize: 24 }}>🛡️</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>SSL Encrypted &amp; Safe</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 2 }}>Your business ideas and contact information remain strictly confidential.</p>
                  </div>
                </div>

                {/* Email Direct */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontSize: 24 }}>📧</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>Email Directly</h4>
                    <a href="mailto:hello@palasync.com" style={{ fontSize: '0.85rem', color: 'var(--violet)', fontWeight: 600, display: 'inline-block', marginTop: 2 }}>
                      hello@palasync.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Calendly placeholder / Scheduling invite */}
              <div style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 28,
                marginTop: 12,
              }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 8, color: 'var(--text)' }}>Prefer a scheduled discussion?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: 18 }}>
                  Book a free 15-minute scopes overview session on our calendar to discuss layouts directly.
                </p>
                <a
                  href="https://calendly.com/palasync"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: 13, padding: '11px 20px' }}
                >
                  Book Free Discovery Call ↗
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 24,
                padding: '40px clamp(20px, 5vw, 36px)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.02)',
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 24, color: 'var(--text)' }}>Send us a Brief</h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  
                  {/* Field 1: Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="name" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Vikram R."
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 2: Business name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="business" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>Business Name / Type *</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      placeholder="e.g. Cafe Roastery / Edtech Startup"
                      value={formData.business}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 3: Budget Range */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="budget" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={selectStyle}
                    >
                      <option value="under-15k">Under ₹15,000</option>
                      <option value="15k-30k">₹15,000 - ₹30,000</option>
                      <option value="30k-50k">₹30,000 - ₹50,000</option>
                      <option value="50k-plus">₹50,000+</option>
                    </select>
                  </div>

                  {/* Field 4: Phone / WhatsApp */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="phone" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  {/* Field 5: Message */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="message" style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>Project Scope Brief *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us briefly about what you want to build and your targets..."
                      value={formData.message}
                      onChange={handleChange}
                      style={textareaStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '16px 28px', marginTop: 8 }}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <style>{`
        @media (min-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </>
  )
}

// Inline input styles
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 18px',
  borderRadius: 12,
  background: 'var(--surface-2)',
  border: '1px solid var(--border-2)',
  color: 'var(--text)',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'inherit',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%237070A0\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  backgroundSize: '18px',
  cursor: 'pointer',
}

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  borderRadius: 16,
  resize: 'vertical',
  lineHeight: 1.5,
}
