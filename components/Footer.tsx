import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
             <h3 className="font-serif text-3xl font-bold text-white tracking-wider">JCAS <span className="font-light">P&D</span></h3>
             <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
               Transforming homes in Dover, Deal, and Kent with professional painting, decorating, and bespoke seasonal styling.
             </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Get in Touch</h4>
            <a href="tel:+447000000000" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-2 border border-white/10 rounded-full group-hover:border-white transition-colors">
                 <Phone size={18} />
              </div>
              <span className="tracking-wide">07000 000 000</span>
            </a>
            <a href="mailto:info@jcaspandd.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-2 border border-white/10 rounded-full group-hover:border-white transition-colors">
                <Mail size={18} />
              </div>
              <span className="tracking-wide">info@jcaspandd.com</span>
            </a>
          </div>

          {/* Social / Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-neutral-900 rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-neutral-900 rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">
              &copy; {new Date().getFullYear()} JCAS P&D. All rights reserved.<br />
              Full T&Cs apply to all Christmas services.
            </p>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-600 text-xs font-light">
                Website by <span className="text-gray-500 hover:text-white transition-colors cursor-pointer">Your Dev Partner</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;