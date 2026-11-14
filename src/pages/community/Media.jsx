import { useState } from 'react'
import { Search, Play, Music } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'

const MEDIA = [
  { title: 'The Nature of Mind — A Dharma Talk', type: 'Video', duration: '58 min', monk: 'Thich Nhat Hanh', category: 'Dharma Talk', free: true },
  { title: 'Guided Vipassana Meditation Session', type: 'Audio', duration: '45 min', monk: 'Bhante Gunaratana', category: 'Meditation', free: true },
  { title: 'Heart Sutra Chanting — Mahayana', type: 'Audio', duration: '12 min', monk: 'Various Monks', category: 'Chanting', free: true },
  { title: 'Compassion in Buddhist Practice', type: 'Video', duration: '72 min', monk: 'Pema Chödrön', category: 'Dharma Talk', free: false },
  { title: 'Morning Pali Chanting — Full Set', type: 'Audio', duration: '35 min', monk: 'Ajahn Chah', category: 'Chanting', free: true },
  { title: 'Introduction to Tonglen Practice', type: 'Video', duration: '40 min', monk: 'Pema Chödrön', category: 'Meditation', free: false },
  { title: 'Buddhist Podcast: Path to Liberation', type: 'Podcast', duration: '30 min', monk: 'Bhikkhu Bodhi', category: 'Podcast', free: true },
  { title: 'Metta Bhavana — Loving Kindness', type: 'Audio', duration: '20 min', monk: 'Ajahn Brahm', category: 'Meditation', free: true },
]

export default function Media() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [mediaType, setMediaType] = useState('All')

  const filtered = MEDIA.filter((m) => {
    const ms = m.title.toLowerCase().includes(search.toLowerCase())
    const mc = category === 'All' || m.category === category
    const mt = mediaType === 'All' || m.type === mediaType
    return ms && mc && mt
  })

  return (
    <div>
      <PageHero
        title="Audio & Video Library"
        subtitle="Dharma talks, guided meditation, chanting, and Buddhist podcasts from renowned teachers."
        breadcrumbs={[{ label: 'Media Library' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="relative flex-1 min-w-48">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input type="text" placeholder="Search talks, chants, meditations..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
            </div>
            <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="input-field w-36">
              {['All', 'Video', 'Audio', 'Podcast'].map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-44">
              {['All', 'Dharma Talk', 'Meditation', 'Chanting', 'Podcast'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m, i) => (
              <div key={i} className="card bg-white overflow-hidden group">
                <div className="h-36 bg-gradient-to-br from-[#2C2C2C] via-[#5A1020] to-[#7B1C2E] flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C9972A] transition-colors cursor-pointer">
                    {m.type === 'Audio' || m.type === 'Podcast' ? <Music size={24} className="text-white" /> : <Play size={24} className="text-white" />}
                  </div>
                  {!m.free && <span className="absolute top-3 right-3 bg-[#C9972A] text-white text-xs font-bold px-2 py-1 rounded-full">Premium</span>}
                  {m.free && <span className="absolute top-3 right-3 bg-[#065F46] text-white text-xs font-bold px-2 py-1 rounded-full">Free</span>}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge-gold text-xs">{m.category}</span>
                    <span className="text-xs text-[#9CA3AF]">{m.duration}</span>
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors text-sm leading-snug">{m.title}</h3>
                  <p className="text-xs text-[#9CA3AF]">By {m.monk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
