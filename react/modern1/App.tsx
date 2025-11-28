import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Banner />
        <AboutSection />
        <ServiceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;