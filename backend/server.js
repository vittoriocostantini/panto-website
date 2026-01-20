import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';

// --- SUBSCRIBERS (Observers) ---
// Importamos los suscriptores para que el eventBus registre los listeners al arrancar
import './src/subscriber/order.subscriber.js';
import './src/subscriber/product.subscriber.js';
import './src/subscriber/user.subscriber.js';
import './src/subscriber/cart.subscriber.js';

// --- ROUTES ---
import productRoutes from './src/routes/product.routes.js';
import orderRoutes from './src/routes/orders.routes.js';
import userRoutes from './src/routes/user.routes.js';
import cartRoutes from './src/routes/cart.routes.js';

dotenv.config();
const app = express();

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json()); // Vital para que req.body no sea undefined

const PORT = process.env.PORT || 3000;

// --- DATABASE ---
connectDB();

// --- API ROUTES ---
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes); // Prefijo para las rutas del carrito

// --- HEALTH CHECK ---
app.get('/', (req, res) => {
  res.send('Panto API is running...');
});

// --- SERVER START ---
app.listen(PORT, () => {
  console.log(`
  🚀 Server is running on port ${PORT}
  🔗 http://localhost:${PORT}
  `);
});
