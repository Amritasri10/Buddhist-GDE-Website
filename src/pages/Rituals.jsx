import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  { icon: '🕯️', name: 'Buddhist Puja & Prayer', duration: '1–2 hrs', price: 'From $50', desc: 'Traditional puja ceremony performed by ordained monks with chanting, offerings, and blessings.' },
  { icon: '🔔', name: 'Chanting & Blessing', duration: '1–3 hrs', price: 'From $80', desc: 'Sacred chanting ceremonies for blessings, healing, protection, and merit-making.' },
  { icon: '🏠', name: 'House Blessing', duration: '2–3 hrs', price: 'From $100', desc: 'Monks bless your home with puja, chanting, water ceremony, and thread tying.' },
  { icon: '👶', name: 'Birth Ceremony', duration: '2 hrs', price: 'From $120', desc: 'Welcoming a new life with traditional Buddhist naming and blessing ceremonies.' },
  { icon: '💒', name: 'Wedding Blessing', duration: '2–4 hrs', price: 'From $200', desc: 'Sacred Buddhist wedding ceremony with monks, chanting, and traditional rituals.' },
  { icon: '🕊️', name: 'Funeral & Memorial', duration: '3–5 hrs', price: 'From $150', desc: 'Compassionate funeral rites and merit-transfer chanting for the departed.' },
  { icon: '🧘', name: 'Meditation Retreat', duration: '1–10 days', price: 'From $300', desc: 'Guided residential or day meditation retreats with qualified teachers.' },
  { icon: '📿', name: 'Religious Consultation', duration: '1 hour', price: 'From $40', desc: 'One-on-one Dharma guidance and spiritual counseling from an experienced monk.' },
  { icon: '🏯', name: 'Ordination Ceremony', duration: 'Full day', price: 'Contact us', desc: 'Full ceremonial support for novice or higher ordination rites.' },
  { icon: '🎉', name: 'Special Buddhist Event', duration: 'Custom', price: 'Contact us', desc: 'Custom Buddhist events and ceremonies for communities and organizations.' },
]

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
            {SERVICES.map((s) => (
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
