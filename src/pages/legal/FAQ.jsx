import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

const FAQS = [
  {
    q: 'What is the Buddhist Global Digital Ecosystem?',
    a: 'It is a unified digital platform connecting Buddhist institutions, monks, researchers, educators, businesses, and communities worldwide. You can discover temples, book ceremonies, take courses, shop for Buddhist products, and much more.'
  },
  {
    q: 'Is registration required to browse the website?',
    a: 'No. All public content — temples, monks, knowledge articles, events, and more — is freely accessible without an account. Registration is required for bookings, purchases, course enrollment, and community participation.'
  },
  {
    q: 'How do I book a Buddhist ceremony?',
    a: 'Go to the Bookings page, choose a service (puja, house blessing, wedding, etc.), select your preferred date and location, and submit your request. A verified monk or monastery will confirm within 24–48 hours.'
  },
  {
    q: 'Are the monks on this platform verified?',
    a: 'Yes. All monks and monasteries go through an identity and institutional verification process by our administrative team before their profiles are made public.'
  },
  {
    q: 'Can my monastery or institution register on the platform?',
    a: 'Yes. Monasteries, schools, travel agencies, hotels, healthcare providers, and other Buddhist businesses can register as partners. Visit our Register page to get started.'
  },
  {
    q: 'What payment methods are supported?',
    a: 'We support country-appropriate payment gateways. Payment options vary by region. All transactions are secured and processed through verified payment providers. We never store card details.'
  },
  {
    q: 'Is the platform available in multiple languages?',
    a: 'Yes. The platform supports English, Hindi, Pali, Sanskrit, Chinese, Thai, Sinhala, Japanese, and Nepali, with more languages being added. Use the language selector in the header.'
  },
  {
    q: 'How can I submit a research paper?',
    a: 'Create a researcher account, complete your academic profile, and submit your paper through the Research Portal. All submissions go through a review process before publication.'
  },
  {
    q: 'Are the courses free?',
    a: 'Both free and paid courses are available. Free courses are accessible without payment. Paid courses require an account and payment. Premium members get access to exclusive course content.'
  },
  {
    q: 'How do I report inappropriate content?',
    a: 'Use the "Report" button available on community posts, profiles, and content pages. Our moderation team reviews all reports promptly.'
  },
]

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
