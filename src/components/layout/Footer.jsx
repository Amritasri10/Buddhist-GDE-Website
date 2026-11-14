import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Share2 } from 'lucide-react'
import logo from '../../assets/Buddhist Global Digital Ecosystem Logo.png'

// Inline SVG social icons (lucide-react v1.x removed brand icons)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  ),
}

const FOOTER_LINKS = {
  'Buddhist Knowledge': [
    { label: 'About Buddhism', href: '/about-buddhism' },
    { label: 'Life of Buddha', href: '/buddha' },
    { label: 'Knowledge Hub', href: '/knowledge' },
    { label: 'Scriptures', href: '/scriptures' },
    { label: 'Traditions', href: '/traditions' },
    { label: 'Heritage', href: '/heritage' },
  ],
  'Services': [
    { label: 'Temples & Monasteries', href: '/temples' },
    { label: 'Find a Bhante', href: '/bhantes' },
    { label: 'Book a Ceremony', href: '/bookings' },
    { label: 'Courses', href: '/courses' },
    { label: 'Research', href: '/research' },
    { label: 'Media Library', href: '/media' },
  ],
  'Travel & Commerce': [
    { label: 'Travel & Pilgrimage', href: '/travel' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Buddhist Shop', href: '/shop' },
    { label: 'Events', href: '/events' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Restaurants', href: '/restaurants' },
  ],
  'Community': [
    { label: 'Community', href: '/community' },
    { label: 'Membership', href: '/membership' },
    { label: 'Donations', href: '/donations' },
    { label: 'Business Directory', href: '/businesses' },
    { label: 'Weddings', href: '/weddings' },
    { label: 'Investor Portal', href: '/about' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Newsletter */}
      <div className="bg-[#7B1C2E]">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Join Our Newsletter</h3>
              <p className="text-white/70 text-sm">Get updates on teachings, events, and news from the Buddhist world.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E8C55A] text-sm"
              />
              <button type="submit" className="bg-[#C9972A] hover:bg-[#B8861F] text-white px-5 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <img
                src={logo}
                alt="Buddhist Global Digital Ecosystem"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A unified digital platform connecting Buddhist institutions, monks, researchers, educators,
              businesses, and communities across the globe.
            </p>
            {/* Contact info */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#C9972A] mt-0.5 flex-shrink-0" />
                <span>contact@buddhistglobal.org</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C9972A] mt-0.5 flex-shrink-0" />
                <span>+1 (800) DHARMA-01</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9972A] mt-0.5 flex-shrink-0" />
                <span>Global Headquarters — Bodh Gaya, India</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[SocialIcons.Facebook, SocialIcons.Twitter, SocialIcons.Instagram, SocialIcons.Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9972A] transition-colors"
                  aria-label="Social media"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-[#C9972A] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <div>© 2026 Buddhist Global Digital Ecosystem. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-[#C9972A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C9972A] transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#C9972A] transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
