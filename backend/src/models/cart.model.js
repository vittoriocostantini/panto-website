import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  guestId: { type: String, default: null },
  items: [{
    productId: { type: String, required: true }, // Coincide con el frontend
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    category: String
  }]
}, { timestamps: true, versionKey: false });

export const Cart = model('Cart', cartSchema);
