import emailjs from '@emailjs/browser';

// To be configured with the user's EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER || 'YOUR_TEMPLATE_OWNER';
const EMAILJS_TEMPLATE_CLIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT || 'YOUR_TEMPLATE_CLIENT';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

/**
 * Sends an email notification to the owner (Sharanya Legal).
 */
export const sendOwnerEmail = async (formData) => {
  try {
    const templateParams = {
      to_name: 'Sharanya', // Owner name
      from_name: formData.fullName,
      client_email: formData.emailAddress,
      client_whatsapp: formData.whatsappNumber,
      selected_services: formData.selectedServices.join(', '),
      description: formData.description || 'No additional details provided.',
      payment_id: formData.paymentId,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_OWNER,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Owner email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send owner email:', error);
    return false;
  }
};

/**
 * Sends a confirmation email to the client, including refund policy.
 */
export const sendClientEmail = async (formData) => {
  try {
    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.emailAddress,
      payment_id: formData.paymentId,
      // The template on EmailJS should include the T&C / refund text.
      // But we can also pass it explicitly.
      message: 'Thank you for your payment. Your consultation request has been received. Please note that in case the consultation is not possible, the fee will be refunded as per our Terms & Conditions.'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_CLIENT,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Client confirmation email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send client email:', error);
    return false;
  }
};
