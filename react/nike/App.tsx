import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSplit from './components/FeatureSplit';
import CategoryGrid from './components/CategoryGrid';
import Spotlight from './components/Spotlight';
import Trending from './components/Trending';
import IconicGrid from './components/IconicGrid';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <FeatureSplit />
        <CategoryGrid />
        <Spotlight />
        <Trending />
        <IconicGrid />
        <Membership />
      </main>
      <Footer />
    </div>
  );
}

export default App;