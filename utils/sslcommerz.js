// import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// export const initPayment = async ({ amount, successUrl, failUrl }) => {
export const initPayment = async ({ amount, successUrl }) => {
  const transactionId = uuidv4();

  // Fake payment page (simulate gateway redirect)
  return {
    status: 'SUCCESS',
    tran_id: transactionId,

    // Frontend এই URL এ redirect করবে
    GatewayPageURL: `${successUrl}?tran_id=${transactionId}&amount=${amount}`,
  };

  /* const payload = {
    store_id: process.env.SSLCOMMERZ_STORE_ID,
    store_passwd: process.env.SSLCOMMERZ_STORE_PASS,
    total_amount: amount,
    currency: 'BDT',
    tran_id: transactionId,
    success_url: successUrl,
    fail_url: failUrl,
    cancel_url: failUrl,
    product_name: 'Course Payment',
    cus_name: 'Demo User',
    cus_email: 'demo@email.com',
  };

  const response = await axios.post(process.env.SSLCOMMERZ_URL, payload);

  return response.data; */
};