import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { EventCard } from '../../components/ui/Card'
import { EVENTS, EVENT_TYPES } from '../../data/services/events'

export default function Events() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')

  const filtered = EVENTS.filter((e) => {
    const ms = e.title.toLowerCase().includes(search.toLowerCase()) || e.location.toLowerCase().includes(search.toLowerCase())
    const mt = type === 'All' || e.type === type
    return ms && mt
  })

  return (
    <div>
      <PageHero
        title="Buddhist Events & Festivals"
        subtitle="Discover upcoming Buddhist festivals, meditation retreats, conferences, and cultural events worldwide."
        breadcrumbs={[{ label: 'Events' }]}
      />
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
          </div>
          <select value={type} onChange={(e) => setType(e.target.value)} className="input-field w-40">
            {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </section>
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <p className="text-sm text-[#6B6B6B] mb-6">{filtered.length} events</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((e) => <EventCard key={e.slug} {...e} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
