import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="tc-container">
      <div className="tc-content">
        <h1>Terms and Conditions</h1>
        <p className="tc-last-updated">Last Updated: June 21, 2026</p>

        <div className="tc-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Sharanya Legal. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>
        </div>

        <div className="tc-section">
          <h2>2. Services Offered</h2>
          <p>
            Sharanya Legal provides legal consulting, drafting, business registration, and compliance services. The scope of each service is agreed upon individually with the client. The information provided on this website is for general informational purposes only and does not constitute formal legal advice until a formal client-attorney relationship is established.
          </p>
        </div>

        <div className="tc-section">
          <h2>3. Initial Consultation & Fees</h2>
          <p>
            An initial consultation fee (currently set at Rs. 299, subject to change) is required to secure a consultation appointment. 
          </p>
          <ul>
            <li><strong>Payment Requirement:</strong> The consultation will only be scheduled after successful payment of the consultation fee.</li>
            <li><strong>Refund Policy:</strong> If, for any reason, Sharanya Legal is unable to provide the consultation or take up your case/request, the consultation fee will be fully refunded to the original payment method within 5-7 business days.</li>
            <li><strong>No-Shows:</strong> If the client fails to attend the scheduled consultation without prior notice, the fee is non-refundable.</li>
          </ul>
        </div>

        <div className="tc-section">
          <h2>4. Client Responsibilities</h2>
          <p>
            Clients must provide accurate, complete, and timely information required for the execution of the services. Sharanya Legal is not responsible for any delays, penalties, or negative outcomes resulting from incomplete or inaccurate information provided by the client.
          </p>
        </div>

        <div className="tc-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            <strong>For the Owner (Sharanya Legal):</strong> To the maximum extent permitted by applicable law, Sharanya Legal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your use of or inability to use our services; (b) any unauthorized access to or use of our secure servers and/or any personal information stored therein.
          </p>
          <p>
            <strong>For the Website Developer:</strong> The freelance developer of this website provides the software "as is" and is not responsible for the legal services provided, data breaches, or third-party service failures (such as payment gateways or email services). The developer's liability is strictly limited to the technical maintenance as agreed in their contract.
          </p>
        </div>

        <div className="tc-section">
          <h2>6. Privacy and Data Protection</h2>
          <p>
            We respect your privacy. Any personal information (such as name, email, WhatsApp number, and case details) collected through our forms will be used solely for the purpose of providing legal services and will not be shared with unauthorized third parties. However, data transmitted over the internet cannot be guaranteed to be 100% secure.
          </p>
        </div>

        <div className="tc-section">
          <h2>7. Third-Party Services</h2>
          <p>
            Our website uses third-party services like Razorpay for payments and EmailJS for communications. By using these features, you also agree to the respective Terms of Service of these third-party providers.
          </p>
        </div>

        <div className="tc-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
          </p>
        </div>

        <div className="tc-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Any changes will be updated on this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
