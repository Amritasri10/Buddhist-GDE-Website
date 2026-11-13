import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

export default function Traditions() {
  return (
    <div>
      <PageHero
        title="Buddhist Traditions"
        subtitle="Theravada, Mahayana, and Vajrayana — three great vehicles of Buddhist practice and philosophy."
        breadcrumbs={[{ label: 'Traditions' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-5xl">
          {[
            {
              name: 'Theravada', subtitle: '"School of the Elders"', emoji: '🌿', color: 'border-green-200 bg-green-50',
              overview: 'Theravada is the oldest surviving Buddhist school, based on the Pali Canon. It emphasizes individual liberation through meditative practice, ethical conduct, and monastic discipline.',
              practices: ['Vipassana meditation', 'Metta (loving-kindness)', 'Pali chanting', 'Dana (generosity)', 'Precepts & Vinaya'],
              countries: ['Sri Lanka', 'Thailand', 'Myanmar', 'Cambodia', 'Laos'],
              texts: 'Pali Tipitaka — Vinaya, Sutta, Abhidhamma Pitakas',
            },
            {
              name: 'Mahayana', subtitle: '"The Great Vehicle"', emoji: '🌺', color: 'border-blue-200 bg-blue-50',
              overview: 'Mahayana Buddhism emphasizes the Bodhisattva ideal — the aspiration to attain Buddhahood for the benefit of all sentient beings. It includes Zen, Pure Land, Tiantai, and Huayan schools.',
              practices: ['Bodhicitta cultivation', 'Six Paramitas', 'Sunyata (emptiness) meditation', 'Nembutsu chanting', 'Koan practice (Zen)'],
              countries: ['China', 'Japan', 'South Korea', 'Vietnam', 'Taiwan'],
              texts: 'Heart Sutra, Diamond Sutra, Lotus Sutra, Prajnaparamita texts',
            },
            {
              name: 'Vajrayana', subtitle: '"The Diamond Vehicle"', emoji: '💎', color: 'border-purple-200 bg-purple-50',
              overview: 'Vajrayana incorporates Tantric practices including visualizations, mantras, mudras, and guru devotion within the Mahayana framework. It is prominent in Tibetan, Mongolian, and Himalayan Buddhist cultures.',
              practices: ['Deity yoga / Visualization', 'Mantra recitation', 'Mandala offerings', 'Guru devotion', 'Dzogchen & Mahamudra'],
              countries: ['Tibet', 'Bhutan', 'Mongolia', 'Nepal', 'Parts of India & China'],
              texts: 'Kangyur, Tengyur, Tantras, Terma (treasure texts)',
            },
          ].map((t) => (
            <div key={t.name} className={`card p-8 mb-8 border-2 ${t.color} bg-white`}>
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="text-7xl">{t.emoji}</div>
                <div className="flex-1">
                  <div className="text-[#C9972A] text-sm font-semibold mb-1">{t.subtitle}</div>
                  <h2 className="text-3xl font-bold text-[#2C2C2C] mb-3">{t.name}</h2>
                  <p className="text-[#6B6B6B] leading-relaxed mb-5">{t.overview}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] text-sm mb-2">Key Practices</h4>
                      <ul className="space-y-1">{t.practices.map((p) => <li key={p} className="text-sm text-[#6B6B6B] flex items-center gap-2"><span className="text-[#C9972A]">•</span>{p}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] text-sm mb-2">Practiced In</h4>
                      <ul className="space-y-1">{t.countries.map((c) => <li key={c} className="text-sm text-[#6B6B6B] flex items-center gap-2"><span className="text-[#C9972A]">•</span>{c}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] text-sm mb-2">Key Texts</h4>
                      <p className="text-sm text-[#6B6B6B]">{t.texts}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <Link to="/knowledge" className="btn-primary">Explore More Knowledge</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
