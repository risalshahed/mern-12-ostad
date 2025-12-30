import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  createPayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIPN,
} from '../controllers/paymentController.js';

const router = express.Router();

/**
 * ============================
 * PAYMENT INITIALIZATION
 * ============================
 * Private Route
 * Logged-in user only
 * Creates order + redirects to gateway
 */
router.post('/init', authMiddleware, createPayment);

/**
 * ============================
 * PAYMENT CALLBACK ROUTES
 * ============================
 * These routes are called by SSLCommerz
 * No auth needed (Gateway server calls)
 */

// Payment success
router.post('/success/:orderId', paymentSuccess);

// Payment failed
router.post('/fail/:orderId', paymentFail);

// Payment cancelled by user
router.post('/cancel/:orderId', paymentCancel);

// Instant Payment Notification (IPN)
router.post('/ipn', paymentIPN);

export default router;