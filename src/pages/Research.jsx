import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

const PAPERS = [
  { title: 'Mindfulness-Based Stress Reduction: Buddhist Origins and Clinical Applications', author: 'Dr. Sarah Chen', category: 'Psychology', year: '2026', status: 'Published' },
  { title: 'The Role of Abhidhamma in Early Buddhist Thought', author: 'Prof. Ananda Kumar', category: 'Philosophy', year: '2025', status: 'Published' },
  { title: 'Buddhist Environmental Ethics and Climate Change', author: 'Dr. Pema Dorje', category: 'Ethics', year: '2026', status: 'Published' },
  { title: 'Pali Manuscript Traditions of Southeast Asia', author: 'Dr. Nari Thongsuk', category: 'Philology', year: '2025', status: 'Published' },
  { title: 'Neuroscience of Meditation: A Comparative Study', author: 'Dr. Ravi Sharma', category: 'Neuroscience', year: '2026', status: 'Published' },
  { title: 'Buddhist Modernism in Diaspora Communities', author: 'Prof. Emma Williams', category: 'Sociology', year: '2025', status: 'Published' },
]

export default function Research() {
  return (
    <div>
      <PageHero
        title="Research & Scholar Portal"
        subtitle="A dedicated platform for Buddhist scholars, researchers, and academics worldwide."
        breadcrumbs={[{ label: 'Research' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {[{ n: '12,000+', l: 'Research Papers' }, { n: '3,500+', l: 'Scholars' }, { n: '200+', l: 'Journals' }, { n: '80+', l: 'Countries' }].map((s) => (
              <div key={s.l} className="card p-6 text-center bg-white">
                <div className="text-3xl font-bold text-[#C9972A] mb-1">{s.n}</div>
                <div className="text-sm text-[#6B6B6B]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input type="text" placeholder="Search research papers..." className="input-field pl-10" />
            </div>
            <select className="input-field sm:w-44"><option>All Categories</option><option>Psychology</option><option>Philosophy</option><option>History</option></select>
          </div>
          <SectionHeader eyebrow="Recent" title="Featured Publications" center={false} />
          <div className="space-y-4 mb-10">
            {PAPERS.map((p) => (
              <div key={p.title} className="card p-6 bg-white flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1 hover:text-[#C9972A] cursor-pointer transition-colors">{p.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[#6B6B6B]">
                    <span>By {p.author}</span>
                    <span>·</span><span>{p.year}</span>
                    <span>·</span><span className="badge-gold text-xs">{p.category}</span>
                  </div>
                </div>
                <span className="badge-green text-xs flex-shrink-0">{p.status}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/research/publications" className="btn-primary">View All Publications</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
