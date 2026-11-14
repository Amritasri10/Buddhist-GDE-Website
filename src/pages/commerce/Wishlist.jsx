import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import { Heart, ArrowRight } from 'lucide-react'

export default function Wishlist() {
  return (
    <div>
      <PageHero title="Your Wishlist" subtitle="Items you've saved for later." breadcrumbs={[{ label: 'Wishlist' }]} />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-2xl">
          <div className="card p-12 bg-white text-center">
            <Heart size={64} className="mx-auto text-[#E2D9C5] mb-4" />
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Your wishlist is empty</h3>
            <p className="text-[#6B6B6B] mb-6">Save items you love by clicking the heart icon on any product.</p>
            <div className="flex justify-center gap-4">
              <Link to="/shop" className="btn-primary">Browse Shop <ArrowRight size={16} /></Link>
              <Link to="/login" className="btn-secondary">Login</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
