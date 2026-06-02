import { useState } from 'react';

const QuickQuoteForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    businessType: '',
    serviceCategory: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts selecting
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.businessType || !formData.serviceCategory) {
      setError('Please select both a business type and a service category.');
      return;
    }

    // Success
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="businessType">Business Type</label>
        <select 
          id="businessType"
          name="businessType" 
          value={formData.businessType} 
          onChange={handleChange}
        >
          <option value="" disabled>Select Business Type</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
          <option value="Partnership Firm">Partnership Firm</option>
          <option value="LLP">LLP</option>
          <option value="Unsure">Unsure</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="serviceCategory">Service Category</label>
        <select 
          id="serviceCategory"
          name="serviceCategory" 
          value={formData.serviceCategory} 
          onChange={handleChange}
        >
          <option value="" disabled>Select Service Category</option>
          <option value="Business Registration">Business Registration</option>
          <option value="GST & Tax">GST & Tax</option>
          <option value="Trademarks">Trademarks</option>
          <option value="Legal Drafting">Legal Drafting</option>
          <option value="Annual Compliance">Annual Compliance</option>
        </select>
      </div>
      
      {error && <p className="form-error" style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '-0.5rem' }}>{error}</p>}
      
      <button type="submit" className="btn-primary w-100">Get a Quick Quote</button>
    </form>
  );
};

export default QuickQuoteForm;
