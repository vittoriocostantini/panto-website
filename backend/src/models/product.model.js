import { Schema, model } from 'mongoose';


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

// ... todo tu schema igual ...

// Cambia la última línea por esto:
export const Product = model('Product', productSchema);
