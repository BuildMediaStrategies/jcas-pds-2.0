import React from 'react';
import { MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const locations = [
  "Deal",
  "Dover",
  "Canterbury",
  "Thanet"
];

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Areas We Cover</h2>
        </Reveal>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-16">
          {locations.map((loc, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-default group">
                <MapPin size={20} className="text-white group-hover:animate-bounce" />
                <span className="text-xl md:text-2xl font-serif tracking-wide">{loc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;