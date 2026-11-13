import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Star, Clock, Globe } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

export default function TempleDetail() {
  const { slug } = useParams()
  const name = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Temple'

  return (
    <div>
      <PageHero
        title={name}
        subtitle="Temple & Monastery Profile"
        breadcrumbs={[{ label: 'Temples', href: '/temples' }, { label: name }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <Link to="/temples" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Temples
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-8 bg-white">
                <div className="w-full h-72 bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5] rounded-xl flex items-center justify-center mb-6 text-8xl opacity-40">⛩</div>
                <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">{name}</h2>
                <p className="text-[#6B6B6B] leading-relaxed">
                  This sacred site holds deep spiritual significance for Buddhist practitioners worldwide.
                  Thousands of pilgrims visit each year to pay respects, meditate, and connect with the
                  living tradition of the Dharma. The temple complex features ancient architecture,
                  resident monks, and regular religious ceremonies open to visitors.
                </p>
              </div>
              <div className="card p-6 bg-white">
                <h3 className="font-bold text-[#2C2C2C] mb-4">Visiting Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { icon: Clock, label: 'Opening Hours', val: '5:00 AM – 9:00 PM' },
                    { icon: Globe, label: 'Tradition', val: 'Theravada Buddhism' },
                    { icon: MapPin, label: 'Location', val: 'Asia' },
                    { icon: Star, label: 'Rating', val: '4.8 / 5.0' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon size={16} className="text-[#C9972A] mt-0.5" />
                      <div><div className="text-[#9CA3AF] text-xs">{item.label}</div><div className="font-medium text-[#2C2C2C]">{item.val}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card p-6 bg-white">
                <h3 className="font-semibold text-[#2C2C2C] mb-4">Book a Ceremony Here</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">Connect with the monks at this monastery to book a ceremony or service.</p>
                <Link to="/bookings" className="btn-primary w-full justify-center">Book Now</Link>
              </div>
              <div className="card p-6 bg-white">
                <h3 className="font-semibold text-[#2C2C2C] mb-4">Nearby Hotels</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">Find Buddhist-friendly accommodation near this temple.</p>
                <Link to="/hotels" className="btn-secondary w-full justify-center">View Hotels</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
