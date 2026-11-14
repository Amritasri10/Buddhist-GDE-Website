import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { ProductCard } from '../../components/ui/Card'

const PRODUCTS = [
  { name: 'Hand-carved Bodhi Tree Mala Beads', price: 29, originalPrice: 45, slug: 'bodhi-mala', category: 'Prayer Beads', rating: 4.8 },
  { name: 'Tibetan Singing Bowl — Healing Set', price: 85, originalPrice: 120, slug: 'singing-bowl', category: 'Meditation', rating: 4.9 },
  { name: 'The Dhammapada — English & Pali Edition', price: 18, slug: 'dhammapada-book', category: 'Books', rating: 4.7 },
  { name: 'Buddhist Monk Robe — Saffron', price: 65, slug: 'monk-robe', category: 'Clothing', rating: 4.6 },
  { name: 'Green Tara Statue — Hand-painted', price: 125, originalPrice: 160, slug: 'tara-statue', category: 'Statues', rating: 4.9 },
  { name: 'Prayer Flags — Lungta Set of 25', price: 12, slug: 'prayer-flags', category: 'Accessories', rating: 4.5 },
  { name: 'Incense Bundle — Himalayan Blend', price: 15, slug: 'incense', category: 'Accessories', rating: 4.6 },
  { name: 'Zafu Meditation Cushion — Maroon', price: 45, slug: 'zafu-cushion', category: 'Meditation', rating: 4.8 },
  { name: 'Pali-English Dictionary', price: 35, slug: 'pali-dictionary', category: 'Books', rating: 4.7 },
  { name: 'Tibetan Thangka Painting — Wheel of Life', price: 220, slug: 'thangka', category: 'Art', rating: 4.9 },
  { name: 'Crystal Mala Beads — Rose Quartz', price: 38, slug: 'crystal-mala', category: 'Prayer Beads', rating: 4.6 },
  { name: 'Brass Butter Lamp Set', price: 55, originalPrice: 70, slug: 'butter-lamp', category: 'Accessories', rating: 4.7 },
]

const CATEGORIES = ['All', 'Prayer Beads', 'Meditation', 'Books', 'Clothing', 'Statues', 'Accessories', 'Art']

export default function Shop() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('default')

  let filtered = PRODUCTS.filter((p) => {
    const ms = p.name.toLowerCase().includes(search.toLowerCase())
    const mc = category === 'All' || p.category === category
    return ms && mc
  })

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sort === 'rating') filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0))

  return (
    <div>
      <PageHero
        title="Buddhist Marketplace"
        subtitle="Authentic Buddhist products — prayer beads, statues, books, clothing, meditation tools and more."
        breadcrumbs={[{ label: 'Shop' }]}
      />
      <section className="bg-white border-b border-[#E2D9C5] sticky top-[calc(4rem+36px)] md:top-[calc(4.5rem+28px)] z-30">
        <div className="container-custom py-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-44">
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-field w-44">
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </section>
      <section className="section-pad bg-[#FDFAF4]">
        <div className="container-custom">
          <p className="text-sm text-[#6B6B6B] mb-6">{filtered.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => <ProductCard key={p.slug} {...p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
