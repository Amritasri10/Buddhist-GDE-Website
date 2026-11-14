import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import { ShoppingCart, ArrowRight } from 'lucide-react'

export default function Cart() {
  return (
    <div>
      <PageHero title="Shopping Cart" subtitle="Review your selected items before checkout." breadcrumbs={[{ label: 'Cart' }]} />
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom max-w-2xl">
          <div className="card p-12 bg-white text-center">
            <ShoppingCart size={64} className="mx-auto text-[#E2D9C5] mb-4" />
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Your cart is empty</h3>
            <p className="text-[#6B6B6B] mb-6">Browse our Buddhist marketplace and add items to your cart.</p>
            <Link to="/shop" className="btn-primary justify-center">Browse Shop <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#9CA3AF]">Login to view saved cart items. <Link to="/login" className="text-[#C9972A] hover:underline">Login here</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}
