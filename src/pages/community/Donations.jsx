import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { DonationCard } from '../../components/ui/Card'
import { CAMPAIGNS } from '../../data/community/donations'

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
