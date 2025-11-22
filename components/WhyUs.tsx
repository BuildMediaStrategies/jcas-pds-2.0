import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const reasons = [
  "Local experts serving Deal & Dover",
  "Clean, tidy, and respectful",
  "Fully insured and vetted",
  "Transparent pricing: No hidden fees",
  "High-quality materials used",
  "Flexible scheduling for your convenience"
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Why Choose JCAS?</h2>
              <p className="text-gray-400 mb-10 text-lg font-light">
                We believe in more than just painting walls. We believe in providing a service that is reliable, professional, and entirely stress-free. Your home is your sanctuary, and we treat it that way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-white w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm font-medium tracking-wide">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="relative bg-black p-10 border border-white/10 rounded-lg">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
              <blockquote className="relative z-10">
                <p className="text-xl font-serif italic text-gray-300 leading-relaxed mb-8">
                  "Absolutely transformed our living room. The attention to detail was immaculate, and they left the place cleaner than they found it. Highly recommended for anyone in Dover."
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-white"></div>
                  <span className="text-white font-bold tracking-widest uppercase text-xs">
                    Sarah J., Dover
                  </span>
                </footer>
              </blockquote>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;