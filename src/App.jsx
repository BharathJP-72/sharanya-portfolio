// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreServices from './components/CoreServices';
import LegalDrafting from './components/LegalDrafting';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <LegalDrafting />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
