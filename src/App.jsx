import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useSmoothScroll } from './hooks/useSmoothScroll';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import OverflowSlider from './components/OverflowSlider';
import Scene from './components/Scene';
import AmbientParticles from './components/AmbientParticles';

function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-3 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="px-4 py-2 glass-panel rounded-lg text-sm font-medium whitespace-nowrap hidden md:block"
          >
            Start a project
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-18 h-18 bg-accent hover:bg-white hover:text-black text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110 group cursor-pointer"
      >
        <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm relative z-10">
      <p>© {new Date().getFullYear()} Faxil Up. All rights reserved.</p>
    </footer>
  );
}

function App() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-accent/30 selection:text-white">
      <AmbientParticles />
      <Navbar />
      <Scene />

      <main className="relative z-10">
        <HeroSection />
        <div id="next-section">
          <OverflowSlider />
        </div>
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
