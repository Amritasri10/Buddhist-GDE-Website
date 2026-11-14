import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import SectionHeader from '../../components/ui/SectionHeader'
import { ArrowRight, Check } from 'lucide-react'
import { PLANS } from '../../data/community/membership'

export default function Membership() {
  return (
    <div>
      <PageHero
        title="Membership Plans"
        subtitle="Join the Buddhist Global Digital Ecosystem. Choose the plan that fits your needs."
        breadcrumbs={[{ label: 'Membership' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Plans" title="Choose Your Plan" subtitle="Flexible options for individuals, practitioners, institutions, and businesses." />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`card p-7 border-2 ${plan.color} relative bg-white`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9972A] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.highlight}
                  </div>
                )}
                <h3 className="font-bold text-xl text-[#2C2C2C] mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2C2C2C]">{plan.price}</span>
                  <span className="text-[#6B6B6B] text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#2C2C2C]">
                      <Check size={15} className="text-[#C9972A] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/register" className={`${plan.btnClass} w-full justify-center`}>
                  Get Started <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#9CA3AF] mt-10">
            All plans include a 14-day free trial. No credit card required for Free plan. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
