import React from 'react';
import { Star, Gift, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const ChristmasService: React.FC = () => {
  return (
    <section id="christmas" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative festive glow with subtle animation - Winter/Silver tones */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-gray-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-white/20">
                <Star size={12} fill="currentColor" />
                Seasonal Exclusive
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Christmas Decorating Service
              </h2>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                Take the stress out of the holiday season. We offer a full festive decorating service, perfect for busy professionals or elderly clients in Kent who want a beautifully decorated home without the physical strain.
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={500}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-lg">Full Setup & Design</h4>
                    <p className="text-sm text-gray-400 mt-2 font-light">We handle everything from tree decoration to exterior lights, creating a warm, festive atmosphere.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={600}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-lg">Free Takedown in January</h4>
                    <p className="text-sm text-gray-400 mt-2 font-light">Enjoy the season. When it's over, we return to carefully take everything down and pack it away for you.</p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={700}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-lg">Payment Terms</h4>
                    <p className="text-sm text-gray-400 mt-2 font-light">All lights and decor must be paid for upfront. Full T&Cs apply.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={800}>
              <div className="mt-12">
                <a href="#contact" className="btn-shimmer inline-block px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Book Your Christmas Slot
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative">
             <Reveal delay={300}>
                <div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-900 border border-white/10 group rounded-lg shadow-2xl">
                  {/* High quality Christmas Image */}
                   <img 
                    src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1200&auto=format&fit=crop" 
                    alt="Warm and elegant Christmas living room interior with tree and fireplace" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105 saturate-50 group-hover:saturate-100"
                  /> 
                  <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none z-10 rounded-sm"></div>
                  
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  
                  {/* Frost shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChristmasService;