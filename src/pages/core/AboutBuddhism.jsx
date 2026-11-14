import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { TOPICS, TRADITIONS } from '../../data/core/aboutBuddhism'

export default function AboutBuddhism() {
  return (
    <div>
      <PageHero
        title="Introduction to Buddhism"
        subtitle="Explore the foundational teachings, principles, and practices of one of the world's great wisdom traditions."
        breadcrumbs={[{ label: 'Introduction to Buddhism' }]}
      />

      {/* Overview */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">☸</div>
            <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl mx-auto">
              Buddhism is a philosophy, spiritual practice, and way of life based on the teachings of Siddhartha Gautama —
              the Buddha — who lived in ancient India approximately 2,500 years ago. With over 500 million followers worldwide,
              Buddhism offers a path of wisdom, compassion, and inner peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOPICS.map((t) => (
              <div key={t.title} className="card p-6 bg-white">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-2">{t.title}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{t.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <SectionHeader eyebrow="Schools" title="Major Buddhist Traditions" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRADITIONS.map((t) => (
              <div key={t.name} className="card p-7 bg-white text-center">
                <div className="text-5xl mb-4">🕉️</div>
                <h3 className="text-xl font-bold text-[#7B1C2E] mb-1">{t.name}</h3>
                <p className="text-xs text-[#C9972A] font-semibold mb-4">{t.origin}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{t.desc}</p>
                <p className="text-xs text-[#9CA3AF]"><strong>Practiced in:</strong> {t.countries}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/traditions" className="btn-secondary">Explore All Traditions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Continue Your Journey</h2>
          <p className="text-[#6B6B6B] text-lg mb-8">Dive deeper into Buddhist teachings, scriptures, history, and practice.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/buddha" className="btn-primary">Life of Buddha <ArrowRight size={16} /></Link>
            <Link to="/knowledge" className="btn-secondary">Knowledge Hub</Link>
            <Link to="/scriptures" className="btn-secondary">Scriptures</Link>
            <Link to="/courses" className="btn-secondary">Take a Course</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
