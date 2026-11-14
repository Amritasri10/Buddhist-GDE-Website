import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import { ProductCard } from '../../components/ui/Card'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/commerce/shop'

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
            {PRODUCT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
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
