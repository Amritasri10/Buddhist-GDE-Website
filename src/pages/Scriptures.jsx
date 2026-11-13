import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

const SCRIPTURES = [
  { name: 'Pali Canon (Tipitaka)', tradition: 'Theravada', desc: 'The oldest complete Buddhist scripture, comprising Vinaya Pitaka (monastic rules), Sutta Pitaka (discourses), and Abhidhamma Pitaka (philosophical analysis).', icon: '📜' },
  { name: 'Mahayana Sutras', tradition: 'Mahayana', desc: 'Includes the Heart Sutra, Diamond Sutra, Lotus Sutra, Vimalakirti Sutra, and many other profound Mahayana texts.', icon: '📚' },
  { name: 'Prajnaparamita Texts', tradition: 'Mahayana', desc: 'The "Perfection of Wisdom" sutras, foundational to both Zen and Tibetan Buddhism, emphasizing emptiness (shunyata).', icon: '🌸' },
  { name: 'Tibetan Kangyur & Tengyur', tradition: 'Vajrayana', desc: 'The vast collection of translated Buddha-word (Kangyur) and commentarial literature (Tengyur) in the Tibetan tradition.', icon: '🏔️' },
  { name: 'Chinese Tripitaka', tradition: 'Mahayana', desc: 'The Chinese Buddhist canon containing thousands of texts translated from Sanskrit, Pali, and Central Asian languages.', icon: '🈚' },
  { name: 'Dhammapada', tradition: 'All', desc: 'One of the most beloved Buddhist texts — 423 verses attributed to the Buddha on ethics, mind, and the path to liberation.', icon: '☸️' },
]

export default function Scriptures() {
  return (
    <div>
      <PageHero
        title="Buddhist Scriptures & Literature"
        subtitle="Explore the sacred texts, canons, and literary traditions of Buddhism across all schools."
        breadcrumbs={[{ label: 'Scriptures' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Sacred Texts" title="Major Buddhist Canons" subtitle="The core scriptural collections of different Buddhist traditions." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCRIPTURES.map((s) => (
              <div key={s.name} className="card p-7 bg-white">
                <div className="text-4xl mb-4">{s.icon}</div>
                <span className="badge-gold text-xs mb-3 inline-block">{s.tradition}</span>
                <h3 className="font-bold text-[#2C2C2C] text-lg mb-2">{s.name}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 card p-8 bg-white max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Digital Scripture Library</h3>
            <p className="text-[#6B6B6B] mb-6">Access translated Buddhist scriptures, suttas, and commentaries. Our digital library is growing — contributions from scholars welcome.</p>
            <div className="flex justify-center gap-4">
              <Link to="/research" className="btn-primary">Research Portal</Link>
              <Link to="/knowledge" className="btn-secondary">Knowledge Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
