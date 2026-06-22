// import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import QuickQuoteForm from './QuickQuoteForm';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted Partner for <span className="cyan-text">Business Registration</span> & Legal Compliance
          </h1>
          <p className="hero-subtitle">
            High-speed legal back office. We cut through the bureaucratic hurdles with aggressive precision, getting your business compliant and registered faster than traditional law firms.
          </p>
          
          <div className="hero-badges">
            <div className="badge">
              <Zap size={16} className="cyan-text" />
              <span>Fast Turnaround</span>
            </div>
            <div className="badge">
              <ShieldCheck size={16} className="cyan-text" />
              <span>Bar Council Registered</span>
            </div>
          </div>
        </div>

        <div className="hero-form-container">
          <div className="quote-card">
            <h3 className="quote-title">Quick Quote</h3>
            <p className="quote-subtitle">Get a custom quote in minutes</p>
            
            <QuickQuoteForm onFormSubmit={(data) => {
              window.location.href = '/#drafting';
              // Could store `data` in context or localStorage if needed for pre-filling later
            }} />
          </div>
        </div>
      </div>
      
      <div className="hero-ticker">
        <div className="ticker-content">
          <span>MSME IN 1-2 DAYS</span>
          <span className="dot">•</span>
          <span>GST IN 5-7 DAYS</span>
          <span className="dot">•</span>
          <span>TRADEMARK FILING IN 3 DAYS</span>
          <span className="dot">•</span>
          <span>PARTNERSHIP REGISTRATION IN 4 DAYS</span>
          <span className="dot">•</span>
          <span>MORE IN 1-2 WEEKS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
