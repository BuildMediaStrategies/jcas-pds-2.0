import React from 'react';
import { Paintbrush, Home, Layers, Grid } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Interior Painting",
    description: "Flawless finishes for living spaces, kitchens, and bathrooms. We treat your home with the utmost respect."
  },
  {
    icon: <Layers className="w-8 h-8 text-white" />,
    title: "Exterior Painting",
    description: "Weather-resistant coatings that boost curb appeal and protect your property from the elements."
  },
  {
    icon: <Grid className="w-8 h-8 text-white" />,
    title: "Wallpaper Hanging",
    description: "Expert application of patterned, textured, and delicate papers for a sophisticated look."
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-white" />,
    title: "Feature Walls",
    description: "Make a statement with bespoke color accents or mural installations tailored to your style."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Expertise</h2>
            <div className="w-20 h-[1px] bg-white mx-auto opacity-50"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light text-lg">
              Professional craftsmanship delivered with precision and cleanliness across Dover and Deal.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 h-full group rounded-lg">
                <div className="mb-6 bg-black w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300 border border-white/20 group-hover:border-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;