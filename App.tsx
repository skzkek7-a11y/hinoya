
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BrandStory from './components/BrandStory';
import Franchise from './components/Franchise';
import StoreLocator from './components/StoreLocator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Menu />
        <BrandStory />
        <Franchise />
        <StoreLocator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
