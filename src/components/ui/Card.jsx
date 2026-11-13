import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin } from 'lucide-react'

export function TempleCard({ name, location, tradition, image, slug, rating }) {
  return (
    <Link to={`/temples/${slug}`} className="card block overflow-hidden group">
      <div className="relative h-52 overflow-hidden bg-[#F5EDD6]">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5]">
            <span className="text-6xl opacity-30">⛩</span>
          </div>
        )}
        {tradition && (
          <span className="absolute top-3 left-3 badge-gold text-xs">{tradition}</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-[#6B6B6B] mb-3">
          <MapPin size={13} /> {location}
        </div>
        {rating && (
          <div className="flex items-center gap-1 text-sm text-[#C9972A]">
            <Star size={13} fill="currentColor" /> <span>{rating}</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export function BhanteCard({ name, tradition, location, expertise, image, slug }) {
  return (
    <Link to={`/bhantes/${slug}`} className="card block overflow-hidden group text-center p-6">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-[#F5EDD6] border-4 border-[#E8C55A] mb-4">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E8C55A]/30 to-[#C9972A]/30">
            <span className="text-4xl">🧘</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9972A] transition-colors">{name}</h3>
      {tradition && <span className="badge-gold text-xs mb-2 inline-block">{tradition}</span>}
      <p className="text-sm text-[#6B6B6B] flex items-center justify-center gap-1"><MapPin size={12} />{location}</p>
      {expertise && <p className="text-xs text-[#9CA3AF] mt-2 line-clamp-2">{expertise}</p>}
    </Link>
  )
}

export function CourseCard({ title, instructor, level, duration, price, image, slug, category }) {
  return (
    <Link to={`/courses/${slug}`} className="card block overflow-hidden group">
      <div className="relative h-44 overflow-hidden bg-[#F5EDD6]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5]">
            <span className="text-5xl opacity-30">📚</span>
          </div>
        )}
        {category && <span className="absolute top-3 left-3 badge-gold text-xs">{category}</span>}
        {price === 0 ? (
          <span className="absolute top-3 right-3 badge-green text-xs">Free</span>
        ) : price && (
          <span className="absolute top-3 right-3 bg-white/90 text-[#2C2C2C] text-xs font-semibold px-2 py-1 rounded-full">${price}</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors line-clamp-2 leading-snug">{title}</h3>
        {instructor && <p className="text-sm text-[#6B6B6B] mb-3">By {instructor}</p>}
        <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
          {level && <span className="badge bg-[#F3F4F6] text-[#374151]">{level}</span>}
          {duration && <span>{duration}</span>}
        </div>
      </div>
    </Link>
  )
}

export function ProductCard({ name, price, originalPrice, image, slug, category, rating }) {
  return (
    <Link to={`/shop/${slug}`} className="card block overflow-hidden group">
      <div className="relative h-52 overflow-hidden bg-[#F5EDD6]">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5]">
            <span className="text-5xl opacity-30">🛕</span>
          </div>
        )}
        {originalPrice && (
          <span className="absolute top-3 right-3 bg-[#7B1C2E] text-white text-xs font-bold px-2 py-1 rounded-full">
            -{Math.round((1 - price / originalPrice) * 100)}%
          </span>
        )}
      </div>
      <div className="p-4">
        {category && <p className="text-xs text-[#C9972A] font-medium mb-1">{category}</p>}
        <h3 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors line-clamp-2 text-sm">{name}</h3>
        {rating && (
          <div className="flex items-center gap-1 text-sm text-[#C9972A] mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} />
            ))}
            <span className="text-[#9CA3AF] text-xs">({rating})</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#2C2C2C]">${price}</span>
          {originalPrice && <span className="text-[#9CA3AF] line-through text-sm">${originalPrice}</span>}
        </div>
      </div>
    </Link>
  )
}

export function EventCard({ title, date, location, type, image, slug }) {
  return (
    <Link to={`/events/${slug}`} className="card block overflow-hidden group">
      <div className="relative h-44 overflow-hidden bg-[#F5EDD6]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5]">
            <span className="text-5xl opacity-30">🎊</span>
          </div>
        )}
        {type && <span className="absolute top-3 left-3 badge-gold text-xs">{type}</span>}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors line-clamp-2">{title}</h3>
        {date && <p className="text-sm text-[#C9972A] font-medium mb-1">📅 {date}</p>}
        {location && <p className="text-sm text-[#6B6B6B] flex items-center gap-1"><MapPin size={13} />{location}</p>}
      </div>
    </Link>
  )
}

export function DonationCard({ title, raised, goal, description, slug }) {
  const pct = goal ? Math.min(Math.round((raised / goal) * 100), 100) : 0
  return (
    <Link to={`/donations/${slug}`} className="card block p-6 group">
      <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-4 text-2xl">🙏</div>
      <h3 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9972A] transition-colors line-clamp-2">{title}</h3>
      {description && <p className="text-sm text-[#6B6B6B] mb-4 line-clamp-2">{description}</p>}
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-[#2C2C2C]">${raised?.toLocaleString()} raised</span>
          <span className="text-[#6B6B6B]">{pct}%</span>
        </div>
        <div className="h-2 bg-[#F5EDD6] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#C9972A] to-[#E8C55A] rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        {goal && <p className="text-xs text-[#9CA3AF] mt-1">Goal: ${goal?.toLocaleString()}</p>}
      </div>
    </Link>
  )
}
