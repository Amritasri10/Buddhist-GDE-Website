export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 justify-center mb-3">
          <span className="h-px w-10 bg-[#C9972A]" />
          <span className="text-[#C9972A] text-sm font-semibold uppercase tracking-widest">{eyebrow}</span>
          <span className="h-px w-10 bg-[#C9972A]" />
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}
