import './TermsAndConditions.css'; // Reusing the same styles as T&C for consistency

const PrivacyPolicy = () => {
  return (
    <div className="tc-container">
      <div className="tc-content">
        <h1>Privacy Policy</h1>
        <p className="tc-last-updated">Last Updated: June 21, 2026</p>

        <div className="tc-section">
          <h2>1. Introduction</h2>
          <p>
            At Sharanya Legal, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>
        </div>

        <div className="tc-section">
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the services you use. 
          </p>
          <ul>
            <li><strong>Personal Info Provided by You:</strong> We collect names, phone numbers, email addresses, and other similar information.</li>
            <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Razorpay.</li>
          </ul>
        </div>

        <div className="tc-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To fulfill and manage your orders and requests.</li>
            <li>To send administrative information to you.</li>
            <li>To request feedback and to contact you about your use of our website.</li>
          </ul>
        </div>

        <div className="tc-section">
          <h2>4. Will Your Information be Shared with Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
          </p>
        </div>

        <div className="tc-section">
          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
