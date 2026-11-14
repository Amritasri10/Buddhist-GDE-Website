import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { BUSINESSES } from '../../data/services/businesses'

export default function Businesses() {
  const [search, setSearch] = useState('')
  const filtered = BUSINESSES.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()) || b.category.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHero
        title="Global Business Partners"
        subtitle="Discover Buddhist businesses, service providers, and cultural organizations from around the world."
        breadcrumbs={[{ label: 'Business Directory' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search businesses..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b) => (
              <div key={b.name} className="card p-6 bg-white group">
                <div className="text-4xl mb-3">{b.icon}</div>
                <span className="badge-gold text-xs mb-2 inline-block">{b.category}</span>
                <h3 className="font-bold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{b.name}</h3>
                <p className="text-xs text-[#6B6B6B] flex items-center gap-1 mb-2"><MapPin size={11} />{b.location}</p>
                <p className="text-sm text-[#9CA3AF]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
