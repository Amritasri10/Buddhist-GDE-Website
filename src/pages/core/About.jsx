import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div>
      <PageHero
        title="About the Ecosystem"
        subtitle="A unified global platform for Buddhist communities, institutions, and seekers worldwide."
        breadcrumbs={[{ label: 'About' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-4xl">
          <SectionHeader eyebrow="Our Mission" title="Uniting the World of Dharma" />
          <div className="prose max-w-none text-[#2C2C2C] text-lg leading-relaxed space-y-6">
            <p>
              The <strong>Buddhist Global Digital Ecosystem</strong> is a comprehensive digital platform that brings
              Buddhist religious institutions, monks (Bhantes), monasteries, researchers, educational institutions,
              businesses, service providers, travelers, and general users into one unified space.
            </p>
            <p>
              Rooted in the values of compassion, wisdom, and community, our platform is designed to make
              Buddhist knowledge, resources, and services accessible to anyone, anywhere in the world —
              from a monk in Myanmar to a student in New York, from a monastery in Tibet to a pilgrim traveling to Bodh Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { icon: '🌍', title: 'Global Reach', desc: 'Serving Buddhist communities across 50+ countries in 10+ languages.' },
              { icon: '🤝', title: 'All Traditions', desc: 'Welcoming Theravada, Mahayana, and Vajrayana practitioners equally.' },
              { icon: '💻', title: 'Digital First', desc: 'Modern technology in service of ancient wisdom and spiritual growth.' },
            ].map((v) => (
              <div key={v.title} className="card p-6 text-center bg-white">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{v.title}</h3>
                <p className="text-sm text-[#6B6B6B]">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Buddhist Knowledge & Education Portal',
                'Ceremony & Ritual Booking System',
                'Temple & Monastery Directory',
                'Bhante & Monk Profiles',
                'Buddhist E-Commerce Marketplace',
                'Audio & Video Dharma Library',
                'Travel & Pilgrimage Planning',
                'Hotels & Accommodation Booking',
                'Healthcare & Wellness Directory',
                'Events & Festival Calendar',
                'Research & Scholar Portal',
                'Donation & Charity Campaigns',
                'Community Forums & Discussions',
                'Business Partner Network',
                'Buddhist Wedding Services',
                'Membership & Loyalty Program',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#2C2C2C]">
                  <span className="text-[#C9972A] text-lg">☸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link to="/about-buddhism" className="btn-primary">Learn About Buddhism <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
