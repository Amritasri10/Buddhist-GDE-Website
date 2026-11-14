import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { Link } from 'react-router-dom'

const FESTIVALS = [
  { name: 'Vesak (Buddha Day)', date: 'Full moon of May', countries: 'Global', desc: 'The most important Buddhist festival celebrating Buddha\'s birth, enlightenment, and parinirvana.', icon: '🌸' },
  { name: 'Vassa (Rains Retreat)', date: 'July–October', countries: 'Southeast Asia', desc: 'A three-month monastic retreat during the monsoon season, observed since the Buddha\'s time.', icon: '🌧️' },
  { name: 'Kathina', date: 'Oct–Nov (after Vassa)', countries: 'Theravada countries', desc: 'A ceremony where laypersons offer robes and supplies to monks at the end of the rains retreat.', icon: '🧡' },
  { name: 'Losar (Tibetan New Year)', date: 'Feb–March', countries: 'Tibet, Bhutan, Nepal', desc: 'The Tibetan Buddhist New Year celebrated with prayers, rituals, and masked dances.', icon: '🎊' },
  { name: 'Loi Krathong', date: 'Full moon of November', countries: 'Thailand', desc: 'Festival of lights on water — floating candle offerings on rivers and lakes.', icon: '🏮' },
  { name: 'Bodhi Day', date: 'December 8', countries: 'Mahayana countries', desc: 'Commemorates the day Siddhartha Gautama attained enlightenment under the Bodhi tree.', icon: '🌳' },
  { name: "Sangha Day (Magha Puja)", date: 'Full moon of February', countries: 'Southeast Asia', desc: 'Celebrates the spontaneous gathering of 1,250 enlightened disciples before the Buddha.', icon: '☸️' },
  { name: 'Diwali (Buddhist context)', date: 'October–November', countries: 'India, Nepal', desc: 'Marks Emperor Ashoka\'s conversion to Buddhism and the return of the Buddha from Trayastrimsha Heaven.', icon: '🪔' },
]

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
