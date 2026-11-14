import { useState } from 'react'
import { Search, MapPin, Star } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { RESTAURANTS } from '../../data/services/restaurants'

export default function Restaurants() {
  const [search, setSearch] = useState('')
  const filtered = RESTAURANTS.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()) || r.location.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHero
        title="Restaurant Directory"
        subtitle="Discover vegetarian and Buddhist-friendly restaurants near sacred sites worldwide."
        breadcrumbs={[{ label: 'Restaurants' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search restaurants..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div key={r.name} className="card bg-white overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5] flex items-center justify-center text-6xl opacity-40">🍜</div>
                <div className="p-6">
                  <h3 className="font-bold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{r.name}</h3>
                  <p className="text-xs text-[#C9972A] font-medium mb-1">{r.cuisine}</p>
                  <p className="text-sm text-[#6B6B6B] flex items-center gap-1 mb-3"><MapPin size={12} />{r.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C9972A]">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-medium">{r.rating}</span>
                    </div>
                    <span className="text-sm text-[#6B6B6B] font-medium">{r.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
