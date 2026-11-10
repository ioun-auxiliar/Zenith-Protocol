import React from 'react'
import './index.css'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-black text-amber-50 overflow-hidden relative selection:bg-amber-500/30">
      {/* Background Wrapper */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.05),transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
