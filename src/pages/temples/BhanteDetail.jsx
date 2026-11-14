import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Star } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

export default function BhanteDetail() {
  const { slug } = useParams()
  const name = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Bhante'

  return (
    <div>
      <PageHero
        title={name}
        subtitle="Monk & Teacher Profile"
        breadcrumbs={[{ label: 'Bhante Directory', href: '/bhantes' }, { label: name }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <Link to="/bhantes" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Directory
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card p-8 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-28 h-28 rounded-full border-4 border-[#E8C55A] bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5] flex items-center justify-center text-5xl flex-shrink-0">🧘</div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2C2C2C] mb-1">{name}</h2>
                  <span className="badge-gold text-xs mb-2 inline-block">Theravada</span>
                  <p className="text-sm text-[#6B6B6B] flex items-center gap-1 mt-1"><MapPin size={13} /> Location, Country</p>
                </div>
              </div>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">
                An ordained Buddhist monk with deep experience in meditation and Dharma teaching.
                Available for spiritual guidance, ceremony bookings, and online consultations.
                Dedicated to making Buddhist practice accessible to practitioners worldwide.
              </p>
              <h3 className="font-bold text-[#2C2C2C] mb-3">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Vipassana Meditation', 'Metta Practice', 'Buddhist Ethics', 'Dharma Teaching', 'Pali Studies'].map((tag) => (
                  <span key={tag} className="badge bg-[#F5EDD6] text-[#2C2C2C] text-xs">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#C9972A] mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                <span className="text-sm text-[#6B6B6B] ml-1">4.9 (128 reviews)</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card p-6 bg-white">
                <h3 className="font-semibold text-[#2C2C2C] mb-4">Book a Service</h3>
                <div className="space-y-3 text-sm mb-5">
                  {['Religious Consultation — $40', 'Puja Ceremony — From $80', 'Meditation Guidance — $60'].map((s) => (
                    <div key={s} className="flex justify-between text-[#2C2C2C]"><span>{s.split('—')[0]}</span><span className="text-[#C9972A] font-medium">{s.split('—')[1]}</span></div>
                  ))}
                </div>
                <Link to="/bookings" className="btn-primary w-full justify-center">Book Now</Link>
              </div>
              <div className="card p-6 bg-white">
                <h3 className="font-semibold text-[#2C2C2C] mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Pali', 'Sinhala'].map((l) => <span key={l} className="badge bg-[#F3F4F6] text-[#374151] text-xs">{l}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
