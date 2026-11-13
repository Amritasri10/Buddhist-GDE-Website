import PageHero from '../components/ui/PageHero'

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero title="Privacy Policy" subtitle="How we collect, use, and protect your personal information." breadcrumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-3xl">
          <div className="card p-8 md:p-12 bg-white prose max-w-none text-[#2C2C2C]">
            <p className="text-xs text-[#9CA3AF] mb-8">Last updated: November 2026</p>

            {[
              { title: '1. Information We Collect', body: 'We collect information you provide directly (name, email, profile details), information generated through your use of the platform (bookings, orders, course progress), and technical data (device type, browser, IP address for security purposes).' },
              { title: '2. How We Use Your Information', body: 'We use your information to provide and improve our services, process bookings and payments, send relevant notifications and updates, ensure platform security, and comply with legal obligations.' },
              { title: '3. Data Sharing', body: 'We do not sell your personal data. We share data with service partners (monks, monasteries, vendors) only as needed to fulfill your bookings or orders. All partners are bound by data protection agreements.' },
              { title: '4. Payment Data', body: 'We never store payment card details. All payment processing is handled by certified, country-appropriate payment gateways. We only store transaction references and status.' },
              { title: '5. Sensitive Data', body: 'Monk verification documents and healthcare-related information are treated with the highest level of confidentiality and are accessible only to authorized administrators.' },
              { title: '6. Cookies', body: 'We use essential cookies for authentication and security, and optional analytics cookies to improve the platform. You can manage cookie preferences in your account settings.' },
              { title: '7. Your Rights', body: 'You have the right to access, correct, delete, or export your personal data at any time. Contact our data protection team at privacy@buddhistglobal.org.' },
              { title: '8. Contact', body: 'For privacy questions or requests, email privacy@buddhistglobal.org. We respond within 72 hours.' },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="text-lg font-bold text-[#2C2C2C] mb-3">{section.title}</h2>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
