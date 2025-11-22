import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-10"></div>
        {/* Placeholder for hero background image if needed, for now just dark premium gradient */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal width="100%">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            JCAS <span className="font-light">P&D</span>
          </h1>
        </Reveal>
        
        <Reveal width="100%" delay={200}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-200 uppercase mb-12">
            Dover &bull; Deal &bull; Kent
          </h2>
        </Reveal>

        <Reveal width="100%" delay={400}>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Premium painting, decorating, and seasonal styling for the modern home.
          </p>
        </Reveal>

        <Reveal width="100%" delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+447000000000"
              className="btn-shimmer group relative px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
            <a
              href="#contact"
              className="group px-10 py-4 border border-white hover:bg-white hover:text-black text-white font-bold text-sm uppercase tracking-widest rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Get a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;