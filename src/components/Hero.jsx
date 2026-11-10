import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-amber-500 tracking-tighter mb-6">
            ZENITH <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-400">
              PROTOCOL
            </span>
          </h1>
          <p className="text-lg md:text-xl text-amber-200/60 max-w-2xl mx-auto mb-10 font-light tracking-widest uppercase">
            Next-Generation Data Orchestration & Stream Security
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <Feature icon={<Shield className="w-6 h-6" />} label="Quantum Encrypted" />
          <Feature icon={<Zap className="w-6 h-6" />} label="Real-time Sync" />
          <Feature icon={<Globe className="w-6 h-6" />} label="Global Mesh" />
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-amber-200/80 bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/10 backdrop-blur-sm">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Hero;
