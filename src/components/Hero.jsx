import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            System Operational
          </div>
          
          <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            ZENITH<br />
            <span className="text-amber-500">PROTOCOL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            The foundation of decentralized data orchestration. 
            Securing the future of information streams with quantum-grade intelligence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button btn-primary flex items-center gap-2 group"
            >
              Initialize Protocol
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button btn-outline"
            >
              View Documentation
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16"
        >
          <Feature icon={<Shield className="w-5 h-5" />} label="Quantum Encrypted" />
          <Feature icon={<Zap className="w-5 h-5" />} label="Real-time Sync" />
          <Feature icon={<Globe className="w-5 h-5" />} label="Global Mesh" />
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex items-center justify-center gap-3 text-zinc-400 group cursor-default">
    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/30 group-hover:text-amber-500 transition-all duration-500">
      {icon}
    </div>
    <span className="text-sm font-medium tracking-widest uppercase">{label}</span>
  </div>
);

export default Hero;
