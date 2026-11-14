import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

const PACKAGES = [
  { name: 'Simple Buddhist Blessing', price: 'From $500', includes: ['Monk ceremony (1–2 hrs)', 'Puja & chanting', 'Basic floral arrangements', 'Digital photos'], icon: '🕯️' },
  { name: 'Traditional Buddhist Wedding', price: 'From $2,500', includes: ['Full monk ceremony (3–4 hrs)', 'Venue decoration', 'Catering (50 guests)', 'Photography', 'Wedding coordinator'], icon: '💒' },
  { name: 'Destination Buddhist Wedding', price: 'From $8,000', includes: ['Sacred site ceremony', 'Full venue & catering', 'Photography & videography', 'Hotel accommodation', 'Travel coordination', 'Dedicated planner'], icon: '✈️' },
]

export default function Weddings() {
  return (
    <div>
      <PageHero
        title="Buddhist Wedding Services"
        subtitle="Sacred Buddhist wedding ceremonies performed by ordained monks at beautiful venues worldwide."
        breadcrumbs={[{ label: 'Buddhist Weddings' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Packages" title="Wedding Packages" subtitle="From intimate blessings to full destination weddings at sacred Buddhist sites." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {PACKAGES.map((p) => (
              <div key={p.name} className="card p-7 bg-white text-center">
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{p.name}</h3>
                <div className="text-2xl font-bold text-[#C9972A] mb-4">{p.price}</div>
                <ul className="space-y-2 mb-6 text-left">
                  {p.includes.map((item) => <li key={item} className="text-sm text-[#6B6B6B] flex items-center gap-2"><span className="text-[#C9972A]">✓</span>{item}</li>)}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">Enquire Now</Link>
              </div>
            ))}
          </div>
          <div className="card p-8 bg-white max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-4 text-center">Also Included in All Packages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Bhante / Monk booking', 'Venue selection assistance', 'Catering options', 'Guest accommodation', 'Transportation', 'Wedding consultation'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#2C2C2C]"><span className="text-[#C9972A]">☸</span>{f}</div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-[#9CA3AF] mt-8">Civil marriage registration is outside platform scope. Our services cover the Buddhist ceremonial aspect only.</p>
        </div>
      </section>
    </div>
  )
}
