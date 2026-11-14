export const TEMPLES = [
  { name: 'Mahabodhi Temple', location: 'Bodh Gaya, India', tradition: 'Theravada', slug: 'mahabodhi-temple', rating: '4.9' },
  { name: 'Shwedagon Pagoda', location: 'Yangon, Myanmar', tradition: 'Theravada', slug: 'shwedagon-pagoda', rating: '4.8' },
  { name: 'Potala Palace', location: 'Lhasa, Tibet', tradition: 'Vajrayana', slug: 'potala-palace', rating: '4.9' },
  { name: 'Senso-ji Temple', location: 'Tokyo, Japan', tradition: 'Mahayana', slug: 'sensoji-temple', rating: '4.7' },
]

export const BHANTES = [
  { name: 'Bhante Gunaratana', tradition: 'Theravada', location: 'West Virginia, USA', expertise: 'Mindfulness & Vipassana', slug: 'bhante-gunaratana' },
  { name: 'Thich Nhat Hanh', tradition: 'Zen (Mahayana)', location: 'France / Vietnam', expertise: 'Mindfulness, Engaged Buddhism', slug: 'thich-nhat-hanh' },
  { name: 'Pema Chödrön', tradition: 'Vajrayana', location: 'Nova Scotia, Canada', expertise: 'Tibetan Buddhism, Compassion', slug: 'pema-chodron' },
  { name: 'Ajahn Chah', tradition: 'Theravada', location: 'Thailand', expertise: 'Forest Tradition, Meditation', slug: 'ajahn-chah' },
]

export const COURSES = [
  { title: 'Introduction to Buddhism & the Four Noble Truths', instructor: 'Bhante Gunaratana', level: 'Beginner', duration: '6 weeks', price: 0, slug: 'intro-buddhism', category: 'Foundation' },
  { title: 'Vipassana Meditation: A Complete Guide', instructor: 'Thich Nhat Hanh', level: 'Intermediate', duration: '8 weeks', price: 49, slug: 'vipassana-meditation', category: 'Meditation' },
  { title: 'Tibetan Buddhist Philosophy', instructor: 'Pema Chödrön', level: 'Advanced', duration: '12 weeks', price: 79, slug: 'tibetan-philosophy', category: 'Philosophy' },
  { title: 'Pali Language for Beginners', instructor: 'Prof. Ananda Kumar', level: 'Beginner', duration: '10 weeks', price: 39, slug: 'pali-language', category: 'Language' },
]

export const PRODUCTS = [
  { name: 'Hand-carved Bodhi Tree Mala Beads', price: 29, originalPrice: 45, slug: 'bodhi-mala', category: 'Prayer Beads', rating: 4.8 },
  { name: 'Tibetan Singing Bowl — Healing Set', price: 85, originalPrice: 120, slug: 'singing-bowl', category: 'Meditation', rating: 4.9 },
  { name: 'The Dhammapada — English & Pali Edition', price: 18, slug: 'dhammapada-book', category: 'Books', rating: 4.7 },
  { name: 'Buddhist Monk Robe — Saffron', price: 65, slug: 'monk-robe', category: 'Clothing', rating: 4.6 },
]

export const EVENTS = [
  { title: 'Vesak Day Celebration 2027', date: 'May 2027', location: 'Global – 50+ Countries', type: 'Festival', slug: 'vesak-2027' },
  { title: 'International Meditation Retreat', date: 'Jan 15-25, 2027', location: 'Bodh Gaya, India', type: 'Retreat', slug: 'meditation-retreat-2027' },
  { title: 'Buddhist Conference on Climate & Compassion', date: 'March 2027', location: 'Bangkok, Thailand', type: 'Conference', slug: 'climate-compassion-2027' },
  { title: 'Dharma Music Festival', date: 'April 2027', location: 'Kathmandu, Nepal', type: 'Festival', slug: 'dharma-music-2027' },
]

export const DONATIONS = [
  { title: 'Rebuild Ancient Vihara in Sri Lanka', raised: 42000, goal: 80000, description: 'Help restore a 600-year-old monastery damaged by flooding.', slug: 'rebuild-vihara-sri-lanka' },
  { title: 'Buddhist School for Orphans — Nepal', raised: 28500, goal: 50000, description: 'Provide free education and shelter for orphaned children.', slug: 'school-nepal' },
  { title: 'Dharma Books Distribution Project', raised: 15000, goal: 30000, description: 'Distribute free Buddhist literature across Southeast Asia.', slug: 'dharma-books' },
]

export const KNOWLEDGE_TOPICS = [
  { icon: '📖', title: 'Life of Gautama Buddha', href: '/buddha', desc: 'Birth, enlightenment, and teachings of Siddhartha Gautama.' },
  { icon: '🕉️', title: 'Four Noble Truths', href: '/about-buddhism', desc: 'The foundational teachings on suffering and liberation.' },
  { icon: '🛤️', title: 'Eightfold Path', href: '/about-buddhism', desc: 'The practical guide to ethical and meditative development.' },
  { icon: '📜', title: 'Buddhist Scriptures', href: '/scriptures', desc: 'Pali Canon, Mahayana sutras, and Vajrayana texts.' },
  { icon: '🌏', title: 'Buddhist Traditions', href: '/traditions', desc: 'Theravada, Mahayana, and Vajrayana explained.' },
  { icon: '🏯', title: 'Buddhist Heritage', href: '/heritage', desc: 'Explore Buddhism across countries and civilizations.' },
]

export const SERVICES = [
  { icon: '🛕', title: 'Temples & Monasteries', href: '/temples', desc: 'Explore sacred sites worldwide', color: 'bg-amber-50 border-amber-200' },
  { icon: '🧘', title: 'Bhante Directory', href: '/bhantes', desc: 'Connect with monks & teachers', color: 'bg-orange-50 border-orange-200' },
  { icon: '🕯️', title: 'Book a Ceremony', href: '/bookings', desc: 'Rituals, pujas & blessings', color: 'bg-red-50 border-red-100' },
  { icon: '🎓', title: 'Education', href: '/courses', desc: 'Buddhist courses & workshops', color: 'bg-green-50 border-green-200' },
  { icon: '🔬', title: 'Research', href: '/research', desc: 'Scholar portal & publications', color: 'bg-blue-50 border-blue-200' },
  { icon: '🛍️', title: 'Buddhist Shop', href: '/shop', desc: 'Statues, books, malas & more', color: 'bg-purple-50 border-purple-200' },
  { icon: '✈️', title: 'Pilgrimage Travel', href: '/travel', desc: 'Sacred journeys & tours', color: 'bg-sky-50 border-sky-200' },
  { icon: '🏨', title: 'Hotels', href: '/hotels', desc: 'Buddhist-friendly accommodation', color: 'bg-teal-50 border-teal-200' },
  { icon: '🏥', title: 'Healthcare', href: '/healthcare', desc: 'Wellness & medical services', color: 'bg-rose-50 border-rose-100' },
  { icon: '🍜', title: 'Restaurants', href: '/restaurants', desc: 'Vegetarian & Buddhist dining', color: 'bg-yellow-50 border-yellow-200' },
  { icon: '📅', title: 'Events', href: '/events', desc: 'Festivals, retreats & more', color: 'bg-indigo-50 border-indigo-200' },
  { icon: '💍', title: 'Buddhist Weddings', href: '/weddings', desc: 'Sacred ceremony packages', color: 'bg-pink-50 border-pink-100' },
]

export const MEMBERSHIPS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    color: 'border-[#E2D9C5]',
    btnClass: 'btn-secondary',
    features: ['Browse all public content', 'Join community forums', 'Basic search & filters', 'Newsletter access'],
  },
  {
    name: 'Premium',
    price: '$9',
    period: '/month',
    color: 'border-[#C9972A] ring-2 ring-[#C9972A]/30',
    btnClass: 'btn-primary',
    highlight: 'Most Popular',
    features: ['All Free features', 'Book ceremonies & services', 'Premium courses & media', 'Wishlist & order management', 'Priority support'],
  },
  {
    name: 'Institutional',
    price: '$49',
    period: '/month',
    color: 'border-[#7B1C2E] ring-2 ring-[#7B1C2E]/20',
    btnClass: 'btn-maroon',
    features: ['All Premium features', 'Monastery/school dashboard', 'Manage monks & staff', 'Advanced reports & analytics', 'Dedicated account manager'],
  },
]
