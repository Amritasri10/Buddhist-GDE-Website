import { useState } from 'react'
import { Search, MapPin, Star } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

const HOTELS = [
  { name: 'Bodhi Tree Retreat', location: 'Bodh Gaya, India', stars: 4, price: '$65/night', type: 'Retreat Center', rating: 4.8 },
  { name: 'Lumbini Pilgrim Inn', location: 'Lumbini, Nepal', stars: 3, price: '$45/night', type: 'Guesthouse', rating: 4.6 },
  { name: 'Dhamma Vihara Hotel', location: 'Kandy, Sri Lanka', stars: 4, price: '$80/night', type: 'Hotel', rating: 4.7 },
  { name: 'Zen Garden Lodge', location: 'Chiang Mai, Thailand', stars: 4, price: '$70/night', type: 'Lodge', rating: 4.9 },
  { name: 'Himalayan Monastery Stay', location: 'Paro, Bhutan', stars: 5, price: '$200/night', type: 'Monastery', rating: 5.0 },
  { name: 'Angkor Dharma Hotel', location: 'Siem Reap, Cambodia', stars: 4, price: '$90/night', type: 'Hotel', rating: 4.7 },
]

export default function Hotels() {
  const [search, setSearch] = useState('')

  const filtered = HOTELS.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHero
        title="Hotels & Accommodation"
        subtitle="Find Buddhist-friendly hotels, monastery stays, and guesthouses near sacred sites worldwide."
        breadcrumbs={[{ label: 'Hotels' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search by name or destination..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((h) => (
              <div key={h.name} className="card bg-white overflow-hidden group">
                <div className="h-44 bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5] flex items-center justify-center text-6xl opacity-40">🏨</div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-[#2C2C2C] group-hover:text-[#C9972A] transition-colors">{h.name}</h3>
                      <p className="text-sm text-[#6B6B6B] flex items-center gap-1 mt-1"><MapPin size={12} />{h.location}</p>
                    </div>
                    <span className="badge bg-[#F3F4F6] text-[#374151] text-xs flex-shrink-0">{h.type}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-[#C9972A]">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-medium">{h.rating}</span>
                      <span className="text-xs text-[#9CA3AF]">({h.stars}★)</span>
                    </div>
                    <span className="font-bold text-[#2C2C2C]">{h.price}</span>
                  </div>
                  <button className="btn-primary w-full justify-center mt-4 text-sm py-2">View & Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
