import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FDFAF4] px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">☸</div>
        <h1 className="text-6xl font-bold text-[#E2D9C5] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-3">Page Not Found</h2>
        <p className="text-[#6B6B6B] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let's guide you back to the path.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          {[['Temples', '/temples'], ['Knowledge', '/knowledge'], ['Courses', '/courses'], ['Shop', '/shop']].map(([label, href]) => (
            <Link key={href} to={href} className="text-[#C9972A] hover:underline">{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
