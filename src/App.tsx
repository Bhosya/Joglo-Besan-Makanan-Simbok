import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Info from './components/Info';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-amber-50/80 text-stone-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Info />
        <Features />
        <Services />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;