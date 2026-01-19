import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import './src/subscriber/order.subscriber.js';
import './src/subscriber/product.subscriber.js';
import './src/subscriber/user.subscriber.js';
import productRoutes from './src/routes/product.routes.js';
import orderRoutes from './src/routes/orders.routes.js';
import userRoutes from './src/routes/user.routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Panto API is running...');
});



app.listen(PORT, () => {
  console.log(`
  🚀 Server is running on port ${PORT}
  🔗 http://localhost:${PORT}
  `);
});
