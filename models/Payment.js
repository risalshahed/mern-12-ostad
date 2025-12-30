import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    orderId: String,
    transactionId: String,
    amount: Number,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model('Payment', paymentSchema);