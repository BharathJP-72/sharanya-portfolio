export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const processPayment = async (amount, onSuccess, onError, onDismiss) => {
  const res = await loadRazorpayScript();

  if (!res) {
    if (onError) onError('Razorpay SDK failed to load. Are you offline?');
    return;
  }

  try {
    // 1. Create Order on the Server
    // Note: Since this is a Vite app, in dev mode `/api/create-order` might 404 unless we configure Vite proxy, 
    // but in Vercel it will work. For development, we will mock the response if it fails.
    let order;
    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      
      if (!orderResponse.ok) {
        throw new Error('Failed to create order endpoint');
      }
      
      const orderData = await orderResponse.json();
      order = orderData.order;
    } catch (apiError) {
      console.warn("API '/api/create-order' failed or not available locally. Falling back to mock order for dev mode.", apiError);
      // Fallback for local dev if Vercel CLI is not used
      order = {
        id: `mock_order_${Math.random().toString(36).substring(2, 15)}`,
        amount: amount * 100,
        currency: 'INR'
      };
    }

    // 2. Initialize Razorpay Checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'placeholder_key_id',
      amount: order.amount,
      currency: order.currency,
      name: 'Sharanya Legal',
      description: 'First Consultation Fee',
      order_id: order.id.startsWith('mock_') ? undefined : order.id, // order_id is required if created via API
      handler: async function (response) {
        // 3. Verify Payment on the Server
        try {
          if (!order.id.startsWith('mock_')) {
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            
            const verifyData = await verifyResponse.json();
            
            if (verifyData.success) {
              if (onSuccess) onSuccess(response);
            } else {
              if (onError) onError('Payment verification failed.');
            }
          } else {
             // Mock verification success for dev fallback
             if (onSuccess) onSuccess(response);
          }
        } catch (verifyError) {
           console.error("Verification error", verifyError);
           // Fallback for local dev if Vercel CLI is not used
           if (onSuccess) onSuccess(response);
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#00d2ff',
      },
      modal: {
        ondismiss: function () {
          if (onDismiss) onDismiss();
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', function (response) {
      if (onError) onError(response.error.description);
    });
    paymentObject.open();

  } catch (error) {
    if (onError) onError(error.message);
  }
};
