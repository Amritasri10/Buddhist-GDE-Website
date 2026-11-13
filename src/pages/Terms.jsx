import PageHero from '../components/ui/PageHero'

export default function Terms() {
  return (
    <div>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before using our platform." breadcrumbs={[{ label: 'Terms' }]} />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-3xl">
          <div className="card p-8 md:p-12 bg-white">
            <p className="text-xs text-[#9CA3AF] mb-8">Last updated: November 2026</p>
            {[
              { title: '1. Acceptance of Terms', body: 'By accessing or using the Buddhist Global Digital Ecosystem platform, you agree to be bound by these Terms and Conditions and all applicable laws.' },
              { title: '2. Use of the Platform', body: 'You agree to use this platform only for lawful purposes and in accordance with Buddhist values of respect, compassion, and non-harm. You must not post harmful, offensive, or disrespectful content.' },
              { title: '3. Accounts', body: 'You are responsible for maintaining the security of your account. You must not share credentials or impersonate others. We reserve the right to suspend accounts that violate our terms.' },
              { title: '4. Bookings and Payments', body: 'All bookings are subject to availability and confirmation by the service provider. Payments are processed securely. Cancellation and refund policies vary by service and are shown at the time of booking.' },
              { title: '5. Partner Conduct', body: 'Partners (monks, monasteries, vendors, etc.) must maintain accurate profiles, fulfill confirmed bookings professionally, and comply with all applicable laws in their jurisdiction.' },
              { title: '6. Intellectual Property', body: 'Content on this platform (articles, images, course materials) is owned by the platform or its contributors. You may not reproduce or redistribute content without permission.' },
              { title: '7. Disclaimer', body: 'The platform is provided as-is. We do not guarantee the accuracy of all content or the conduct of third-party partners. We are not responsible for disputes between users and service providers.' },
              { title: '8. Governing Law', body: 'These terms are governed by applicable international law. Disputes will be resolved through binding arbitration unless otherwise required by local law.' },
            ].map((s) => (
              <div key={s.title} className="mb-8">
                <h2 className="text-lg font-bold text-[#2C2C2C] mb-3">{s.title}</h2>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
