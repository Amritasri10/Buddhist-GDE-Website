import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { BOOKING_SERVICES } from '../../data/temples/bookings'

export default function Bookings() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageHero
        title="Book a Buddhist Ceremony"
        subtitle="Connect with qualified monks and monasteries to book rituals, ceremonies, and spiritual services."
        breadcrumbs={[{ label: 'Bookings' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Services" title="Choose a Service" subtitle="Select the type of ceremony or service you'd like to book." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {BOOKING_SERVICES.map((s) => (
              <button
                key={s.name}
                onClick={() => setSelected(s)}
                className={`card p-6 text-left group transition-all ${selected?.name === s.name ? 'border-[#C9972A] ring-2 ring-[#C9972A]/30' : 'hover:border-[#C9972A]/50'} bg-white`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{s.name}</h3>
                <p className="text-sm text-[#6B6B6B] mb-3">{s.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-[#9CA3AF]"><Clock size={13} />{s.duration}</span>
                  <span className="font-semibold text-[#C9972A]">{s.price}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Booking form */}
          <div className="max-w-2xl mx-auto card p-8 bg-white">
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">
              {selected ? `Book: ${selected.name}` : 'Select a service above to book'}
            </h3>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Service</label>
                <input
                  type="text"
                  value={selected?.name || ''}
                  readOnly
                  placeholder="Select a service above"
                  className="input-field bg-[#F9F7F2]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Preferred Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Preferred Time</label>
                  <input type="time" className="input-field" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Location / Address</label>
                <input type="text" placeholder="Your city, country, or specific address" className="input-field" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Additional Notes</label>
                <textarea rows={3} placeholder="Any special requirements or preferences..." className="input-field resize-none" />
              </div>
              <div className="bg-[#FEF9EE] border border-[#E8C55A]/50 rounded-lg p-4 text-sm text-[#6B6B6B]">
                <strong className="text-[#2C2C2C]">Note:</strong> You need to be logged in to complete your booking.
                A monk or monastery will confirm availability and details within 24–48 hours.
              </div>
              <Link to="/login" className="btn-primary w-full justify-center">
                Login to Book <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
