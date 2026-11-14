import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { Search, MapPin } from 'lucide-react'
import { useState } from 'react'
import { PROVIDERS } from '../../data/services/healthcare'

export default function Healthcare() {
  const [search, setSearch] = useState('')
  const filtered = PROVIDERS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHero
        title="Healthcare Directory"
        subtitle="Find hospitals, clinics, and wellness providers near Buddhist destinations worldwide."
        breadcrumbs={[{ label: 'Healthcare' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="bg-[#FEF9EE] border border-[#E8C55A]/50 rounded-xl p-5 mb-10 text-sm text-[#6B6B6B] max-w-2xl mx-auto text-center">
            <strong className="text-[#2C2C2C]">Important:</strong> This directory is for discovery and appointment booking only. It does not provide medical records, diagnoses, or clinical advice.
          </div>
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search providers..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.name} className="card p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center text-2xl flex-shrink-0">🏥</div>
                  <div>
                    <h3 className="font-bold text-[#2C2C2C] mb-1">{p.name}</h3>
                    <span className="badge bg-[#F3F4F6] text-[#374151] text-xs mb-2 inline-block">{p.type}</span>
                    <p className="text-xs text-[#6B6B6B] flex items-center gap-1 mb-1"><MapPin size={11} />{p.location}</p>
                    <p className="text-xs text-[#9CA3AF]">{p.specialty}</p>
                  </div>
                </div>
                <button className="btn-secondary w-full justify-center mt-4 text-sm py-2">Book Appointment</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
