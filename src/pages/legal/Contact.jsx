import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact & Support"
        subtitle="We're here to help. Reach out to our team for any questions or support."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card p-8 bg-white">
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">First Name</label>
                    <input type="text" className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Last Name</label>
                    <input type="text" className="input-field" placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Email</label>
                  <input type="email" className="input-field" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Subject</label>
                  <select className="input-field">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Booking Help</option>
                    <option>Report an Issue</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Message</label>
                  <textarea rows={5} className="input-field resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', info: 'contact@buddhistglobal.org', sub: 'support@buddhistglobal.org' },
                  { icon: Phone, title: 'Phone', info: '+1 (800) DHARMA-01', sub: 'Mon–Fri, 9am–6pm UTC' },
                  { icon: MapPin, title: 'Headquarters', info: 'Bodh Gaya, Bihar, India', sub: 'Global offices in 10 countries' },
                  { icon: Clock, title: 'Support Hours', info: '24/7 Online Support', sub: 'Phone: Mon–Fri, 9am–6pm UTC' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-[#C9972A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#2C2C2C]">{item.title}</div>
                      <div className="text-[#2C2C2C] text-sm">{item.info}</div>
                      <div className="text-[#9CA3AF] text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 card p-6 bg-[#F5EDD6]">
                <h4 className="font-semibold text-[#2C2C2C] mb-3">Partner or Institutional Inquiries</h4>
                <p className="text-sm text-[#6B6B6B]">
                  For monastery registrations, business partnerships, researcher onboarding, or institutional accounts,
                  please email <a href="mailto:partners@buddhistglobal.org" className="text-[#C9972A] hover:underline">partners@buddhistglobal.org</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
