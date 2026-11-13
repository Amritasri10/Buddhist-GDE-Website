import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { DonationCard } from '../components/ui/Card'

const CAMPAIGNS = [
  { title: 'Rebuild Ancient Vihara in Sri Lanka', raised: 42000, goal: 80000, description: 'Help restore a 600-year-old monastery damaged by flooding.', slug: 'rebuild-vihara-sri-lanka' },
  { title: 'Buddhist School for Orphans — Nepal', raised: 28500, goal: 50000, description: 'Provide free education and shelter for orphaned children.', slug: 'school-nepal' },
  { title: 'Dharma Books Distribution Project', raised: 15000, goal: 30000, description: 'Distribute free Buddhist literature across Southeast Asia.', slug: 'dharma-books' },
  { title: 'Medical Camp for Rural Communities', raised: 9000, goal: 25000, description: 'Free medical services near pilgrimage sites in India and Nepal.', slug: 'medical-camp' },
  { title: 'Solar Power for Remote Monastery', raised: 35000, goal: 60000, description: 'Bring renewable energy to a remote Tibetan monastery.', slug: 'solar-monastery' },
  { title: 'Pali Language Scholarship Fund', raised: 7500, goal: 20000, description: 'Support students studying Pali and Buddhist scriptures.', slug: 'pali-scholarship' },
]

export default function Donations() {
  return (
    <div>
      <PageHero
        title="Donation Campaigns"
        subtitle="Support Buddhist monasteries, education, and humanitarian projects. Every contribution makes a difference."
        breadcrumbs={[{ label: 'Donations' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="bg-[#FEF9EE] border border-[#E8C55A]/50 rounded-xl p-6 mb-10 text-center max-w-2xl mx-auto">
            <p className="text-sm text-[#6B6B6B]">
              <strong className="text-[#2C2C2C]">Legal Notice:</strong> All donation campaigns are verified and approved. Live payment collection requires legal and tax approval per country. This platform shows approved campaigns only.
            </p>
          </div>
          <SectionHeader eyebrow="Give Back" title="Active Campaigns" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGNS.map((c) => <DonationCard key={c.slug} {...c} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
