import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { CourseCard } from '../../components/ui/Card'

const COURSES_DATA = [
  { title: 'Introduction to Buddhism & the Four Noble Truths', instructor: 'Bhante Gunaratana', level: 'Beginner', duration: '6 weeks', price: 0, slug: 'intro-buddhism', category: 'Foundation' },
  { title: 'Vipassana Meditation: A Complete Guide', instructor: 'Thich Nhat Hanh', level: 'Intermediate', duration: '8 weeks', price: 49, slug: 'vipassana-meditation', category: 'Meditation' },
  { title: 'Tibetan Buddhist Philosophy', instructor: 'Pema Chödrön', level: 'Advanced', duration: '12 weeks', price: 79, slug: 'tibetan-philosophy', category: 'Philosophy' },
  { title: 'Pali Language for Beginners', instructor: 'Prof. Ananda Kumar', level: 'Beginner', duration: '10 weeks', price: 39, slug: 'pali-language', category: 'Language' },
  { title: 'Mindfulness in Daily Life', instructor: 'Ajahn Brahm', level: 'Beginner', duration: '4 weeks', price: 0, slug: 'mindfulness-daily', category: 'Meditation' },
  { title: 'The Bodhisattva Path', instructor: 'Bhikkhu Bodhi', level: 'Intermediate', duration: '10 weeks', price: 59, slug: 'bodhisattva-path', category: 'Philosophy' },
  { title: 'Buddhist History & Heritage', instructor: 'Dr. Priya Sharma', level: 'Beginner', duration: '8 weeks', price: 29, slug: 'buddhist-history', category: 'History' },
  { title: 'Metta: Loving-Kindness Meditation', instructor: 'Bhante Gunaratana', level: 'Beginner', duration: '4 weeks', price: 0, slug: 'metta-meditation', category: 'Meditation' },
]

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced']
const CATEGORIES = ['All', 'Foundation', 'Meditation', 'Philosophy', 'Language', 'History']

export default function Courses() {
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('All')
  const [category, setCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')

  const filtered = COURSES_DATA.filter((c) => {
    const ms = c.title.toLowerCase().includes(search.toLowerCase())
    const ml = level === 'All' || c.level === level
    const mc = category === 'All' || c.category === category
    const mp = priceFilter === 'All' || (priceFilter === 'Free' ? c.price === 0 : c.price > 0)
    return ms && ml && mc && mp
  })

  return (
    <div>
      <PageHero
        title="Buddhist Courses"
        subtitle="Learn from renowned monks and scholars. Free and paid courses for all levels, in multiple languages."
        breadcrumbs={[{ label: 'Education', href: '/education' }, { label: 'Courses' }]}
      />
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-48">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
            </div>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="input-field w-40">
              {LEVELS.map((l) => <option key={l}>{l}</option>)}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-40">
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="input-field w-36">
              {['All', 'Free', 'Paid'].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <p className="text-sm text-[#6B6B6B] mb-6">{filtered.length} courses found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c) => <CourseCard key={c.slug} {...c} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
