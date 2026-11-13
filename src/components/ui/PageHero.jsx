import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumbs = [], bg = 'maroon', children }) {
  const bgClass = bg === 'maroon'
    ? 'bg-gradient-to-br from-[#7B1C2E] via-[#5A1020] to-[#2C2C2C]'
    : bg === 'gold'
    ? 'bg-gradient-to-br from-[#92400E] via-[#C9972A] to-[#7B1C2E]'
    : 'bg-gradient-to-br from-[#2C2C2C] via-[#3D2B1F] to-[#7B1C2E]'

  return (
    <section className={`${bgClass} text-white py-14 md:py-20 relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #C9972A 0%, transparent 60%)' }} />

      <div className="container-custom relative z-10">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#E8C55A] transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="opacity-50" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-[#E8C55A] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[#E8C55A] text-4xl mb-4">☸</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-white/75 text-lg leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
