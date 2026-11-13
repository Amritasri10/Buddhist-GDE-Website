import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import AboutBuddhism from './pages/AboutBuddhism'
import Buddha from './pages/Buddha'
import Knowledge from './pages/Knowledge'
import KnowledgeDetail from './pages/KnowledgeDetail'
import Scriptures from './pages/Scriptures'
import Traditions from './pages/Traditions'
import Heritage from './pages/Heritage'
import Festivals from './pages/Festivals'
import Temples from './pages/Temples'
import TempleDetail from './pages/TempleDetail'
import Bhantes from './pages/Bhantes'
import BhanteDetail from './pages/BhanteDetail'
import Rituals from './pages/Rituals'
import Bookings from './pages/Bookings'
import Education from './pages/Education'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Research from './pages/Research'
import ResearchPublications from './pages/ResearchPublications'
import Shop from './pages/Shop'
import ShopDetail from './pages/ShopDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Media from './pages/Media'
import Travel from './pages/Travel'
import Hotels from './pages/Hotels'
import Healthcare from './pages/Healthcare'
import Restaurants from './pages/Restaurants'
import Events from './pages/Events'
import Donations from './pages/Donations'
import Weddings from './pages/Weddings'
import Businesses from './pages/Businesses'
import Community from './pages/Community'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-buddhism" element={<AboutBuddhism />} />
          <Route path="/buddha" element={<Buddha />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:slug" element={<KnowledgeDetail />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/temples/:slug" element={<TempleDetail />} />
          <Route path="/bhantes" element={<Bhantes />} />
          <Route path="/bhantes/:slug" element={<BhanteDetail />} />
          <Route path="/rituals" element={<Rituals />} />
          <Route path="/rituals/:slug" element={<Rituals />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/education" element={<Education />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/publications" element={<ResearchPublications />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ShopDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:slug" element={<Media />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travel/destinations/:slug" element={<Travel />} />
          <Route path="/travel/packages/:slug" element={<Travel />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:slug" element={<Hotels />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/healthcare/:slug" element={<Healthcare />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:slug" element={<Restaurants />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<Events />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations/:slug" element={<Donations />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/businesses/:slug" element={<Businesses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
