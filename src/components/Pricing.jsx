// import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            Transparent <span className="cyan-glow-text">Pricing</span>
          </h2>
          <div className="pricing-subtitle">
            <CheckCircle2 size={20} className="cyan-text" />
            <p>No Hidden Charges. Clear separation of professional and government fees.</p>
          </div>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>SERVICE</th>
                <th>PROFESSIONAL FEE</th>
                <th>APPROX. GOVT FEES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Partnership Firm Registration</td>
                <td className="fee-bold">Rs. 3,000 - 8,000</td>
                <td>Rs. 100 - 500</td>
              </tr>
              <tr>
                <td>LLP Registration</td>
                <td className="fee-bold">Rs. 7,000 - 15,000</td>
                <td>Rs. 500 - 2,000</td>
              </tr>
              <tr>
                <td>GST Registration</td>
                <td className="fee-bold">Rs. 1,500 - 3,000</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>MSME / Udyam Registration</td>
                <td className="fee-bold">Rs. 500 - 1,000</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Trademark Filing</td>
                <td className="fee-bold">Rs. 5,000 - 12,000</td>
                <td>Rs. 4,500 - 9,000</td>
              </tr>
              <tr>
                <td>Annual Compliance Package</td>
                <td className="fee-bold">Rs. 5,000 - 20,000/yr</td>
                <td>As applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
