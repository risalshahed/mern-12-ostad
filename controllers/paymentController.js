import Order from '../models/Order.js';
import Payment from '../models/Payment.js';
import { initPayment } from '../utils/sslcommerz.js';
import asyncHandler from '../middlewares/asyncHandler.js';

/**
 * ===============================
 * CREATE PAYMENT (INIT)
 * ===============================
 * 1. Logged-in user only
 * 2. Create Order (PENDING)
 * 3. Redirect user to SSLCommerz
 */
export const createPayment = asyncHandler(async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    res.status(400);
    throw new Error('Amount is required');
  }

  // 1️⃣ Create Order
  const order = await Order.create({
    user: req.user._id,
    amount,
    status: 'PENDING',
  });

  // 2️⃣ Init Payment Gateway
  const paymentSession = await initPayment({
    amount,
    successUrl: `http://localhost:5000/api/payment/success/${order._id}`,
    failUrl: `http://localhost:5000/api/payment/fail/${order._id}`,
    cancelUrl: `http://localhost:5000/api/payment/cancel/${order._id}`,
  });

  // 3️⃣ Send Gateway URL to frontend
  res.status(200).json({
    success: true,
    paymentUrl: paymentSession.GatewayPageURL,
    orderId: order._id,
  });
});

/**
 * ===============================
 * PAYMENT SUCCESS CALLBACK
 * ===============================
 * Called by SSLCommerz server
 */
export const paymentSuccess = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  // Gateway normally body দেয়
  // Mock mode এ query থেকে নিচ্ছি
  const transactionId = req.body.tran_id || req.query.tran_id;
  const amount = req.body.amount || req.query.amount;

  await Order.findByIdAndUpdate(orderId, { status: 'PAID' });

  await Payment.create({
    orderId,
    transactionId,
    amount,
    status: 'SUCCESS',
  });

  res.send('Payment Successful (Mock Mode)');
});

/**
 * ===============================
 * PAYMENT FAILED CALLBACK
 * ===============================
 */
export const paymentFail = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  await Order.findByIdAndUpdate(orderId, { status: 'FAILED' });

  await Payment.create({
    orderId,
    transactionId: req.body.tran_id || null,
    amount: req.body.amount || 0,
    status: 'FAILED',
  });

  res.send('Payment Failed');
});

/**
 * ===============================
 * PAYMENT CANCEL CALLBACK
 * ===============================
 */
export const paymentCancel = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  await Order.findByIdAndUpdate(orderId, { status: 'FAILED' });

  res.send('Payment Cancelled by User');
});

/**
 * ===============================
 * PAYMENT IPN (Optional but Pro)
 * ===============================
 * Background verification
 */
export const paymentIPN = asyncHandler(async (req, res) => {
  // In real production:
  // Validate transaction from SSLCommerz validation API

  console.log('IPN Data:', req.body);

  res.status(200).json({ message: 'IPN received' });
});
