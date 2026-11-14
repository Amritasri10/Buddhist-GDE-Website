import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import logo from '../../assets/Buddhist Global Digital Ecosystem Logo.png'

export default function Login() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="min-h-screen bg-[#F5EDD6] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9972A] to-[#7B1C2E] flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">☸</span>
            </div>
            <div className="font-bold text-[#2C2C2C] text-lg">Buddhist Global Digital Ecosystem</div>
          </Link>
        </div>

        <div className="card p-8 bg-white">
          <h1 className="text-2xl font-bold text-[#2C2C2C] mb-1 text-center">Welcome Back</h1>
          <p className="text-[#9CA3AF] text-sm text-center mb-7">Sign in to your account</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" className="input-field pl-11" required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-medium text-[#6B6B6B]">Password</label>
                <Link to="/forgot-password" className="text-xs text-[#C9972A] hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type={show ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange}
                  placeholder="Enter your password" className="input-field pl-11 pr-12" required
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B6B6B]">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center py-3.5">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-[#E2D9C5]" />
            <span className="text-xs text-[#9CA3AF]">or continue with</span>
            <span className="flex-1 h-px bg-[#E2D9C5]" />
          </div>

          {/* OAuth placeholders */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['Google', 'Facebook'].map((provider) => (
              <button key={provider} className="border border-[#E2D9C5] rounded-lg py-2.5 text-sm text-[#2C2C2C] font-medium hover:bg-[#FEF9EE] transition-colors flex items-center justify-center gap-2">
                {provider === 'Google' ? '🔵' : '🔷'} {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-[#6B6B6B]">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#C9972A] font-semibold hover:underline">Create one free</Link>
          </p>
        </div>

        <p className="text-center text-xs text-[#9CA3AF] mt-6">
          By signing in you agree to our{' '}
          <Link to="/terms" className="hover:underline">Terms</Link> and{' '}
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
