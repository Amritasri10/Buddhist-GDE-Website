import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Users, Star, Award } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

export default function CourseDetail() {
  const { slug } = useParams()
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Course'

  return (
    <div>
      <PageHero
        title={title}
        subtitle="Buddhist Education Course"
        breadcrumbs={[{ label: 'Courses', href: '/courses' }, { label: title }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <Link to="/courses" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Courses
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-8 bg-white">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="badge-gold text-xs">Meditation</span>
                  <span className="badge bg-[#D1FAE5] text-[#065F46] text-xs">Beginner</span>
                </div>
                <h1 className="text-2xl font-bold text-[#2C2C2C] mb-4">{title}</h1>
                <div className="flex flex-wrap gap-5 text-sm text-[#6B6B6B] mb-6">
                  <span className="flex items-center gap-1"><Clock size={14} />8 Weeks</span>
                  <span className="flex items-center gap-1"><Users size={14} />1,240 students</span>
                  <span className="flex items-center gap-1"><Star size={14} className="text-[#C9972A]" fill="currentColor" />4.8 (320 reviews)</span>
                </div>
                <p className="text-[#6B6B6B] leading-relaxed mb-6">
                  This comprehensive course covers the foundations of Buddhist meditation practice.
                  You will learn the theoretical background from ancient Pali sources and develop
                  a practical daily meditation routine guided by an experienced monastic teacher.
                </p>
                <h3 className="font-bold text-[#2C2C2C] mb-3">What You'll Learn</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {['History of Buddhist meditation', 'Breath awareness (Anapanasati)', 'Body scan and mindfulness', 'Loving-kindness (Metta)', 'Working with hindrances', 'Establishing daily practice'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#2C2C2C]">
                      <span className="text-[#C9972A] font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card p-6 bg-white sticky top-28">
                <div className="text-3xl font-bold text-[#2C2C2C] mb-1">$49 <span className="text-[#9CA3AF] line-through text-lg font-normal">$79</span></div>
                <p className="text-xs text-[#9CA3AF] mb-5">Lifetime access • Certificate included</p>
                <Link to="/register" className="btn-primary w-full justify-center mb-3">Enroll Now</Link>
                <Link to="/login" className="btn-secondary w-full justify-center text-sm">Already have an account?</Link>
                <div className="mt-5 space-y-2 text-sm text-[#6B6B6B]">
                  {['8 weeks of content', '24 video lessons', 'PDF study materials', 'Community forum access', 'Certificate of completion'].map((f) => (
                    <div key={f} className="flex items-center gap-2"><Award size={14} className="text-[#C9972A]" />{f}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
