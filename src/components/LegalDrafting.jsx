import { useState, useEffect } from 'react';
import { Home, ScrollText, Handshake, FileSignature, ArrowRight } from 'lucide-react';
import CustomQuoteForm from './CustomQuoteForm';
import './LegalDrafting.css';

const LegalDrafting = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#drafting') {
        setShowQuoteForm(true);
      }
    };
    
    // Check on mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="drafting" className="legal-drafting">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="cyan-text">Legal Drafting</span> & Property Registration
          </h2>
          <p className="section-subtitle">Professional drafting and end-to-end registration assistance.</p>
        </div>

        <div className="bento-grid">
          {/* Large Left Card */}
          <div className="bento-card large-card">
            <div className="bento-icon-wrapper">
              <Home size={24} className="cyan-text" />
            </div>
            <div className="bento-content">
              <h3 className="bento-title">Sale Agreement & Deed</h3>
              <p className="bento-desc">Drafting and end-to-end registration assistance for property transactions.</p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="bento-card top-right">
            <div className="bento-header-flex">
              <div className="bento-icon-wrapper">
                <ScrollText size={20} className="cyan-text" />
              </div>
              <span className="badge-outline">Online</span>
            </div>
            <div className="bento-content">
              <h3 className="bento-title">Will Drafting & Registration</h3>
              <p className="bento-desc">Witness drafting and full registration assistance.</p>
            </div>
          </div>

          {/* Bottom Middle Card */}
          <div className="bento-card bottom-mid">
            <div className="bento-icon-wrapper">
              <Handshake size={20} className="cyan-text" />
            </div>
            <div className="bento-content">
              <h3 className="bento-title">MoU Drafting & Printing</h3>
              <p className="bento-desc">Legally valid MoUs, NDAs, and agreements.</p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="bento-card bottom-right">
            <div className="bento-icon-wrapper">
              <FileSignature size={20} className="cyan-text" />
            </div>
            <div className="bento-content">
              <h3 className="bento-title">General Legal Documents</h3>
              <p className="bento-desc">Customized legal documents.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Start Your Business Journey Today.</h2>
          <button className="btn-primary cta-btn pulse-animation" onClick={() => setShowQuoteForm(!showQuoteForm)}>
            {showQuoteForm ? 'Hide Form' : 'Tell Your Exact Needs'} <ArrowRight size={16} />
          </button>
          
          {showQuoteForm && (
            <div style={{ marginTop: '3rem', textAlign: 'left' }}>
              <CustomQuoteForm onFormSubmit={(data) => {
                console.log('Custom Quote Data:', data);
                alert('Consultation Requested! Check console for payload.');
                setShowQuoteForm(false);
              }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalDrafting;
