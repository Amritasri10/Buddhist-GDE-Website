import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { ArrowRight, BookOpen, Video, FileText, Award } from 'lucide-react'

export default function Education() {
  return (
    <div>
      <PageHero
        title="Buddhist Education"
        subtitle="Learn, grow, and deepen your understanding of the Dharma with our comprehensive educational programs."
        breadcrumbs={[{ label: 'Education' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Learn" title="Educational Programs" subtitle="From beginner introductions to advanced scholarly research." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { icon: BookOpen, title: 'Online Courses', desc: 'Self-paced and live courses for all levels', href: '/courses', count: '200+ courses' },
              { icon: Video, title: 'Video Teachings', desc: 'Dharma talks and recorded lectures', href: '/media', count: '5,000+ videos' },
              { icon: FileText, title: 'Research & Scholarship', desc: 'Academic papers and publications', href: '/research', count: '12,000+ papers' },
              { icon: Award, title: 'Certificates', desc: 'Recognized course completion certificates', href: '/courses', count: 'Globally recognized' },
            ].map((item) => (
              <Link key={item.title} to={item.href} className="card p-6 text-center group bg-white hover:border-[#C9972A]/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#C9972A]" />
                </div>
                <h3 className="font-bold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{item.title}</h3>
                <p className="text-xs text-[#C9972A] font-medium mb-2">{item.count}</p>
                <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: 'For Students', items: ['Foundation to advanced level courses', 'Learn from verified monks and scholars', 'Self-paced with lifetime access', 'Certificate on completion', 'Multi-language support'], href: '/courses', btn: 'Browse Courses' },
              { title: 'For Institutions', items: ['List your monastery or school', 'Manage courses and instructors', 'Enroll and track students', 'Issue branded certificates', 'Revenue from paid courses'], href: '/register', btn: 'Register Institution' },
            ].map((box) => (
              <div key={box.title} className="card p-8 bg-white">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-5">{box.title}</h3>
                <ul className="space-y-3 mb-7">
                  {box.items.map((i) => <li key={i} className="flex items-center gap-3 text-sm text-[#2C2C2C]"><span className="text-[#C9972A] font-bold">✓</span>{i}</li>)}
                </ul>
                <Link to={box.href} className="btn-primary">{box.btn} <ArrowRight size={16} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
