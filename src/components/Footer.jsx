// React is not needed when using new JSX transform
import { Link } from 'react-router-dom';
import { MessageCircle, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Sharanya Legal</h2>
          <p className="footer-subtext">High Speed Legal Tech.</p>
          <p className="footer-subtext">Bar Council Registration KAR/XXXX/XXXX</p>
          
          <div className="footer-contact">
            <div className="contact-item">
              <MessageCircle size={18} className="contact-icon" />
              <span>WhatsApp: +919888133599</span>
            </div>
            <div className="contact-item">
              <Clock size={18} className="contact-icon" />
              <span>Mon-Sat: 9AM - 8PM</span>
            </div>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h4 className="footer-heading">SERVICES</h4>
            <ul>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">LLP Registration</a></li>
              <li><a href="#">GST Filing</a></li>
              <li><a href="#">Trademark</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">LEGAL</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
