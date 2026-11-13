import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft } from 'lucide-react'

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#F5EDD6] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9972A] to-[#7B1C2E] flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">☸</span>
            </div>
          </Link>
        </div>

        <div className="card p-8 bg-white">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-[#2C2C2C] mb-2 text-center">Reset Password</h1>
              <p className="text-[#9CA3AF] text-sm text-center mb-7">Enter your email and we'll send you a reset link.</p>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div>
                  <label className="text-sm font-medium text-[#6B6B6B] mb-1.5 block">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field pl-11" required />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">Send Reset Link</button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-xl font-bold text-[#2C2C2C] mb-2">Check Your Email</h2>
              <p className="text-[#6B6B6B] text-sm mb-6">We've sent a password reset link to <strong>{email}</strong>. Check your inbox (and spam folder).</p>
            </div>
          )}
          <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-[#C9972A] hover:underline mt-5">
            <ArrowLeft size={14} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
