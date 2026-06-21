import { useState } from 'react';
import { Link } from 'react-router-dom';
import { processPayment } from '../utils/razorpay';
import { sendOwnerEmail, sendClientEmail } from '../utils/emailjs';
import './CustomQuoteForm.css';

const SERVICES = [
  "Partnership Registration",
  "LLP Registration",
  "GST Registration",
  "MSME Registration",
  "Trademark Filing",
  "Wills & Property Deeds",
  "General Drafting"
];

const CustomQuoteForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    emailAddress: '',
    selectedServices: [],
    description: '',
    agreedToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updatedServices = checked
        ? [...prev.selectedServices, value]
        : prev.selectedServices.filter(service => service !== value);
        
      return { ...prev, selectedServices: updatedServices };
    });

    if (errors.selectedServices) {
      setErrors(prev => ({ ...prev, selectedServices: null }));
    }
  };

  const handleTermsChange = (e) => {
    setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }));
    if (errors.agreedToTerms) {
      setErrors(prev => ({ ...prev, agreedToTerms: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic Validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email Address is required.';
    
    const digitsOnly = formData.whatsappNumber.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      newErrors.whatsappNumber = 'WhatsApp Number must be at least 10 digits.';
    }

    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = 'Please select at least one service.';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the Terms & Conditions.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsProcessing(true);

    await processPayment(
      299, // Amount for first consultation
      async (response) => {
        const finalData = { ...formData, paymentId: response.razorpay_payment_id };
        
        // Send emails
        await sendOwnerEmail(finalData);
        await sendClientEmail(finalData);

        setIsProcessing(false);
        // On Success
        if (onFormSubmit) {
          onFormSubmit(finalData);
        } else {
          alert('Payment Successful! We have received your request and sent a confirmation email.');
        }
      },
      (errorMsg) => {
        setIsProcessing(false);
        alert(`Payment Failed: ${errorMsg}`);
      },
      () => {
        setIsProcessing(false);
      }
    );
  };

  return (
    <form className="custom-quote-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleTextChange}
            placeholder="John Doe"
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="whatsappNumber">WhatsApp Number</label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleTextChange}
            placeholder="+91 90000 00000"
          />
          {errors.whatsappNumber && <span className="error-text">{errors.whatsappNumber}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleTextChange}
          placeholder="john@example.com"
        />
        {errors.emailAddress && <span className="error-text">{errors.emailAddress}</span>}
      </div>

      <div className="form-group">
        <label>Services Required</label>
        <div className="checkbox-grid">
          {SERVICES.map(service => (
            <label key={service} className="checkbox-label">
              <input
                type="checkbox"
                name="selectedServices"
                value={service}
                checked={formData.selectedServices.includes(service)}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-custom"></span>
              {service}
            </label>
          ))}
        </div>
        {errors.selectedServices && <span className="error-text">{errors.selectedServices}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Tell us more about your needs</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleTextChange}
          placeholder="Briefly describe your business and requirements..."
          rows="4"
        ></textarea>
      </div>

      <div className="form-group terms-group">
        <label className="checkbox-label terms-label">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleTermsChange}
          />
          <span className="checkbox-custom"></span>
          <span className="terms-text">
            I agree to the <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link> and acknowledge that the consultation fee will be refunded if the consultation is not possible.
          </span>
        </label>
        {errors.agreedToTerms && <span className="error-text">{errors.agreedToTerms}</span>}
      </div>

      <button type="submit" className="btn-primary w-100 submit-btn" disabled={isProcessing}>
        {isProcessing ? 'Processing Payment...' : 'Request First Consultation (Rs. 299)'}
      </button>
    </form>
  );
};

export default CustomQuoteForm;
