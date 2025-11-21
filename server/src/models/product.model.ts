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

export default model('Product', productSchema);
