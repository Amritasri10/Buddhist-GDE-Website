import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { Link } from 'react-router-dom'

const DESTINATIONS = [
  { name: 'Bodh Gaya', country: 'India', type: 'Pilgrimage', desc: 'Site of Buddha\'s enlightenment under the Bodhi tree.', icon: '🌳' },
  { name: 'Lumbini', country: 'Nepal', type: 'Pilgrimage', desc: 'Birthplace of Siddhartha Gautama, the Buddha.', icon: '🌸' },
  { name: 'Sarnath', country: 'India', type: 'Pilgrimage', desc: 'Where the Buddha gave his first discourse.', icon: '🦌' },
  { name: 'Kushinagar', country: 'India', type: 'Pilgrimage', desc: 'The site of the Buddha\'s parinirvana.', icon: '🌙' },
  { name: 'Bagan', country: 'Myanmar', type: 'Heritage', desc: 'Ancient city with thousands of Buddhist temples and pagodas.', icon: '⛩️' },
  { name: 'Angkor Wat', country: 'Cambodia', type: 'Heritage', desc: 'World\'s largest religious monument — ancient Khmer Buddhist complex.', icon: '🏯' },
  { name: "Tiger's Nest", country: 'Bhutan', type: 'Retreat', desc: 'Iconic Himalayan monastery perched on a cliff face.', icon: '🏔️' },
  { name: 'Kyoto Temples', country: 'Japan', type: 'Heritage', desc: 'Hundreds of Zen and Pure Land temples in Japan\'s ancient capital.', icon: '⛩️' },
]

const PACKAGES = [
  { name: 'Buddhist Circuit India', days: 10, price: '$1,299', includes: 'Bodh Gaya, Sarnath, Kushinagar, Varanasi' },
  { name: 'Nepal Pilgrimage Tour', days: 7, price: '$899', includes: 'Lumbini, Kathmandu, Boudhanath, Pokhara' },
  { name: 'Southeast Asia Discovery', days: 14, price: '$2,199', includes: 'Thailand, Myanmar, Cambodia' },
  { name: 'Himalayan Retreat', days: 10, price: '$1,599', includes: 'Bhutan, Sikkim, Darjeeling' },
]

export default function Travel() {
  const [search, setSearch] = useState('')
  const filtered = DESTINATIONS.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.country.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHero
        title="Buddhist Travel & Pilgrimage"
        subtitle="Embark on sacred journeys to the world's most revered Buddhist sites with our curated pilgrimage packages."
        breadcrumbs={[{ label: 'Travel & Pilgrimage' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="relative max-w-xl mx-auto mb-12">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search destinations..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-12" />
          </div>
          <SectionHeader eyebrow="Destinations" title="Sacred Buddhist Sites" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {filtered.map((d) => (
              <div key={d.name} className="card p-6 bg-white group hover:border-[#C9972A]/50 transition-colors cursor-pointer">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{d.name}</h3>
                <div className="flex items-center gap-1 text-xs text-[#C9972A] font-medium mb-2"><MapPin size={12} />{d.country} · {d.type}</div>
                <p className="text-sm text-[#6B6B6B]">{d.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeader eyebrow="Packages" title="Pilgrimage Tour Packages" subtitle="Carefully curated group and private pilgrimage tours." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PACKAGES.map((p) => (
              <div key={p.name} className="card p-7 bg-white flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-[#2C2C2C] text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-[#6B6B6B] mb-3">📍 {p.includes}</p>
                  <span className="badge bg-[#F3F4F6] text-[#374151] text-xs">{p.days} days</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#C9972A] mb-2">{p.price}</div>
                  <Link to="/register" className="btn-primary text-sm py-2">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 card p-6 bg-[#FEF9EE] border-[#E8C55A]/50 text-center max-w-xl mx-auto">
            <p className="text-sm text-[#6B6B6B]">
              <strong className="text-[#2C2C2C]">Note:</strong> Real-time flight and hotel inventory requires third-party API integration. Package bookings are confirmed by our travel partners within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
