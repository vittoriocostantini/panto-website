# 🪑 Panto - Furniture E-commerce

> Modern and elegant e-commerce platform for selling high-quality furniture, built with React, TypeScript and Node.js.

![Panto Website](src/client/assets/main-principal.png)

## 📋 Description

**Panto** is a full-stack e-commerce web application specialized in furniture sales. It offers a smooth and modern user experience, with a complete authentication system, product management, shopping cart, and order processing.

The project is designed with client-server architecture, implementing modern web development best practices, static typing with TypeScript, and a responsive user interface built with React and styled with Material-UI and Tailwind CSS.

## ✨ Key Features

### Frontend
- 🎨 **Modern Interface**: Elegant and responsive design with Material-UI and Tailwind CSS
- 🔐 **Secure Authentication**: Login/registration system with Firebase Authentication
- 🛒 **Shopping Cart**: Complete cart management with Redux Toolkit
- 📱 **Responsive Design**: Optimized for mobile devices, tablets, and desktop
- 🎭 **Authentication Guards**: Protected routes for authenticated users
- 🎠 **Interactive Carousels**: Product and testimonial galleries with React Slick
- 📦 **Product Catalog**: Product filtering and categorization system
- ⭐ **Testimonial System**: Customer reviews and opinions section
- 🎯 **User Experience**: Intuitive and smooth navigation with React Router

### Backend
- 🚀 **RESTful API**: Well-structured endpoints with Express.js
- 🗄️ **MongoDB Database**: Efficient storage with Mongoose
- ✅ **Data Validation**: Robust schemas with Zod
- 🔒 **Firebase Admin**: Firebase integration for server-side authentication
- 📝 **Logging**: Log system with Morgan
- 🌐 **Configured CORS**: Allowed origins control
- 🎯 **TypeScript**: Typed and maintainable code

## 🛠️ Technologies

### Frontend
| Technology | Version | Purpose |
|-----------|---------|-----------|
| React | ^19.2.0 | UI Library |
| TypeScript | ~5.9.3 | Programming Language |
| Vite | ^7.2.2 | Build tool and dev server |
| Redux Toolkit | ^2.10.1 | Global state management |
| Material-UI | ^7.3.5 | UI Components |
| Tailwind CSS | ^4.1.17 | CSS Framework |
| Firebase | ^12.6.0 | Authentication |
| React Router | ^7.9.6 | Navigation |
| React Slick | ^0.31.0 | Carousels |

### Backend
| Technology | Version | Purpose |
|-----------|---------|-----------|
| Express | ^4.21.2 | Web Framework |
| TypeScript | ^5.9.3 | Programming Language |
| MongoDB/Mongoose | ^8.20.1 | Database |
| Firebase Admin | ^13.2.0 | Backend Authentication |
| Zod | ^3.24.1 | Schema Validation |
| Morgan | ^1.10.1 | HTTP Logger |
| CORS | ^2.8.5 | Cross-Origin Resource Sharing |

## 📁 Project Structure

```
panto-website/
│
├── src/client/                 # Frontend code
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   │   ├── button-carousel.tsx
│   │   │   ├── card-products.tsx
│   │   │   ├── cards-checkout.tsx
│   │   │   ├── carousel-slider.tsx
│   │   │   ├── notification-toast.tsx
│   │   │   └── testimonial-card.tsx
│   │   ├── features/          # Feature components
│   │   │   └── select-bar-product.tsx
│   │   └── layout/            # Layout components
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       ├── hero.tsx
│   │       ├── about-us.tsx
│   │       ├── products-container.tsx
│   │       ├── search-bar.tsx
│   │       ├── testimonials.tsx
│   │       └── why-choosing.tsx
│   │
│   ├── pages/
│   │   ├── public/            # Public pages
│   │   │   ├── home/
│   │   │   └── auth/
│   │   └── private/           # Private pages
│   │       └── cart/
│   │
│   ├── redux/                 # State management
│   │   ├── store/
│   │   ├── slices/
│   │   │   ├── cart.ts
│   │   │   └── products.ts
│   │   └── hooks.ts
│   │
│   ├── services/
│   │   ├── api/               # API calls
│   │   │   ├── products.ts
│   │   │   └── cart.ts
│   │   └── firebase/          # Firebase configuration
│   │       └── firebase-config.ts
│   │
│   ├── context/               # Context API
│   │   └── auth-context.tsx
│   │
│   ├── guards/                # Route guards
│   │   └── auth-guards.tsx
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── use-notification.ts
│   │   └── use-responsive-slides.ts
│   │
│   ├── routes/                # Route configuration
│   │   └── routes.ts
│   │
│   ├── types/                 # Type definitions
│   ├── constants/             # Constants
│   ├── utils/                 # Utilities
│   └── assets/                # Images and resources
│
├── server/                    # Backend code
│   └── src/
│       ├── config/            # Configurations
│       │   ├── database.ts
│       │   └── index.ts
│       │
│       ├── controllers/       # Controllers
│       │   ├── product.controller.ts
│       │   └── order.controller.ts
│       │
│       ├── models/            # Data models
│       │   ├── product.model.ts
│       │   └── orders.model.ts
│       │
│       ├── routes/            # API routes
│       │   ├── product.routes.ts
│       │   └── order.routes.ts
│       │
│       ├── services/          # Business logic
│       ├── middleware/        # Middlewares
│       ├── types/             # TypeScript types
│       ├── utils/             # Utilities
│       └── index.ts           # Entry point
│
├── shared/                    # Shared code
│   └── types/                 # Shared types
│
└── public/                    # Public resources
    └── icon.png

```

## 🚀 Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Firebase Account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/panto-website.git
cd panto-website
```

### 2. Install Dependencies

#### Frontend
```bash
npm install
```

#### Backend
```bash
cd server
npm install
```

### 3. Configure Environment Variables

#### Backend (`server/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

#### Frontend
Configure Firebase in `src/client/services/firebase/firebase-config.ts`:
```typescript
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};
```

### 4. Start the Project

#### Development

**Option 1: Run frontend and backend separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
cd server
npm run dev
```

**Option 2: Run both simultaneously (from server folder)**
```bash
cd server
npm run dev:all
```

#### Production

Frontend:
```bash
npm run build
npm run preview
```

Backend:
```bash
cd server
npm run build
npm start
```

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a specific product |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get a specific order |
| POST | `/api/orders` | Create a new order |
| PUT | `/api/orders/:id` | Update an order |
| DELETE | `/api/orders/:id` | Delete an order |

## 🎨 UI Features

### Main Sections

1. **Hero Section**: Main banner with cover image and CTA
2. **Why Choosing**: Reasons to choose Panto
3. **Products Container**: Product catalog with filters and categories
4. **About Us**: Information about the company and materials
5. **Testimonials**: Customer reviews and testimonials
6. **Footer**: Contact information and links

### Reusable Components

- **Card Products**: Product cards with image, price, and add-to-cart button
- **Carousel Slider**: Custom carousel for galleries
- **Notification Toast**: Notification system
- **Testimonial Card**: Testimonial cards with avatar and review
- **Button Carousel**: Navigation buttons for carousels
- **Search Bar**: Product search bar

## 🔒 Security

- ✅ Authentication with Firebase
- ✅ Route guards for private pages
- ✅ Data validation with Zod on the backend
- ✅ Configured CORS
- ✅ Environment variables for sensitive data
- ✅ TypeScript for compile-time error prevention

## 🎯 Global State (Redux)

### Slices

- **Cart Slice**: Shopping cart management
  - Add products
  - Remove products
  - Update quantities
  - Calculate totals

- **Products Slice**: Product management
  - Product list
  - Selected product
  - Filters and categories

## 🌐 Deployment

### Frontend (Vercel)

```bash
npm run build
vercel --prod
```

### Backend (Railway, Render, etc.)

```bash
cd server
npm run build
# Configure environment variables on the platform
# Deploy according to platform instructions
```

## 📝 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build application for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter

### Backend

- `npm run dev` - Start server in development mode with hot reload
- `npm run dev:all` - Start frontend and backend simultaneously
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start server in production
- `npm run lint` - Run linter

## 🤝 Contributing

Contributions are welcome. Please follow these steps:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add: new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is private and has no public license.

## 👨‍💻 Author

**Costantini**

---

⭐ If this project was useful to you, don't forget to give it a star on GitHub!
