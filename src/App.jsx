import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreServices from './components/CoreServices';
import LegalDrafting from './components/LegalDrafting';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';

function Home() {
  return (
    <main>
      <Hero />
      <CoreServices />
      <LegalDrafting />
      <Pricing />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
