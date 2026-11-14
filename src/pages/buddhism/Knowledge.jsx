import { useState } from 'react'
import { Search, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'

const ARTICLES = [
  { title: 'The Four Noble Truths Explained', category: 'Foundations', readTime: '8 min', slug: 'four-noble-truths', excerpt: 'An in-depth exploration of the core teachings that form the basis of all Buddhist practice.' },
  { title: 'Understanding the Noble Eightfold Path', category: 'Practice', readTime: '12 min', slug: 'eightfold-path', excerpt: 'How the eight aspects of the path work together to lead practitioners toward liberation.' },
  { title: 'The Three Marks of Existence', category: 'Philosophy', readTime: '10 min', slug: 'three-marks', excerpt: 'Impermanence, suffering, and non-self — the fundamental characteristics of conditioned existence.' },
  { title: 'Introduction to Dependent Origination', category: 'Philosophy', readTime: '15 min', slug: 'dependent-origination', excerpt: 'The twelve links of dependent origination and their role in perpetuating the cycle of rebirth.' },
  { title: 'Buddhist Ethics: The Five Precepts', category: 'Ethics', readTime: '7 min', slug: 'five-precepts', excerpt: 'Understanding the foundational ethical guidelines for Buddhist lay practitioners.' },
  { title: 'The Pali Canon: A Guide', category: 'Scriptures', readTime: '20 min', slug: 'pali-canon', excerpt: 'An overview of the oldest complete collection of Buddhist scriptures in the Theravada tradition.' },
  { title: 'History of Buddhism: From India to Asia', category: 'History', readTime: '18 min', slug: 'buddhism-history', excerpt: 'How Buddhism spread from its origins in northeast India to become a global religion.' },
  { title: 'Mindfulness: Origins and Practice', category: 'Practice', readTime: '9 min', slug: 'mindfulness-origins', excerpt: 'Tracing sati (mindfulness) from its roots in the Pali suttas to modern mindfulness movements.' },
  { title: 'Buddhist Art and Iconography', category: 'Culture', readTime: '14 min', slug: 'buddhist-art', excerpt: 'Symbols, mudras, and imagery in Buddhist art across different traditions and regions.' },
]

const CATEGORIES = ['All', 'Foundations', 'Practice', 'Philosophy', 'Ethics', 'Scriptures', 'History', 'Culture']

export default function Knowledge() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = ARTICLES.filter((a) => {
    const ms = a.title.toLowerCase().includes(search.toLowerCase())
    const mc = category === 'All' || a.category === category
    return ms && mc
  })

  return (
    <div>
      <PageHero
        title="Buddhist Knowledge Hub"
        subtitle="A comprehensive repository of Buddhist teachings, philosophy, history, and culture."
        breadcrumbs={[{ label: 'Knowledge Hub' }]}
      />
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
          </div>
        </div>
        <div className="container-custom pb-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${category === c ? 'bg-[#C9972A] text-white' : 'bg-[#F5EDD6] text-[#2C2C2C] hover:bg-[#E8C55A]/30'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} to={`/knowledge/${a.slug}`} className="card p-6 group bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-gold text-xs">{a.category}</span>
                  <span className="text-xs text-[#9CA3AF]">{a.readTime} read</span>
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors leading-snug">{a.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center gap-1 text-[#C9972A] text-sm mt-4 font-medium">
                  Read more <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
