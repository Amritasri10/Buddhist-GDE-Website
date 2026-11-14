import { useState } from 'react'
import { Search, Filter, MapPin, Star } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { TempleCard } from '../../components/ui/Card'

const TRADITIONS = ['All', 'Theravada', 'Mahayana', 'Vajrayana']
const COUNTRIES = ['All Countries', 'India', 'Nepal', 'Sri Lanka', 'Thailand', 'Myanmar', 'Japan', 'China', 'Bhutan', 'Cambodia', 'Tibet']

const TEMPLES_DATA = [
  { name: 'Mahabodhi Temple', location: 'Bodh Gaya, India', tradition: 'Theravada', slug: 'mahabodhi-temple', rating: '4.9' },
  { name: 'Shwedagon Pagoda', location: 'Yangon, Myanmar', tradition: 'Theravada', slug: 'shwedagon-pagoda', rating: '4.8' },
  { name: 'Potala Palace', location: 'Lhasa, Tibet', tradition: 'Vajrayana', slug: 'potala-palace', rating: '4.9' },
  { name: 'Senso-ji Temple', location: 'Tokyo, Japan', tradition: 'Mahayana', slug: 'sensoji-temple', rating: '4.7' },
  { name: 'Boudhanath Stupa', location: 'Kathmandu, Nepal', tradition: 'Vajrayana', slug: 'boudhanath-stupa', rating: '4.8' },
  { name: 'Temple of the Tooth', location: 'Kandy, Sri Lanka', tradition: 'Theravada', slug: 'tooth-relic-temple', rating: '4.7' },
  { name: 'Wat Pho', location: 'Bangkok, Thailand', tradition: 'Theravada', slug: 'wat-pho', rating: '4.6' },
  { name: 'Angkor Wat', location: 'Siem Reap, Cambodia', tradition: 'Mahayana', slug: 'angkor-wat', rating: '4.9' },
  { name: 'Nalanda Mahavihara', location: 'Bihar, India', tradition: 'Mahayana', slug: 'nalanda', rating: '4.8' },
  { name: 'Tawang Monastery', location: 'Arunachal Pradesh, India', tradition: 'Vajrayana', slug: 'tawang-monastery', rating: '4.7' },
  { name: 'Ryoan-ji Temple', location: 'Kyoto, Japan', tradition: 'Mahayana', slug: 'ryoanji', rating: '4.6' },
  { name: 'Paro Taktsang', location: 'Paro, Bhutan', tradition: 'Vajrayana', slug: 'tigers-nest', rating: '4.9' },
]

export default function Temples() {
  const [search, setSearch] = useState('')
  const [tradition, setTradition] = useState('All')
  const [country, setCountry] = useState('All Countries')

  const filtered = TEMPLES_DATA.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.location.toLowerCase().includes(search.toLowerCase())
    const matchTradition = tradition === 'All' || t.tradition === tradition
    const matchCountry = country === 'All Countries' || t.location.includes(country)
    return matchSearch && matchTradition && matchCountry
  })

  return (
    <div>
      <PageHero
        title="Temples & Monasteries"
        subtitle="Discover sacred Buddhist temples, monasteries, and spiritual sites across the globe."
        breadcrumbs={[{ label: 'Temples & Monasteries' }]}
      />

      {/* Filters */}
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <select
              value={tradition}
              onChange={(e) => setTradition(e.target.value)}
              className="input-field sm:w-44"
            >
              {TRADITIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input-field sm:w-44"
            >
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <p className="text-sm text-[#6B6B6B] mb-6">{filtered.length} temples found</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((t) => <TempleCard key={t.slug} {...t} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏯</div>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">No temples found</h3>
              <p className="text-[#6B6B6B]">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
