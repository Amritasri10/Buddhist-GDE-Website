import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Menu, X, Search, Globe, ChevronDown, User, ShoppingCart,
  Heart, Bell, LogIn, BookOpen, MapPin, Compass, GraduationCap,
  Store, Music, Plane, Building2, Stethoscope, Utensils, Calendar,
  HandHeart, Briefcase, Users, Crown
} from 'lucide-react'
import logo from '../../assets/Buddhist Global Digital Ecosystem Logo.png'

const NAV_ITEMS = [
  {
    label: 'Knowledge',
    icon: BookOpen,
    children: [
      { label: 'About Buddhism', href: '/about-buddhism' },
      { label: 'Life of Buddha', href: '/buddha' },
      { label: 'Knowledge Hub', href: '/knowledge' },
      { label: 'Scriptures', href: '/scriptures' },
      { label: 'Traditions', href: '/traditions' },
      { label: 'Heritage', href: '/heritage' },
      { label: 'Festivals', href: '/festivals' },
    ],
  },
  {
    label: 'Temples & Monks',
    icon: MapPin,
    children: [
      { label: 'Temples & Monasteries', href: '/temples' },
      { label: 'Find a Bhante', href: '/bhantes' },
      { label: 'Rituals & Ceremonies', href: '/rituals' },
      { label: 'Book a Ceremony', href: '/bookings' },
    ],
  },
  {
    label: 'Education',
    icon: GraduationCap,
    children: [
      { label: 'Buddhist Education', href: '/education' },
      { label: 'Courses', href: '/courses' },
      { label: 'Research Portal', href: '/research' },
      { label: 'Publications', href: '/research/publications' },
    ],
  },
  {
    label: 'Services',
    icon: Compass,
    children: [
      { label: 'Shop', href: '/shop' },
      { label: 'Media Library', href: '/media' },
      { label: 'Travel & Pilgrimage', href: '/travel' },
      { label: 'Hotels', href: '/hotels' },
      { label: 'Healthcare', href: '/healthcare' },
      { label: 'Restaurants', href: '/restaurants' },
      { label: 'Events', href: '/events' },
      { label: 'Weddings', href: '/weddings' },
    ],
  },
  {
    label: 'Community',
    icon: Users,
    children: [
      { label: 'Community', href: '/community' },
      { label: 'Business Directory', href: '/businesses' },
      { label: 'Donations', href: '/donations' },
      { label: 'Membership', href: '/membership' },
    ],
  },
]

const LANGUAGES = ['English', 'हिंदी', 'Pāli', 'संस्कृत', '中文', 'ภาษาไทย', '日本語', 'नेपाली']
const CURRENCIES = ['USD', 'INR', 'NPR', 'THB', 'LKR', 'JPY', 'CNY', 'EUR', 'GBP']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [langOpen, setLangOpen] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setLangOpen(false)
        setCurrencyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/knowledge?q=${encodeURIComponent(searchQuery)}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}
    >
      {/* Top bar */}
      <div className="bg-[#7B1C2E] text-white text-xs py-1.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span className="text-white/80">🙏 Buddhist Global Digital Ecosystem — Connecting the World of Dharma</span>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#E8C55A] transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-[#E8C55A] transition-colors">FAQ</Link>
            <Link to="/about" className="hover:text-[#E8C55A] transition-colors">About</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <img
              src={logo}
              alt="Buddhist Global Digital Ecosystem"
              className="h-auto w-[160px] object-contain mix-blend-multiply"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#2C2C2C] hover:text-[#C9972A] rounded-lg hover:bg-[#FEF3C7]/50 transition-all duration-150">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[#E2D9C5] py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:text-[#C9972A] hover:bg-[#FEF9EE] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Language */}
            <div className="relative hidden md:block">
              <button
                onClick={() => { setLangOpen(!langOpen); setCurrencyOpen(false) }}
                className="flex items-center gap-1 p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors text-sm"
              >
                <Globe size={16} />
                <span className="hidden lg:inline">{selectedLang}</span>
                <ChevronDown size={12} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-[#E2D9C5] py-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#FEF9EE] transition-colors ${selectedLang === lang ? 'text-[#C9972A] font-medium' : 'text-[#2C2C2C]'}`}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false) }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency */}
            <div className="relative hidden md:block">
              <button
                onClick={() => { setCurrencyOpen(!currencyOpen); setLangOpen(false) }}
                className="flex items-center gap-1 p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors text-sm"
              >
                <span>{selectedCurrency}</span>
                <ChevronDown size={12} />
              </button>
              {currencyOpen && (
                <div className="absolute top-full right-0 mt-1 w-28 bg-white rounded-xl shadow-xl border border-[#E2D9C5] py-2 z-50">
                  {CURRENCIES.map((cur) => (
                    <button
                      key={cur}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#FEF9EE] transition-colors ${selectedCurrency === cur ? 'text-[#C9972A] font-medium' : 'text-[#2C2C2C]'}`}
                      onClick={() => { setSelectedCurrency(cur); setCurrencyOpen(false) }}
                    >
                      {cur}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] hover:text-[#C9972A] transition-colors hidden md:flex">
              <ShoppingCart size={18} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#7B1C2E] text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
            </Link>

            {/* Login/Register */}
            <Link to="/login" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#7B1C2E] border border-[#7B1C2E] rounded-lg hover:bg-[#7B1C2E] hover:text-white transition-all duration-150">
              <LogIn size={15} />
              Login
            </Link>
            <Link to="/register" className="hidden md:flex btn-primary text-sm py-2 px-4">
              Register
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#FEF3C7]/60 text-[#2C2C2C] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                autoFocus
                placeholder="Search temples, monks, courses, rituals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 pr-24"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-sm py-2">Search</button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2D9C5] overflow-y-auto max-h-[80vh]">
          <div className="container-custom py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#C9972A] uppercase tracking-wider">
                  <item.icon size={14} />
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="block px-6 py-2 text-sm text-[#2C2C2C] hover:text-[#C9972A] hover:bg-[#FEF9EE] rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-[#E2D9C5] flex flex-col gap-2">
              <Link to="/login" className="flex items-center justify-center gap-2 py-2.5 border border-[#7B1C2E] text-[#7B1C2E] rounded-lg font-medium text-sm" onClick={() => setMobileOpen(false)}>
                <LogIn size={16} /> Login
              </Link>
              <Link to="/register" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                Register Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
