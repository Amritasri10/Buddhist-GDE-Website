import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'
import { CEREMONY_SERVICES } from '../../data/buddhism/rituals'

export default function Rituals() {
  return (
    <div>
      <PageHero
        title="Rituals & Ceremony Services"
        subtitle="Connect with qualified monks for traditional Buddhist ceremonies, rituals, and spiritual services."
        breadcrumbs={[{ label: 'Rituals & Ceremonies' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Services" title="Available Ceremonies" subtitle="All ceremonies are performed by verified, ordained Buddhist monks." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CEREMONY_SERVICES.map((s) => (
              <div key={s.name} className="card p-6 bg-white group hover:border-[#C9972A]/50 transition-colors">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors">{s.name}</h3>
                <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-[#9CA3AF]">⏱ {s.duration}</span>
                  <span className="font-semibold text-[#C9972A]">{s.price}</span>
                </div>
                <Link to="/bookings" className="btn-secondary text-sm py-2 w-full justify-center">Book This Service</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/bookings" className="btn-primary text-lg px-8 py-4">
              Book a Ceremony Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
