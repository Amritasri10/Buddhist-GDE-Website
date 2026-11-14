import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { COUNTRIES } from '../../data/buddhism/heritage'

export default function Heritage() {
  return (
    <div>
      <PageHero
        title="Buddhist Heritage by Country"
        subtitle="Discover the rich Buddhist heritage, sacred sites, and living traditions across Asia and beyond."
        breadcrumbs={[{ label: 'Heritage' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Global Heritage" title="Buddhist Countries & Sacred Sites" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="card p-6 bg-white flex items-start gap-5">
                <span className="text-5xl">{c.emoji}</span>
                <div>
                  <h3 className="font-bold text-[#2C2C2C] text-lg mb-1">{c.name}</h3>
                  <p className="text-sm text-[#6B6B6B] mb-2">{c.desc}</p>
                  <p className="text-xs text-[#C9972A] font-medium">Key sites: {c.sites}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/temples" className="btn-primary">Explore All Temples</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
