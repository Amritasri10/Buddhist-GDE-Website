import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { EventCard } from '../../components/ui/Card'

const EVENTS = [
  { title: 'Vesak Day Celebration 2027', date: 'May 2027', location: 'Global – 50+ Countries', type: 'Festival', slug: 'vesak-2027' },
  { title: 'International Meditation Retreat', date: 'Jan 15–25, 2027', location: 'Bodh Gaya, India', type: 'Retreat', slug: 'meditation-retreat-2027' },
  { title: 'Buddhist Conference on Climate & Compassion', date: 'March 2027', location: 'Bangkok, Thailand', type: 'Conference', slug: 'climate-compassion-2027' },
  { title: 'Dharma Music Festival', date: 'April 2027', location: 'Kathmandu, Nepal', type: 'Festival', slug: 'dharma-music-2027' },
  { title: 'Theravada Scholars Symposium', date: 'Feb 2027', location: 'Colombo, Sri Lanka', type: 'Conference', slug: 'scholars-symposium' },
  { title: 'Tibetan Buddhist Art Exhibition', date: 'June 2027', location: 'New York, USA', type: 'Exhibition', slug: 'tibetan-art-2027' },
  { title: 'Southeast Asia Sangha Gathering', date: 'July 2027', location: 'Chiang Mai, Thailand', type: 'Retreat', slug: 'sangha-gathering' },
  { title: 'Enlightenment Day Celebrations', date: 'Dec 2027', location: 'Bodh Gaya, India', type: 'Festival', slug: 'enlightenment-day-2027' },
]

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
            {['All', 'Festival', 'Retreat', 'Conference', 'Exhibition'].map((t) => <option key={t}>{t}</option>)}
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
