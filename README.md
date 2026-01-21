

# 🛋️ Panto - Furniture & Interior Design E-commerce

<div align="center">

</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/vittoriocostantini/panto-website/main/client/src/assets/main-principal.png" alt="Panto Website Main" width="800">
</p>

## 📋 Description

Panto is a modern and elegant e-commerce platform specializing in furniture and interior design. It offers a seamless user experience with a minimalist and contemporary design, allowing users to explore, select, and purchase decor products to transform their spaces.

## ✨ Main Features

### Frontend

* 🎨 **Modern & Responsive Design**: Minimalist interface adapted for all devices.
* 🛒 **Cart System**: Shopping cart with support for both registered users and guests.
* 🔐 **User Authentication**: Secure registration and login system using JWT.
* 📦 **Product Management**: Comprehensive catalog with search and filtering capabilities.
* 💳 **Order Management**: Complete order processing system.
* ⭐ **Testimonials & Reviews**: Dedicated section for customer feedback.
* 🎯 **Route Guards**: Protection for private routes.
* 🔔 **Notification System**: Toast notifications for user feedback.

### Backend

* 🚀 **RESTful API**: Full and scalable REST architecture.
* 🔒 **JWT Authentication**: Secure authentication system.
* 🗄️ **MongoDB Database**: Flexible and efficient data storage.
* 👥 **User Management**: Full User CRUD functionality.
* 📦 **Product Management**: Catalog administration.
* 🛒 **Cart System**: Cart management for users and guests.
* 📋 **Order Management**: Order processing and tracking.
* 🔄 **Observer Pattern**: Implementation of subscribers for events.

## 🛠️ Tech Stack

### Frontend

* **React 19.2**: UI Library.
* **TypeScript**: Static typing.
* **Vite**: Build tool and dev server.
* **Redux Toolkit**: Global state management.
* **React Router DOM**: Routing.
* **Material-UI (MUI)**: UI components.
* **Tailwind CSS**: Utility-first styling.
* **Axios**: HTTP client.
* **React Slick**: Carousel/Slider.

### Backend

* **Node.js**: JavaScript runtime.
* **Express 5.2**: Web framework.
* **MongoDB**: NoSQL database.
* **Mongoose**: ODM for MongoDB.
* **JWT (jsonwebtoken)**: Authentication.
* **bcryptjs**: Password encryption.
* **CORS**: Cross-Origin Resource Sharing management.
* **dotenv**: Environment variables.

## 📁 Project Structure

```
panto-website/
├── client/                 # React/TypeScript Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── common/     # Common components
│   │   │   ├── features/   # Feature-based components
│   │   │   └── layout/     # Layout components
│   │   ├── guards/         # Authentication guards
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Application pages
│   │   ├── redux/          # Redux global state
│   │   ├── routes/         # Route configuration
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   └── utils/          # Utilities
│   └── ...
├── backend/                # Node.js/Express Backend
│   ├── src/
│   │   ├── config/         # Configuration (DB, etc.)
│   │   ├── controllers/    # Controllers
│   │   ├── middleware/     # Middlewares (auth, etc.)
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── subscriber/     # Observers/Subscribers
│   │   └── utils/          # Utilities
│   └── server.js           # Server entry point
└── ...

```

## 🚀 Installation & Setup

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* MongoDB (Local or MongoDB Atlas)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd panto-website

```

2. **Install frontend dependencies**

```bash
cd client
npm install

```

3. **Install backend dependencies**

```bash
cd ../backend
npm install

```

4. **Configure environment variables**

Create a `.env` file in the `backend/` root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/panto
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/panto
JWT_SECRET=your_very_secure_secret_key

```

5. **Start MongoDB**

```bash
# If using local MongoDB
mongod

```

## 🎯 Usage

### Development

**Start the backend:**

```bash
cd backend
npm run dev

```

The server will run at `http://localhost:3000`

**Start the frontend:**

```bash
cd client
npm run dev

```

The application will run at `http://localhost:5173` (or the port assigned by Vite)

### Production

**Frontend Build:**

```bash
cd client
npm run build

```

**Preview Build:**

```bash
npm run preview

```

**Run Backend in Production:**

```bash
cd backend
node server.js

```

## 🔌 API Endpoints

### Authentication

* `POST /api/users/register` - User registration
* `POST /api/users/login` - User login

### Products

* `GET /api/products` - Get all products
* `GET /api/products/:id` - Get product by ID
* `POST /api/products` - Create product (requires auth)
* `PUT /api/products/:id` - Update product (requires auth)
* `DELETE /api/products/:id` - Delete product (requires auth)

### Cart

* `GET /api/cart/:userId` - Get user's cart
* `POST /api/cart` - Add product to cart
* `PUT /api/cart/:cartId` - Update cart
* `DELETE /api/cart/:cartId` - Delete cart

### Orders

* `GET /api/orders` - Get all orders (requires auth)
* `GET /api/orders/:id` - Get order by ID (requires auth)
* `POST /api/orders` - Create a new order (requires auth)

### Users

* `GET /api/users/:id` - Get user by ID (requires auth)
* `PUT /api/users/:id` - Update user (requires auth)

## 🔐 Security

* Passwords encrypted with **bcryptjs**.
* **JWT Authentication** for protected routes.
* Authentication middleware on sensitive endpoints.
* **CORS** configured for security.
* Environment variables for sensitive information.

## 🎨 Design & UI

The application features a modern and minimalist design including:

* **Hero Section**: Main image with a call-to-action.
* **Why Choose Us**: Highlighted features section.
* **Products**: Catalog with interactive cards.
* **About Us**: Company information.
* **Testimonials**: Customer reviews with carousel.
* **Header & Footer**: Navigation and important links.

## 📝 Available Scripts

### Frontend

* `npm run dev`: Starts the development server.
* `npm run build`: Builds the app for production.
* `npm run preview`: Previews the production build.
* `npm run lint`: Runs the linter.

### Backend

* `npm run dev`: Starts the server with nodemon.

## 📄 License

This project is private. All rights reserved.

## 👥 Author

Developed with ❤️ for Panto

---

<div align="center">
Made with React, TypeScript, Node.js, and MongoDB
</div>

---

</div>


