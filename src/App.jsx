import React from 'react'
import './index.css'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative selection:bg-amber-500/30">
      {/* Cinematic Background Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Radial glow from top left */}
        <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] rounded-full bg-amber-500/5 blur-[120px]" />
        {/* Radial glow from bottom right */}
        <div className="absolute -bottom-[25%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/5 blur-[120px]" />
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Dashboard />
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
          &copy; 2026 Zenith Protocol • Encrypted Session
        </p>
      </footer>
    </div>
  )
}

export default App
