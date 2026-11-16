import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Menu, X, Search, Globe, ChevronDown, ShoppingCart,
  LogIn, BookOpen, MapPin, Compass, GraduationCap, Users,
  Heart, Bell, Phone, Mail, User
} from 'lucide-react'
import logo from '../../assets/Buddhist Global Digital Ecosystem Logo.png'

// Brand icons (lucide-react v1 removed these)
const FbIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const TwIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
const IgIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const YtIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>

const SOCIAL_ICONS = [FbIcon, TwIcon, IgIcon, YtIcon]

const NAV_ITEMS = [
  {
    label: 'Knowledge',
    icon: BookOpen,
    children: [
      { label: 'About Buddhism',   href: '/about-buddhism' },
      { label: 'Life of Buddha',   href: '/buddha' },
      { label: 'Knowledge Hub',    href: '/knowledge' },
      { label: 'Scriptures',       href: '/scriptures' },
      { label: 'Traditions',       href: '/traditions' },
      { label: 'Heritage',         href: '/heritage' },
      { label: 'Festivals',        href: '/festivals' },
    ],
  },
  {
    label: 'Temples & Monks',
    icon: MapPin,
    children: [
      { label: 'Temples & Monasteries', href: '/temples' },
      { label: 'Find a Bhante',         href: '/bhantes' },
      { label: 'Rituals & Ceremonies',  href: '/rituals' },
      { label: 'Book a Ceremony',       href: '/bookings' },
    ],
  },
  {
    label: 'Education',
    icon: GraduationCap,
    children: [
      { label: 'Buddhist Education', href: '/education' },
      { label: 'Courses',            href: '/courses' },
      { label: 'Research Portal',    href: '/research' },
      { label: 'Publications',       href: '/research/publications' },
    ],
  },
  {
    label: 'Services',
    icon: Compass,
    children: [
      { label: 'Shop',              href: '/shop' },
      { label: 'Media Library',     href: '/media' },
      { label: 'Travel & Pilgrimage', href: '/travel' },
      { label: 'Hotels',            href: '/hotels' },
      { label: 'Healthcare',        href: '/healthcare' },
      { label: 'Restaurants',       href: '/restaurants' },
      { label: 'Events',            href: '/events' },
      { label: 'Weddings',          href: '/weddings' },
    ],
  },
  {
    label: 'Community',
    icon: Users,
    children: [
      { label: 'Community',         href: '/community' },
      { label: 'Business Directory', href: '/businesses' },
      { label: 'Donations',         href: '/donations' },
      { label: 'Membership',        href: '/membership' },
    ],
  },
]

const LANGUAGES  = ['English', 'हिंदी', 'Pāli', 'संस्कृत', '中文', 'ภาษาไทย', '日本語', 'नेपाली']
const CURRENCIES = ['USD', 'INR', 'NPR', 'THB', 'LKR', 'JPY', 'CNY', 'EUR', 'GBP']

const ANNOUNCEMENTS = [
  '🌸 Vesak Day 2027 — Global Celebrations Announced! Register Now',
  '📚 New Courses Added: Pali Language & Tibetan Philosophy — Enroll Free',
  '🛕 10,000+ Temples Now Listed — Find Sacred Sites Near You',
  '🙏 Join 1M+ Buddhists Worldwide — Create Your Free Account Today',
]

export default function Header() {
  const [mobileOpen,      setMobileOpen]      = useState(false)
  const [searchOpen,      setSearchOpen]      = useState(false)
  const [searchQuery,     setSearchQuery]     = useState('')
  const [openDropdown,    setOpenDropdown]    = useState(null)
  const [langOpen,        setLangOpen]        = useState(false)
  const [currencyOpen,    setCurrencyOpen]    = useState(false)
  const [selectedLang,    setSelectedLang]    = useState('English')
  const [selectedCurrency,setSelectedCurrency]= useState('USD')
  const [scrolled,        setScrolled]        = useState(false)
  const [mounted,         setMounted]         = useState(false)
  const [announcementIdx, setAnnouncementIdx] = useState(0)
  const [announceFade,    setAnnounceFade]    = useState(true)

  // Auth state — replace with real token check when backend is ready
  const isLoggedIn = false

  const navigate  = useNavigate()
  const location  = useLocation()
  const headerRef = useRef(null)

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null); setLangOpen(false); setCurrencyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Rotating announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnounceFade(false)
      setTimeout(() => {
        setAnnouncementIdx((i) => (i + 1) % ANNOUNCEMENTS.length)
        setAnnounceFade(true)
      }, 300)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/knowledge?q=${encodeURIComponent(searchQuery)}`)
      setSearchOpen(false); setSearchQuery('')
    }
  }

  const isActive = (children) => children.some((c) => location.pathname === c.href)

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .anim-slide-down { animation: slideDown 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .anim-fade-down  { animation: fadeDown  0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .anim-fade-up    { animation: fadeUp    0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .anim-fade-in    { animation: fadeIn    0.3s ease both; }
        .nav-delay-1 { animation-delay: 0.05s; }
        .nav-delay-2 { animation-delay: 0.10s; }
        .nav-delay-3 { animation-delay: 0.15s; }
        .nav-delay-4 { animation-delay: 0.20s; }
        .nav-delay-5 { animation-delay: 0.25s; }
        .announce-fade { transition: opacity 0.3s ease; }
      `}</style>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300
          ${scrolled ? 'shadow-lg' : ''}
          ${mounted ? 'anim-slide-down' : 'opacity-0'}
        `}
      >
        {/* ── TOP BAR ─────────────────────────────────────── */}
        <div
          className={`bg-[#5A1020] text-white text-xs hidden md:block ${mounted ? 'anim-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="container-custom flex items-center justify-between gap-4 py-2">

            {/* Left: phone + email */}
            <div className="flex items-center gap-5 text-white/70 flex-shrink-0">
              <a href="tel:+18008" className="flex items-center gap-1.5 hover:text-[#E8C55A] transition-colors">
                <Phone size={11} />
                <span>+1 (800) DHARMA-01</span>
              </a>
              <a href="mailto:contact@buddhistglobal.org" className="flex items-center gap-1.5 hover:text-[#E8C55A] transition-colors">
                <Mail size={11} />
                <span>contact@buddhistglobal.org</span>
              </a>
            </div>

            {/* Center: rotating announcement */}
            <div className="flex-1 text-center overflow-hidden px-4">
              <span
                className={`announce-fade text-white/90 font-medium ${announceFade ? 'opacity-100' : 'opacity-0'}`}
              >
                {ANNOUNCEMENTS[announcementIdx]}
              </span>
            </div>

            {/* Right: social + links */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Social icons — MOVED TO NAVBAR */}
              {/* <div className="flex items-center gap-2 border-r border-white/20 pr-4">
                {SOCIAL_ICONS.map((Icon, i) => (
                  <a key={i} href="#"
                    className="text-white/60 hover:text-[#E8C55A] transition-colors"
                    aria-label="social"
                  >
                    <Icon />
                  </a>
                ))}
              </div> */}
              <Link to="/contact" className="hover:text-[#E8C55A] transition-colors text-white/70">Contact</Link>
              <Link to="/faq"     className="hover:text-[#E8C55A] transition-colors text-white/70">FAQ</Link>
              <Link to="/about"   className="hover:text-[#E8C55A] transition-colors text-white/70">About</Link>
            </div>
          </div>
        </div>

        {/* ── MAIN NAVBAR ─────────────────────────────────── */}
        <div className={`bg-white/97 backdrop-blur-md border-b border-[#E2D9C5] transition-all duration-300 ${scrolled ? 'bg-white' : ''}`}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link
                to="/"
                className={`flex items-center flex-shrink-0 ${mounted ? 'anim-fade-down' : 'opacity-0'}`}
                style={{ animationDelay: '0.15s' }}
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src={logo}
                  alt="Buddhist Global Digital Ecosystem"
                  className="h-12 w-auto object-contain mix-blend-multiply"
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {NAV_ITEMS.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`relative group ${mounted ? `anim-fade-down nav-delay-${idx + 1}` : 'opacity-0'}`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150
                      ${isActive(item.children)
                        ? 'text-[#C9972A] bg-[#FEF3C7]/60'
                        : 'text-[#2C2C2C] hover:text-[#C9972A] hover:bg-[#FEF3C7]/50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Active underline indicator */}
                    {isActive(item.children) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9972A] rounded-full" />
                    )}

                    {/* Dropdown */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-[#E2D9C5]/80 py-2 z-50 anim-fade-down">
                        {/* Dropdown arrow */}
                        <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#E2D9C5]/80 rotate-45" />
                        {item.children.map((child, ci) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            style={{ animationDelay: `${ci * 0.03}s` }}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors anim-fade-up
                              ${location.pathname === child.href
                                ? 'text-[#C9972A] bg-[#FEF9EE] font-medium'
                                : 'text-[#2C2C2C] hover:text-[#C9972A] hover:bg-[#FEF9EE]'
                              }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {location.pathname === child.href && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9972A] flex-shrink-0" />
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right actions */}
              <div
                className={`flex items-center gap-1 ${mounted ? 'anim-fade-down' : 'opacity-0'}`}
                style={{ animationDelay: '0.35s' }}
              >
                {/* Search */}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 rounded-lg transition-colors ${searchOpen ? 'bg-[#FEF3C7] text-[#C9972A]' : 'hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A]'}`}
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>

                {/* Social icons — commented out */}
                {/* <div className="hidden md:flex items-center gap-1 ml-1">
                  {SOCIAL_ICONS.map((Icon, i) => (
                    <a key={i} href="#"
                      className="p-1.5 rounded-lg text-[#6B6B6B] hover:text-[#C9972A] hover:bg-[#FEF3C7]/60 transition-colors"
                      aria-label="social"
                    >
                      <Icon />
                    </a>
                  ))}
                </div> */}

                {/* Divider */}
                <span className="hidden md:block w-px h-6 bg-[#E2D9C5] mx-1" />

                {/* Wishlist — only when logged in */}
                {isLoggedIn && (
                  <Link to="/wishlist" className="relative p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors hidden md:flex">
                    <Heart size={18} />
                  </Link>
                )}

                {/* Cart — only when logged in */}
                {isLoggedIn && (
                  <Link to="/cart" className="relative p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors hidden md:flex">
                    <ShoppingCart size={18} />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#7B1C2E] text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
                  </Link>
                )}

                {/* Notifications — only when logged in */}
                {isLoggedIn && (
                  <button className="relative p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors hidden md:flex" aria-label="Notifications">
                    <Bell size={18} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#C9972A] rounded-full" />
                  </button>
                )}

                {/* Language — MOVED TO TOP BAR */}
                {/* <div className="relative hidden md:block">
                  <button
                    onClick={() => { setLangOpen(!langOpen); setCurrencyOpen(false) }}
                    className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors text-sm"
                  >
                    <Globe size={15} />
                    <span className="hidden xl:inline text-xs">{selectedLang}</span>
                    <ChevronDown size={11} />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-[#E2D9C5] py-2 z-50 anim-fade-down">
                      {LANGUAGES.map((lang) => (
                        <button key={lang}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#FEF9EE] transition-colors ${selectedLang === lang ? 'text-[#C9972A] font-medium' : 'text-[#2C2C2C]'}`}
                          onClick={() => { setSelectedLang(lang); setLangOpen(false) }}
                        >{lang}</button>
                      ))}
                    </div>
                  )}
                </div> */}

                {/* Currency — MOVED TO TOP BAR */}
                {/* <div className="relative hidden md:block">
                  <button
                    onClick={() => { setCurrencyOpen(!currencyOpen); setLangOpen(false) }}
                    className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors text-xs font-medium"
                  >
                    {selectedCurrency}
                    <ChevronDown size={11} />
                  </button>
                  {currencyOpen && (
                    <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-2xl border border-[#E2D9C5] py-2 z-50 anim-fade-down">
                      {CURRENCIES.map((cur) => (
                        <button key={cur}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#FEF9EE] transition-colors ${selectedCurrency === cur ? 'text-[#C9972A] font-medium' : 'text-[#2C2C2C]'}`}
                          onClick={() => { setSelectedCurrency(cur); setCurrencyOpen(false) }}
                        >{cur}</button>
                      ))}
                    </div>
                  )}
                </div> */}

                {/* Divider */}
                <span className="hidden md:block w-px h-6 bg-[#E2D9C5] mx-1" />

                {/* Login */}
                <Link to="/login"
                  className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#7B1C2E] border border-[#7B1C2E]/40 rounded-lg hover:bg-[#7B1C2E] hover:text-white hover:border-[#7B1C2E] transition-all duration-150"
                >
                  <LogIn size={14} /> Login
                </Link>

                {/* Register */}
                <Link to="/register" className="hidden md:flex btn-primary text-sm py-2 px-4">
                  Register
                </Link>

                {/* Mobile toggle */}
                <button
                  className="lg:hidden p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] transition-colors ml-1"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            {/* Search bar */}
            {searchOpen && (
              <div className="pb-3 anim-fade-down">
                <form onSubmit={handleSearch} className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                  <input
                    type="text" autoFocus
                    placeholder="Search temples, monks, courses, rituals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field pl-11 pr-24 text-sm"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-xs py-2 px-3">
                    Search
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE DRAWER ───────────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#E2D9C5] overflow-y-auto max-h-[80vh] shadow-xl anim-fade-down">
            <div className="container-custom py-4 space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label} className={`anim-fade-up nav-delay-${idx + 1}`}>
                  <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#C9972A] uppercase tracking-wider">
                    <item.icon size={13} /> {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link key={child.href} to={child.href}
                      className={`block px-6 py-2 text-sm rounded-lg transition-colors
                        ${location.pathname === child.href
                          ? 'text-[#C9972A] bg-[#FEF9EE] font-medium'
                          : 'text-[#2C2C2C] hover:text-[#C9972A] hover:bg-[#FEF9EE]'
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Mobile icons row — only when logged in */}
              {isLoggedIn && (
                <div className="flex items-center gap-4 px-3 py-3 border-t border-[#E2D9C5] mt-2">
                  <Link to="/wishlist" className="flex items-center gap-1.5 text-sm text-[#6B6B6B]" onClick={() => setMobileOpen(false)}>
                    <Heart size={16} className="text-[#C9972A]" /> Wishlist
                  </Link>
                  <Link to="/cart" className="flex items-center gap-1.5 text-sm text-[#6B6B6B]" onClick={() => setMobileOpen(false)}>
                    <ShoppingCart size={16} className="text-[#C9972A]" /> Cart
                  </Link>
                </div>
              )}

              <div className="pt-2 border-t border-[#E2D9C5] flex flex-col gap-2 anim-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/login"
                  className="flex items-center justify-center gap-2 py-2.5 border border-[#7B1C2E] text-[#7B1C2E] rounded-lg font-medium text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogIn size={15} /> Login
                </Link>
                <Link to="/register" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                  Register Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
