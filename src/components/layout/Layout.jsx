import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// These routes render their own full-screen layout
const BARE_ROUTES = ['/login', '/register', '/forgot-password']

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  const isBare = BARE_ROUTES.includes(pathname)

  if (isBare) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[calc(4rem+36px)] md:pt-[calc(4.5rem+28px)]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
