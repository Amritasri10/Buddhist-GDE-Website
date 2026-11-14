import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Play, Search } from 'lucide-react'
import SectionHeader from '../../components/ui/SectionHeader'
import { TempleCard, BhanteCard, CourseCard, ProductCard, EventCard, DonationCard } from '../../components/ui/Card'
import { TEMPLES, BHANTES, COURSES, PRODUCTS, EVENTS, DONATIONS, KNOWLEDGE_TOPICS, SERVICES, MEMBERSHIPS } from '../../data/core/home'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#2C1810] via-[#5A1020] to-[#7B1C2E] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #C9972A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E8C55A 0%, transparent 40%)'}} />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#C9972A]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-[#E8C55A]/10 blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Dhamma wheel */}
            <div className="text-7xl mb-6 animate-pulse">☸</div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-[#E8C55A] text-sm font-medium mb-6 backdrop-blur-sm">
              <span>🌍</span> Connecting Buddhist Communities Worldwide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The World's Largest{' '}
              <span className="text-[#E8C55A]">Buddhist Digital</span>{' '}
              Ecosystem
            </h1>
            <p className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed">
              Discover temples, connect with monks, book sacred ceremonies, learn Buddhist teachings,
              explore pilgrimage destinations, and join a global community rooted in Dharma and compassion.
            </p>
            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search temples, monks, courses, rituals..."
                className="w-full bg-white rounded-xl pl-13 pr-36 py-4 text-[#2C2C2C] shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C9972A] text-sm"
                style={{ paddingLeft: '3.25rem' }}
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#C9972A] hover:bg-[#B8861F] text-white px-5 rounded-lg font-medium text-sm transition-colors">
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/temples" className="btn-primary">
                Explore Temples <ArrowRight size={16} />
              </Link>
              <Link to="/bookings" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#7B1C2E]">
                Book a Ceremony
              </Link>
              <Link to="/register" className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2 backdrop-blur-sm">
                Join Free
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-14 max-w-2xl mx-auto">
              {[
                { n: '50+', label: 'Countries' },
                { n: '10K+', label: 'Temples' },
                { n: '5K+', label: 'Monks' },
                { n: '1M+', label: 'Users' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E8C55A]">{s.n}</div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick services grid */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Explore"
            title="Everything You Need"
            subtitle="One platform for temples, education, travel, commerce, and community — all rooted in Buddhist wisdom."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className={`flex flex-col items-center text-center p-5 rounded-xl border ${s.color} hover:shadow-md transition-all duration-200 group bg-white`}
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</span>
                <span className="font-semibold text-[#2C2C2C] text-sm mb-1 group-hover:text-[#C9972A] transition-colors">{s.title}</span>
                <span className="text-[#9CA3AF] text-xs leading-tight">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buddhist Knowledge */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Dharma"
            title="Explore Buddhist Knowledge"
            subtitle="Deepen your understanding of Buddhist philosophy, history, and practice."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KNOWLEDGE_TOPICS.map((t) => (
              <Link
                key={t.href}
                to={t.href}
                className="card p-6 flex items-start gap-4 group bg-white"
              >
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{t.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{t.desc}</p>
                </div>
                <ChevronRight size={16} className="ml-auto text-[#E2D9C5] group-hover:text-[#C9972A] transition-colors flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/knowledge" className="btn-secondary">Browse All Knowledge <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Temples */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Sacred Sites"
            title="Featured Temples & Monasteries"
            subtitle="Visit the world's most revered Buddhist temples and monasteries across Asia and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEMPLES.map((t) => <TempleCard key={t.slug} {...t} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/temples" className="btn-secondary">View All Temples <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Bhantes */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Connect"
            title="Find a Bhante / Monk"
            subtitle="Connect with ordained monks and teachers for guidance, ceremonies, and spiritual support."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BHANTES.map((b) => <BhanteCard key={b.slug} {...b} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/bhantes" className="btn-secondary">View All Bhantes <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Rituals & Ceremony Booking CTA */}
      <section className="section-pad bg-gradient-to-br from-[#7B1C2E] to-[#5A1020] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #C9972A 0%, transparent 50%)'}} />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[#E8C55A] text-sm font-semibold uppercase tracking-widest mb-3">Ceremony Services</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Book a Buddhist Ceremony</h2>
              <p className="text-white/75 text-lg mb-8 leading-relaxed">
                Connect with qualified monks for Puja, chanting, house blessings, wedding ceremonies, memorial services,
                and more — available in your location and time zone.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Buddhist Puja & Prayer', 'Wedding Blessings', 'House Blessing', 'Meditation Retreats', 'Funeral Ceremonies', 'Ordination Rituals'].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="text-[#E8C55A]">✓</span> {s}
                  </div>
                ))}
              </div>
              <Link to="/bookings" className="btn-primary bg-[#C9972A] hover:bg-[#B8861F]">
                Book a Ceremony Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🕯️', title: 'Buddhist Puja', price: 'From $50' },
                { icon: '🔔', title: 'Chanting Ceremony', price: 'From $80' },
                { icon: '🏠', title: 'House Blessing', price: 'From $100' },
                { icon: '💒', title: 'Wedding Blessing', price: 'From $200' },
              ].map((c) => (
                <Link key={c.title} to="/rituals" className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <div className="font-medium text-white mb-1">{c.title}</div>
                  <div className="text-[#E8C55A] text-sm font-semibold">{c.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Learn"
            title="Buddhist Education & Courses"
            subtitle="From beginner introductions to advanced philosophy — learn at your own pace with expert teachers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((c) => <CourseCard key={c.slug} {...c} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses" className="btn-secondary">Browse All Courses <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#C9972A] text-sm font-semibold uppercase tracking-widest mb-3">Research Portal</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5">Scholar & Research Community</h2>
              <p className="text-[#6B6B6B] text-lg mb-6 leading-relaxed">
                A dedicated platform for Buddhist scholars, researchers, and academics to publish, discover,
                and collaborate on Buddhist studies across all traditions.
              </p>
              <ul className="space-y-3 mb-8">
                {['Upload & publish research papers', 'Access digital reference library', 'Collaborate with scholars worldwide', 'Find academic journals & publications'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#2C2C2C]">
                    <span className="w-6 h-6 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#C9972A] text-xs font-bold flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link to="/research" className="btn-primary">Explore Research <ArrowRight size={16} /></Link>
                <Link to="/research/publications" className="btn-secondary">Publications</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📚', label: '12,000+', desc: 'Research Papers' },
                { icon: '🌍', label: '80+', desc: 'Countries' },
                { icon: '👨‍🎓', label: '3,500+', desc: 'Scholars' },
                { icon: '📰', label: '200+', desc: 'Journals' },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center bg-white">
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <div className="text-2xl font-bold text-[#C9972A] mb-1">{s.label}</div>
                  <div className="text-sm text-[#6B6B6B]">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Marketplace"
            title="Buddhist Shop"
            subtitle="Authentic Buddhist products — from prayer beads and statues to books, robes, and meditation tools."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => <ProductCard key={p.slug} {...p} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop" className="btn-secondary">Visit the Shop <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="section-pad bg-[#2C2C2C] text-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Dharma Media"
            title="Audio & Video Teachings"
            subtitle="Listen to dharma talks, guided meditations, chants, and podcasts from renowned teachers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: '🎙️', title: 'Dharma Talks', count: '5,000+ talks', desc: 'Teachings from leading Buddhist monks and teachers across traditions.' },
              { icon: '🧘', title: 'Guided Meditation', count: '2,000+ sessions', desc: 'Vipassana, Metta, Tonglen, and mindfulness meditation guides.' },
              { icon: '🎵', title: 'Buddhist Chants', count: '1,500+ tracks', desc: 'Pali suttas, mantras, and devotional music from around the world.' },
            ].map((m) => (
              <div key={m.title} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-1">{m.title}</h3>
                <p className="text-[#E8C55A] text-sm font-medium mb-3">{m.count}</p>
                <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/media" className="btn-primary">
              <Play size={16} /> Explore Media Library
            </Link>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Pilgrimage"
            title="Buddhist Travel & Pilgrimage"
            subtitle="Embark on sacred journeys to the most revered Buddhist sites across Asia and beyond."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {['India', 'Nepal', 'Sri Lanka', 'Thailand', 'Myanmar', 'Bhutan', 'Japan', 'China', 'South Korea', 'Cambodia'].map((country) => (
              <Link
                key={country}
                to="/travel"
                className="card py-4 px-3 text-center group hover:border-[#C9972A] transition-colors bg-white"
              >
                <div className="text-2xl mb-1">🗺️</div>
                <span className="text-sm font-medium text-[#2C2C2C] group-hover:text-[#C9972A] transition-colors">{country}</span>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '✈️', title: 'Pilgrimage Packages', desc: 'Curated group and private tours to Buddhist sites.', href: '/travel' },
              { icon: '🏕️', title: 'Meditation Retreats', desc: 'Residential retreats in monasteries and retreat centers.', href: '/travel' },
              { icon: '🧳', title: 'Custom Tours', desc: 'Plan your own sacred journey with expert guidance.', href: '/travel' },
            ].map((t) => (
              <Link key={t.href + t.title} to={t.href} className="card p-6 flex items-start gap-4 group bg-white">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{t.title}</h3>
                  <p className="text-sm text-[#6B6B6B]">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/travel" className="btn-secondary">Explore All Destinations <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#C9972A] text-sm font-semibold uppercase tracking-widest mb-3">Hospitality</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5">Buddhist-Friendly Hotels & Accommodation</h2>
              <p className="text-[#6B6B6B] text-lg mb-6">
                Find hotels, guesthouses, and monastery stays near sacred sites. Vegetarian-friendly, peaceful, and welcoming.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ n: '2,000+', l: 'Properties' }, { n: '50+', l: 'Countries' }, { n: '4.7★', l: 'Avg Rating' }].map((s) => (
                  <div key={s.l} className="card p-4 text-center bg-white">
                    <div className="text-xl font-bold text-[#C9972A]">{s.n}</div>
                    <div className="text-xs text-[#6B6B6B]">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/hotels" className="btn-primary">Find Hotels <ArrowRight size={16} /></Link>
            </div>
            <div className="card p-8 bg-white">
              <h3 className="font-semibold text-[#2C2C2C] text-lg mb-6">Search Accommodation</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Destination</label>
                  <input className="input-field" placeholder="City, country, or temple..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Check-in</label>
                    <input type="date" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Check-out</label>
                    <input type="date" className="input-field" />
                  </div>
                </div>
                <button className="btn-primary w-full justify-center">Search Hotels</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Wellness"
            title="Healthcare & Wellness Services"
            subtitle="Access hospitals, clinics, and wellness providers near Buddhist destinations and retreat centers."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🏥', title: 'Hospitals & Clinics', desc: '500+ verified facilities', href: '/healthcare' },
              { icon: '👨‍⚕️', title: 'Doctor Directory', desc: '3,000+ registered providers', href: '/healthcare' },
              { icon: '🌿', title: 'Ayurveda & Holistic', desc: 'Traditional Buddhist wellness', href: '/healthcare' },
              { icon: '🧘', title: 'Medical Tourism', desc: 'Wellness travel packages', href: '/healthcare' },
            ].map((s) => (
              <Link key={s.title} to={s.href} className="card p-6 text-center group bg-[#FDFAF4]">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1 group-hover:text-[#C9972A] transition-colors">{s.title}</h3>
                <p className="text-xs text-[#9CA3AF]">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/healthcare" className="btn-secondary">Browse Healthcare Directory <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Upcoming"
            title="Buddhist Events & Festivals"
            subtitle="From Vesak Day celebrations to international meditation retreats — stay connected to the global Buddhist calendar."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((e) => <EventCard key={e.slug} {...e} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="btn-secondary">View All Events <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Partners"
            title="Global Business Partners"
            subtitle="Discover Buddhist businesses, yoga centers, event organizers, and service providers from around the world."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Buddhist Bookstores', 'Meditation Centers', 'Yoga Studios', 'Photography', 'Event Planners', 'Wedding Services', 'Transport', 'Cultural Orgs', 'Artisan Shops', 'Travel Agencies', 'Restaurants', 'Clothing Stores'].map((b) => (
              <Link key={b} to="/businesses" className="card py-4 px-3 text-center text-sm font-medium text-[#2C2C2C] hover:text-[#C9972A] hover:border-[#C9972A] transition-colors bg-[#FDFAF4]">
                {b}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/businesses" className="btn-secondary">Browse Business Directory <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Donations */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Give Back"
            title="Donation & Charity Campaigns"
            subtitle="Support Buddhist monasteries, education, and humanitarian projects across the world."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DONATIONS.map((d) => <DonationCard key={d.slug} {...d} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/donations" className="btn-secondary">View All Campaigns <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Membership"
            title="Choose Your Plan"
            subtitle="Join the Buddhist Global Digital Ecosystem and unlock access to ceremonies, courses, media, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {MEMBERSHIPS.map((m) => (
              <div key={m.name} className={`card p-8 border-2 ${m.color} relative bg-[#FDFAF4]`}>
                {m.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9972A] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {m.highlight}
                  </div>
                )}
                <h3 className="font-bold text-xl text-[#2C2C2C] mb-2">{m.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2C2C2C]">{m.price}</span>
                  <span className="text-[#6B6B6B] text-sm">{m.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#2C2C2C]">
                      <span className="text-[#C9972A] font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/membership" className={`${m.btnClass} w-full justify-center`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/membership" className="text-[#C9972A] hover:underline text-sm font-medium">
              Compare all plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-gradient-to-br from-[#7B1C2E] to-[#5A1020] text-white">
        <div className="container-custom max-w-2xl text-center">
          <div className="text-5xl mb-4">🙏</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected to Dharma</h2>
          <p className="text-white/70 text-lg mb-8">
            Receive weekly updates on Buddhist teachings, upcoming events, new courses, and global community news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E8C55A]"
            />
            <button type="submit" className="bg-[#C9972A] hover:bg-[#B8861F] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors whitespace-nowrap flex items-center gap-2 justify-center">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-white/40 text-sm mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>
    </div>
  )
}
