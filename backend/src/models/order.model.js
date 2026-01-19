import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  items: [{
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// CORRECCIÓN: Usa 'model' directamente, ya que lo importaste arriba
export const Order = model('Order', orderSchema);
