import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

export default function KnowledgeDetail() {
  const { slug } = useParams()
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Article'

  return (
    <div>
      <PageHero
        title={title}
        subtitle="Buddhist Knowledge Hub"
        breadcrumbs={[{ label: 'Knowledge', href: '/knowledge' }, { label: title }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-3xl">
          <Link to="/knowledge" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Knowledge Hub
          </Link>
          <article className="card p-8 md:p-12 bg-white">
            <div className="flex items-center gap-3 mb-6 text-sm text-[#9CA3AF]">
              <span className="badge-gold">Buddhist Philosophy</span>
              <span className="flex items-center gap-1"><Clock size={13} /> 10 min read</span>
            </div>
            <h1 className="text-3xl font-bold text-[#2C2C2C] mb-6">{title}</h1>
            <div className="prose text-[#2C2C2C] leading-relaxed space-y-5 text-base">
              <p>
                This article explores the foundations of Buddhist teaching as preserved in the ancient Pali Canon
                and the broader traditions of Mahayana and Vajrayana Buddhism. The wisdom contained in these teachings
                has guided practitioners toward liberation for over 2,500 years.
              </p>
              <p>
                The Buddha's teachings, known as the Dharma, cover a vast range of topics — from the nature of mind
                and reality to practical guidance on ethical conduct, meditation, and wisdom. All teachings share the
                common aim of reducing suffering and cultivating liberation.
              </p>
              <blockquote className="border-l-4 border-[#C9972A] pl-6 italic text-[#6B6B6B] my-8">
                "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
                <footer className="text-sm mt-2 not-italic">— Attributed to the Buddha</footer>
              </blockquote>
              <p>
                Understanding these teachings is a lifelong journey. We encourage you to explore our courses,
                connect with qualified teachers, and engage with the broader Buddhist community on this platform.
              </p>
            </div>
          </article>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/courses" className="btn-primary">Take a Course</Link>
            <Link to="/bhantes" className="btn-secondary">Find a Teacher</Link>
            <Link to="/knowledge" className="btn-secondary">More Articles</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
