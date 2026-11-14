import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { Link } from 'react-router-dom'
import { FESTIVALS } from '../../data/buddhism/festivals'

export default function Festivals() {
  return (
    <div>
      <PageHero
        title="Buddhist Festivals & Important Dates"
        subtitle="A global calendar of Buddhist festivals, holy days, and significant dates across all traditions."
        breadcrumbs={[{ label: 'Festivals' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Celebrations" title="Major Buddhist Festivals" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FESTIVALS.map((f) => (
              <div key={f.name} className="card p-6 bg-white flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#2C2C2C] mb-1">{f.name}</h3>
                  <div className="flex flex-wrap gap-3 text-xs mb-2">
                    <span className="badge-gold">{f.date}</span>
                    <span className="badge bg-[#F3F4F6] text-[#374151]">{f.countries}</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events" className="btn-primary">View Upcoming Events</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
