import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { FAQS } from '../../data/legal/faq'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FEF9EE] transition-colors"
      >
        <span className="font-semibold text-[#2C2C2C] text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#C9972A] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#6B6B6B] text-sm leading-relaxed border-t border-[#F5EDD6]">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the Buddhist Global Digital Ecosystem."
        breadcrumbs={[{ label: 'FAQ' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((item) => (
              <FAQItem key={item.q} {...item} />
            ))}
          </div>
          <div className="mt-12 card p-8 bg-white text-center">
            <div className="text-4xl mb-3">🙏</div>
            <h3 className="font-bold text-[#2C2C2C] text-lg mb-2">Still have a question?</h3>
            <p className="text-[#6B6B6B] text-sm mb-5">Our support team is here to help. Send us a message and we'll respond within 24 hours.</p>
            <a href="/contact" className="btn-primary justify-center">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  )
}
