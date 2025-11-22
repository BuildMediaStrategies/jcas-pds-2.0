import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChristmasService from './components/ChristmasService';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ChristmasService />
        <WhyUs />
        <Gallery />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default App;