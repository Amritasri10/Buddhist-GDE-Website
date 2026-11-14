import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { TIMELINE, CORE_TEACHINGS } from '../../data/buddhism/buddha'

export default function Buddha() {
  return (
    <div>
      <PageHero
        title="Life & Teachings of Gautama Buddha"
        subtitle="The story of Siddhartha Gautama — from royal prince to the Awakened One who changed the world."
        breadcrumbs={[{ label: 'Life of Buddha' }]}
      />

      {/* Overview */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🌸</div>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Siddhartha Gautama, known as the <strong className="text-[#2C2C2C]">Buddha</strong> (meaning "the Awakened One"),
              was born around 563 BCE in Lumbini (modern-day Nepal). A prince who gave up everything in search of truth,
              he attained enlightenment and spent 45 years teaching a path of wisdom and compassion that continues to guide
              hundreds of millions of people worldwide.
            </p>
          </div>

          {/* Timeline */}
          <SectionHeader eyebrow="Biography" title="Life of the Buddha" center={true} />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E2D9C5] hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#C9972A] to-[#7B1C2E] flex items-center justify-center text-2xl shadow-md z-10">
                    {t.icon}
                  </div>
                  <div className="card p-6 flex-1 bg-white">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-[#2C2C2C] text-lg">{t.event}</h3>
                      <span className="badge-gold text-xs ml-2 flex-shrink-0">{t.year}</span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Teachings */}
      <section className="section-pad bg-[#F5EDD6]">
        <div className="container-custom">
          <SectionHeader eyebrow="Dharma" title="Core Teachings" subtitle="The Buddha's essential teachings that form the foundation of Buddhist practice." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CORE_TEACHINGS.map((t) => (
              <div key={t.title} className="card p-6 bg-white text-center">
                <div className="text-4xl mb-3">{t.icon}</div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{t.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about-buddhism" className="btn-primary">Buddhist Teachings <ArrowRight size={16} /></Link>
            <Link to="/knowledge" className="btn-secondary">Knowledge Hub</Link>
            <Link to="/courses" className="btn-secondary">Learn with Courses</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
