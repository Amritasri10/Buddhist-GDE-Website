import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { BhanteCard } from '../components/ui/Card'

const BHANTES_DATA = [
  { name: 'Bhante Gunaratana', tradition: 'Theravada', location: 'West Virginia, USA', expertise: 'Mindfulness & Vipassana Meditation', slug: 'bhante-gunaratana' },
  { name: 'Thich Nhat Hanh', tradition: 'Zen (Mahayana)', location: 'France / Vietnam', expertise: 'Mindfulness, Engaged Buddhism', slug: 'thich-nhat-hanh' },
  { name: 'Pema Chödrön', tradition: 'Vajrayana', location: 'Nova Scotia, Canada', expertise: 'Tibetan Buddhism, Compassion practices', slug: 'pema-chodron' },
  { name: 'Ajahn Chah', tradition: 'Theravada', location: 'Thailand', expertise: 'Forest Tradition, Meditation, Monastic discipline', slug: 'ajahn-chah' },
  { name: 'Dalai Lama XIV', tradition: 'Vajrayana', location: 'Dharamsala, India', expertise: 'Tibetan Buddhism, Global compassion', slug: 'dalai-lama' },
  { name: 'Bhikkhu Bodhi', tradition: 'Theravada', location: 'New York, USA', expertise: 'Pali scholarship, Buddhist social ethics', slug: 'bhikkhu-bodhi' },
  { name: 'Ajahn Brahm', tradition: 'Theravada', location: 'Perth, Australia', expertise: 'Jhana meditation, Forest tradition', slug: 'ajahn-brahm' },
  { name: 'Thubten Chodron', tradition: 'Vajrayana', location: 'Washington, USA', expertise: 'Tibetan Buddhism, Monastic training', slug: 'thubten-chodron' },
]

export default function Bhantes() {
  const [search, setSearch] = useState('')
  const [tradition, setTradition] = useState('All')

  const filtered = BHANTES_DATA.filter((b) => {
    const ms = b.name.toLowerCase().includes(search.toLowerCase()) || b.location.toLowerCase().includes(search.toLowerCase())
    const mt = tradition === 'All' || b.tradition.includes(tradition)
    return ms && mt
  })

  return (
    <div>
      <PageHero
        title="Bhante & Monk Directory"
        subtitle="Connect with ordained Buddhist monks, teachers, and spiritual guides from all traditions worldwide."
        breadcrumbs={[{ label: 'Bhante Directory' }]}
      />
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text" placeholder="Search by name or location..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <select value={tradition} onChange={(e) => setTradition(e.target.value)} className="input-field sm:w-48">
            {['All', 'Theravada', 'Mahayana', 'Vajrayana', 'Zen'].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </section>
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <p className="text-sm text-[#6B6B6B] mb-6">{filtered.length} monks found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((b) => <BhanteCard key={b.slug} {...b} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
