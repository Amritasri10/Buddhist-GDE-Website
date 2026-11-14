import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Core
import Home from './pages/core/Home'
import About from './pages/core/About'
import AboutBuddhism from './pages/core/AboutBuddhism'

// Buddhism
import Buddha from './pages/buddhism/Buddha'
import Knowledge from './pages/buddhism/Knowledge'
import KnowledgeDetail from './pages/buddhism/KnowledgeDetail'
import Scriptures from './pages/buddhism/Scriptures'
import Traditions from './pages/buddhism/Traditions'
import Heritage from './pages/buddhism/Heritage'
import Festivals from './pages/buddhism/Festivals'
import Rituals from './pages/buddhism/Rituals'

// Temples & Monks
import Temples from './pages/temples/Temples'
import TempleDetail from './pages/temples/TempleDetail'
import Bhantes from './pages/temples/Bhantes'
import BhanteDetail from './pages/temples/BhanteDetail'
import Bookings from './pages/temples/Bookings'

// Education
import Education from './pages/education/Education'
import Courses from './pages/education/Courses'
import CourseDetail from './pages/education/CourseDetail'
import Research from './pages/education/Research'
import ResearchPublications from './pages/education/ResearchPublications'

// Commerce
import Shop from './pages/commerce/Shop'
import ShopDetail from './pages/commerce/ShopDetail'
import Cart from './pages/commerce/Cart'
import Wishlist from './pages/commerce/Wishlist'

// Services
import Travel from './pages/services/Travel'
import Hotels from './pages/services/Hotels'
import Healthcare from './pages/services/Healthcare'
import Restaurants from './pages/services/Restaurants'
import Events from './pages/services/Events'
import Weddings from './pages/services/Weddings'
import Businesses from './pages/services/Businesses'

// Community
import Community from './pages/community/Community'
import Membership from './pages/community/Membership'
import Donations from './pages/community/Donations'
import Media from './pages/community/Media'

// Auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

// Legal & Support
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import FAQ from './pages/legal/FAQ'
import Contact from './pages/legal/Contact'
import NotFound from './pages/legal/NotFound'

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
