import PageHero from '../../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ResearchPublications() {
  return (
    <div>
      <PageHero
        title="Research Publications"
        subtitle="Browse peer-reviewed Buddhist studies research from scholars worldwide."
        breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Publications' }]}
      />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-4xl">
          <Link to="/research" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Research Portal
          </Link>
          <div className="card p-10 bg-white text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">Full Publication Database</h3>
            <p className="text-[#6B6B6B] mb-6">Access the complete research publication database. Create a researcher account to submit and manage your publications.</p>
            <div className="flex justify-center gap-4">
              <Link to="/register" className="btn-primary">Register as Researcher</Link>
              <Link to="/research" className="btn-secondary">Browse Research</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
