import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const POSTS = [
  {
    slug: 'website-cost-india-2025',
    title: 'How much does a website cost in India in 2025?',
    category: 'Guides',
    date: 'June 10, 2026',
    author: 'Palase',
    readTime: '6 min read',
    desc: 'An honest, transparent breakdown of design, domain, hosting, and agency costs for Indian businesses.',
    body: `
      <h2>The Truth About Web Design Pricing</h2>
      <p>If you ask five agencies in India what a website costs, you will get five wildly different answers ranging from ₹5,000 to ₹5,00,000. Why is the range so massive? Let's break down the actual costs transparently.</p>
      
      <h3>1. The Template Approach vs. Custom Coding</h3>
      <p>A low-cost website (usually under ₹10,000) is almost always built using a pre-made WordPress template. The agency downloads a theme, swaps your logo and contact details, and uploads it. The code is bloated, the design is generic, and you will share the exact layout with thousands of other businesses.</p>
      <p>A custom-coded site (built in React or custom HTML) is designed specifically for your brand identity and audience funnel. It has zero bloat, loads instantly, and is built to convert visitors into inquiries. Custom sites require real design and engineering hours, starting around ₹15,000 to ₹50,000.</p>
      
      <h3>2. Domain and Hosting Costs</h3>
      <ul>
        <li><strong>Domain name (.com or .in):</strong> ₹600 - ₹1,200 per year.</li>
        <li><strong>Basic hosting:</strong> Traditional hostings (Hostinger, Bluehost) cost ₹2,000 - ₹5,000/year. However, modern static React hosting on platforms like Vercel or Netlify is free, secure, and infinitely scalable.</li>
      </ul>

      <h3>3. Hidden Costs to Watch Out For</h3>
      <p>Many cheap agencies hook you with a low design fee but charge exorbitant annual maintenance costs, or lock you out of your domain ownership. Always ensure you have 100% intellectual property ownership of your domain and code files.</p>
    `
  },
  {
    slug: 'how-long-to-build-website',
    title: 'How long does it take to build a website?',
    category: 'Agency',
    date: 'June 12, 2026',
    author: 'Palase',
    readTime: '4 min read',
    desc: 'Timeline breakdown from kickoff call, Figma prototypes, development phase, to launch day.',
    body: `
      <h2>Website Timelines Demystified</h2>
      <p>One of the top anxieties clients have is: "when will my site actually go live?" Let's look at the standard timeline phases of building a high-quality website from scratch.</p>
      
      <h3>Phase 1: Discover &amp; Plan (3-5 Days)</h3>
      <p>Before designing a single card, we research your market positioning, your top 3 competitors, and target audience inquiries. We map out the sitemap structure and page flows.</p>
      
      <h3>Phase 2: UI Design &amp; Review (5-10 Days)</h3>
      <p>We build interactive prototypes in Figma, showing exactly how the site will look in both light and dark themes. We share these with you, gather feedback, and iterate until you approve the design.</p>
      
      <h3>Phase 3: React Development (7-14 Days)</h3>
      <p>We translate the approved designs into clean, type-safe React code. We configure all animations, verify mobile responsive layouts, and optimize speed to hit a 98+ Lighthouse score.</p>
      
      <h3>Phase 4: QA &amp; Launch (2-3 Days)</h3>
      <p>We test the forms, click targets, check redirects, configure domain names on Cloudflare, and submit sitemaps to Google Search Console.</p>
      
      <p><strong>Total timeline:</strong> A standard single-page landing site takes 7-10 days, a multi-page CMS website takes 2-3 weeks, and a complex custom application takes 4-6 weeks.</p>
    `
  },
  {
    slug: 'wordpress-vs-custom-website',
    title: 'WordPress vs Custom Website — which is right for your business?',
    category: 'Tech Stack',
    date: 'June 14, 2026',
    author: 'Palase',
    readTime: '5 min read',
    desc: 'A detailed comparison of security, loading speed, SEO advantages, and ongoing hosting fees.',
    body: `
      <h2>The Battle of CMS: WordPress vs Custom Code</h2>
      <p>WordPress powers over 40% of the internet, but is it the right choice for an ambitious, premium brand in 2026? Let's compare WordPress templates with custom React applications.</p>
      
      <h3>1. Site Speed and Performance</h3>
      <p>WordPress sites rely heavily on database queries and multiple overlapping plugins to render pages. This causes slow load times (often 3 to 5 seconds). Every second of delay drops conversion rates by 20%.</p>
      <p>Custom React sites are built as single-page applications. They load static HTML instantly (under 1 second), providing a smooth app-like feeling that leaves a premium impression.</p>
      
      <h3>2. Security &amp; Maintenance</h3>
      <p>WordPress is the most targeted platform by hackers globally. Plugins require regular updates that can break page layouts. React websites have no database dashboard vulnerability and require zero plugin updates, making them extremely secure.</p>
      
      <h3>3. Design Uniqueness</h3>
      <p>WordPress is constrained by template layouts. If you want a truly unique interface with premium hover effects, custom cursors, or tailored layouts, coding it from scratch in React is the only way to achieve it without performance penalties.</p>
    `
  },
  {
    slug: '5-signs-website-losing-customers',
    title: '5 signs your business website is costing you customers',
    category: 'Conversion',
    date: 'June 15, 2026',
    author: 'Palase',
    readTime: '5 min read',
    desc: 'Audit your own site: checkout speed, layout confusion, mobile targets, and lack of trust elements.',
    body: `
      <h2>Is Your Site Costing You Sales?</h2>
      <p>Many business owners believe that simply having a website is enough. However, a poorly built site can actively drive customers away to your competitors. Here are 5 warnings signs that your site is losing you sales.</p>
      
      <h3>1. It Takes More Than 3 Seconds to Load</h3>
      <p>If your website takes more than 3 seconds to load on a standard 4G connection, 53% of mobile visitors will leave before it even loads. Check your site speed on PageSpeed Insights.</p>
      
      <h3>2. There is No Direct WhatsApp or Phone CTA</h3>
      <p>In India, over 70% of business-to-business conversations start on WhatsApp. If a visitor has to copy your email, open their email app, and type a query, they will give up. A floating WhatsApp widget is essential.</p>
      
      <h3>3. Jargon-Heavy, Confusing Copy</h3>
      <p>If a visitor arrives on your homepage and cannot understand what you do, who it is for, and how to buy within 3 seconds, they will leave. Keep headlines simple and focused on client benefits.</p>
      
      <h3>4. It Looks Broken on Mobile Devices</h3>
      <p>Over 75% of web traffic is mobile. If your menus overlap, text is too small, or your buttons are too close together to tap comfortably, mobile users will abandon your funnel.</p>

      <h3>5. Zero Visible Trust Signals</h3>
      <p>Anonymous reviews, lack of client logos, or missing SSL safety indicators make your site look unprofessional. Show real reviews and founder faces to build trust instantly.</p>
    `
  }
]

type Post = typeof POSTS[number]

export default function Blog() {
  const { slug } = useParams<{ slug?: string }>()
  
  // Match single post
  const post: Post | undefined = slug ? POSTS.find(p => p.slug === slug) : undefined

  return (
    <>
      <Helmet>
        <title>
          {post
            ? `${post.title} | PalaSync Blog`
            : 'Blog &amp; Resources — Growth Insights | PalaSync'}
        </title>
        <meta
          name="description"
          content={post
            ? post.desc
            : 'Read the latest insights on custom web design, site speed optimization, SEO advice, and digital agency tips.'}
        />
      </Helmet>

      <main style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
        {/* Background Grid Pattern */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.18,
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black, transparent 80%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            {!post ? (
              // ─── BLOG INDEX VIEW ───
              <motion.div
                key="index"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px' }}>
                  <div className="label" style={{ marginBottom: 16 }}>Insights</div>
                  <h1 className="display" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                    lineHeight: 1.1,
                    marginBottom: 20,
                    background: 'linear-gradient(to right, var(--text) 50%, var(--violet-soft))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Grow Your Business Online.
                  </h1>
                  <p className="body-lg" style={{ color: 'var(--muted)' }}>
                    Articles designed to explain technical options, web costs, and conversion tactics without corporate jargon.
                  </p>
                </div>

                {/* Article Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 32,
                }} className="blog-grid">
                  {POSTS.map((p) => (
                    <Link
                      to={`/blog/${p.slug}`}
                      key={p.slug}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 20,
                          padding: 32,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 16,
                          transition: 'all 200ms ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'var(--violet)'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border)'
                          e.currentTarget.style.transform = 'none'
                        }}
                      >
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 12, color: 'var(--muted)' }}>
                          <span style={{
                            fontWeight: 700,
                            color: 'var(--violet)',
                            background: 'var(--violet-mute)',
                            padding: '3px 10px',
                            borderRadius: 99,
                            textTransform: 'uppercase',
                          }}>
                            {p.category}
                          </span>
                          <span>{p.date}</span>
                          <span>·</span>
                          <span>{p.readTime}</span>
                        </div>

                        <h3 style={{
                          fontSize: '1.35rem',
                          lineHeight: 1.25,
                          color: 'var(--text)',
                        }}>
                          {p.title}
                        </h3>

                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                        
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--violet)', marginTop: 8 }}>
                          Read article <span>→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ) : (
              // ─── BLOG POST DETAIL VIEW ───
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Link */}
                <Link
                  to="/blog"
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
                  ← Back to all articles
                </Link>

                {/* Article Header */}
                <div style={{ marginBottom: 40, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>
                    <span style={{
                      fontWeight: 700,
                      color: 'var(--violet)',
                      background: 'var(--violet-mute)',
                      padding: '3px 10px',
                      borderRadius: 99,
                      textTransform: 'uppercase',
                    }}>
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h1 style={{
                    fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
                    lineHeight: 1.2,
                    marginBottom: 16,
                    color: 'var(--text)',
                  }}>
                    {post.title}
                  </h1>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'var(--violet)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700,
                    }}>
                      {post.author[0]}
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 600 }}>By {post.author}</span>
                  </div>
                </div>

                {/* Article Grid - Layout split */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 40,
                }} className="article-layout">
                  {/* Left Column - Article content */}
                  <article
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  />

                  {/* Right Column - Sidebar Newsletter CTA */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                    <div style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 28,
                    }}>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--text)' }}>Need a high-performance site?</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: 20 }}>
                        We design custom React applications with 98+ Lighthouse scores starting from ₹9,999.
                      </p>
                      <Link to="/contact" className="btn btn-primary" style={{ width: '100%', padding: '12px 20px', fontSize: 13 }}>
                        Let's scope your project
                      </Link>
                    </div>

                    <div style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 28,
                      textAlign: 'center',
                    }}>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: 12 }}>Claim a Free Website Audit</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: 16 }}>
                        We will analyze your current site and outline 3 key ways to increase your conversion rate.
                      </p>
                      <Link to="/contact?audit=true" style={{ fontSize: 12, fontWeight: 700, color: 'var(--violet)', textDecoration: 'none' }}>
                        Request audit analysis ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Styled article tags */}
      <style>{`
        .article-content h2 {
          font-size: 1.6rem;
          margin-top: 32px;
          margin-bottom: 16px;
          color: var(--text);
        }
        .article-content h3 {
          font-size: 1.25rem;
          margin-top: 24px;
          margin-bottom: 12px;
          color: var(--text);
        }
        .article-content p {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-2);
          margin-bottom: 18px;
        }
        .article-content ul {
          margin-left: 20px;
          margin-bottom: 18px;
        }
        .article-content li {
          font-size: 0.95rem;
          color: var(--text-2);
          margin-bottom: 8px;
          line-height: 1.6;
        }
        @media (min-width: 900px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .article-layout {
            grid-template-columns: 1.6fr 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
