import React from 'react';
import { Reveal } from './Reveal';

const images = [
  {
    src: "assets/bathroom 1.jpg",
    alt: "Modern bathroom renovation with fresh paint",
    fallback: "https://picsum.photos/600/600?random=1"
  },
  {
    src: "assets/p&d exterior 1.jpg",
    alt: "Exterior house painting in Deal",
    fallback: "https://picsum.photos/600/600?random=2"
  },
  {
    src: "assets/bathroom 2.jpg",
    alt: "Luxury bathroom finish detail",
    fallback: "https://picsum.photos/600/600?random=3"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Recent Work</h2>
            <div className="w-20 h-[1px] bg-white mx-auto opacity-50"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="group relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    // Fallback if local asset is missing during development
                    const target = e.target as HTMLImageElement;
                    target.src = img.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest text-xs uppercase border border-white px-6 py-3 rounded-full backdrop-blur-sm">View Project</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;