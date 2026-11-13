import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

export default function ShopDetail() {
  const { slug } = useParams()
  const name = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Product'

  return (
    <div>
      <PageHero title={name} subtitle="Buddhist Marketplace" breadcrumbs={[{ label: 'Shop', href: '/shop' }, { label: name }]} />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <Link to="/shop" className="inline-flex items-center gap-2 text-[#C9972A] hover:underline mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="h-96 bg-gradient-to-br from-[#F5EDD6] to-[#E2D9C5] rounded-2xl flex items-center justify-center text-9xl opacity-40">🛕</div>
            <div>
              <span className="badge-gold text-xs mb-3 inline-block">Prayer Beads</span>
              <h1 className="text-3xl font-bold text-[#2C2C2C] mb-3">{name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#C9972A]" fill="currentColor" />)}
                <span className="text-sm text-[#6B6B6B]">4.8 (96 reviews)</span>
              </div>
              <div className="text-4xl font-bold text-[#2C2C2C] mb-1">$29 <span className="text-[#9CA3AF] line-through text-xl font-normal">$45</span></div>
              <p className="text-xs text-[#9CA3AF] mb-6">Free shipping on orders over $50</p>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">Handcrafted from authentic Bodhi tree seeds. Used for meditation, counting mantras, and as a protective amulet. Each bead is carefully shaped and strung by artisans in Bodh Gaya.</p>
              <div className="flex gap-3 mb-6">
                <button className="btn-primary flex-1 justify-center"><ShoppingCart size={16} />Add to Cart</button>
                <button className="p-3 border border-[#E2D9C5] rounded-lg hover:bg-[#FEF3C7] transition-colors"><Heart size={18} /></button>
              </div>
              <div className="text-sm text-[#6B6B6B] space-y-1">
                <p>✓ Authentic handcrafted product</p>
                <p>✓ Ships from Bodh Gaya, India</p>
                <p>✓ 30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
