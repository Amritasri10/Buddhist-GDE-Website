import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'

const COUNTRIES = [
  { name: 'India', emoji: '🇮🇳', sites: 'Bodh Gaya, Sarnath, Kushinagar, Lumbini (border), Nalanda, Rajgir', desc: 'The birthplace of Buddhism. Home to the most sacred Buddhist sites in the world.' },
  { name: 'Nepal', emoji: '🇳🇵', sites: 'Lumbini (birthplace of Buddha), Boudhanath, Swayambhunath', desc: 'Birthplace of the Buddha — Lumbini is a UNESCO World Heritage Site.' },
  { name: 'Sri Lanka', emoji: '🇱🇰', sites: 'Temple of the Tooth (Kandy), Anuradhapura, Polonnaruwa', desc: 'An ancient Theravada stronghold with over 2,000 years of continuous Buddhist heritage.' },
  { name: 'Thailand', emoji: '🇹🇭', sites: 'Wat Pho, Wat Phra Kaew, Chiang Mai temples, Sukhothai', desc: 'Over 40,000 Buddhist temples across the country. Theravada Buddhism is the state religion.' },
  { name: 'Myanmar', emoji: '🇲🇲', sites: 'Shwedagon Pagoda, Bagan, Mandalay Hill', desc: 'Home to the golden Shwedagon Pagoda and thousands of ancient stupas in Bagan.' },
  { name: 'Japan', emoji: '🇯🇵', sites: 'Senso-ji, Ryoan-ji, Todai-ji, Nara, Kyoto temples', desc: 'A rich tradition of Zen, Pure Land, and Nichiren Buddhism with exquisite temple architecture.' },
  { name: 'Tibet / China', emoji: '🇨🇳', sites: 'Potala Palace, Jokhang Temple, Labrang Monastery', desc: 'The heartland of Vajrayana Buddhism with the Potala Palace as a world icon.' },
  { name: 'Bhutan', emoji: '🇧🇹', sites: "Paro Taktsang (Tiger's Nest), Punakha Dzong", desc: 'The only country with Vajrayana Buddhism as the official state religion.' },
  { name: 'Cambodia', emoji: '🇰🇭', sites: 'Angkor Wat, Angkor Thom, Phnom Penh temples', desc: 'Ancient Khmer Buddhist architecture at Angkor Wat, a UNESCO World Heritage Site.' },
  { name: 'South Korea', emoji: '🇰🇷', sites: 'Bulguksa, Haeinsa, Tongdosa temples', desc: 'Deep Mahayana and Zen (Seon) tradition with ancient mountain monasteries.' },
]

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
