import { Link } from 'react-router-dom'
import { Users, MessageCircle, Globe, Heart } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

const GROUPS = [
  { name: 'Theravada Practitioners', members: '12,400', country: 'Global', icon: '🌿' },
  { name: 'Zen Meditation Circle', members: '8,900', country: 'Global', icon: '⭕' },
  { name: 'Tibetan Buddhism Study', members: '6,700', country: 'Global', icon: '💎' },
  { name: 'Buddhist Youth Network', members: '15,200', country: 'Global', icon: '🌟' },
  { name: 'India Sangha Community', members: '9,100', country: 'India', icon: '🇮🇳' },
  { name: 'Southeast Asia Dhamma', members: '11,300', country: 'SE Asia', icon: '🌏' },
]

const DISCUSSIONS = [
  { title: 'How to maintain a daily meditation practice?', replies: 47, category: 'Practice', time: '2 hours ago' },
  { title: 'Understanding the concept of Anatta (Non-self)', replies: 83, category: 'Philosophy', time: '5 hours ago' },
  { title: 'Recommended books for beginners in Buddhism', replies: 62, category: 'Resources', time: '1 day ago' },
  { title: 'Vesak Day celebrations around the world', replies: 29, category: 'Festivals', time: '2 days ago' },
  { title: 'Role of monasteries in modern society', replies: 55, category: 'Community', time: '3 days ago' },
]

export default function Community() {
  return (
    <div>
      <PageHero
        title="Buddhist Community"
        subtitle="Connect with Buddhist practitioners, scholars, and seekers from around the world."
        breadcrumbs={[{ label: 'Community' }]}
      />

      {/* Stats */}
      <section className="bg-[#F5EDD6] py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Users, n: '500K+', label: 'Members' },
              { icon: Globe, n: '80+', label: 'Countries' },
              { icon: MessageCircle, n: '1.2M+', label: 'Discussions' },
              { icon: Heart, n: '200+', label: 'Groups' },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center bg-white">
                <s.icon size={24} className="mx-auto text-[#C9972A] mb-2" />
                <div className="text-2xl font-bold text-[#2C2C2C]">{s.n}</div>
                <div className="text-sm text-[#6B6B6B]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <SectionHeader eyebrow="Groups" title="Community Groups" subtitle="Join groups based on tradition, country, or interest." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {GROUPS.map((g) => (
              <div key={g.name} className="card p-6 bg-white flex items-center gap-4 group cursor-pointer hover:border-[#C9972A]/50 transition-colors">
                <span className="text-4xl">{g.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] group-hover:text-[#C9972A] transition-colors">{g.name}</h3>
                  <p className="text-sm text-[#9CA3AF]">{g.members} members · {g.country}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Discussions */}
          <SectionHeader eyebrow="Forums" title="Recent Discussions" center={false} />
          <div className="space-y-4">
            {DISCUSSIONS.map((d) => (
              <div key={d.title} className="card p-5 bg-white flex items-start justify-between gap-4 group cursor-pointer hover:border-[#C9972A]/50 transition-colors">
                <div>
                  <h3 className="font-medium text-[#2C2C2C] group-hover:text-[#C9972A] transition-colors mb-2">{d.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
                    <span className="badge-gold">{d.category}</span>
                    <span>{d.replies} replies</span>
                    <span>{d.time}</span>
                  </div>
                </div>
                <MessageCircle size={18} className="text-[#E2D9C5] group-hover:text-[#C9972A] transition-colors flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>

          <div className="mt-10 card p-8 bg-gradient-to-br from-[#7B1C2E] to-[#5A1020] text-white text-center">
            <h3 className="text-xl font-bold mb-3">Join the Community</h3>
            <p className="text-white/70 mb-5 text-sm">Create a free account to join discussions, groups, and connect with Buddhist practitioners worldwide.</p>
            <Link to="/register" className="btn-primary bg-[#C9972A] hover:bg-[#B8861F]">Register Free</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
