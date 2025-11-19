panto-website/
├── client/                    # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Imágenes, iconos, etc.
│   │   ├── components/       # Componentes reutilizables
│   │   │   ├── common/       # Botones, inputs, modals, etc.
│   │   │   ├── layout/       # Header, Footer, Sidebar, etc.
│   │   │   └── features/     # Componentes específicos de features
│   │   ├── pages/            # Páginas/views principales
│   │   ├── hooks/            # Custom hooks
│   │   ├── services/         # Servicios y llamadas a APIs
│   │   │   ├── api/          # Cliente API (fetch/axios)
│   │   │   └── firebase/     # Configuración y servicios de Firebase
│   │   ├── context/          # React Context (Auth, Theme, etc.)
│   │   ├── utils/            # Funciones utilitarias
│   │   ├── types/            # TypeScript types/interfaces
│   │   ├── constants/        # Constantes de la app
│   │   ├── styles/           # Estilos globales, temas
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
│
├── server/                    # Backend Node.js/Express
│   ├── src/
│   │   ├── controllers/      # Lógica de negocio
│   │   ├── models/           # Modelos de MongoDB (Mongoose)
│   │   ├── routes/           # Rutas de la API
│   │   ├── middleware/       # Middlewares (auth, validación, etc.)
│   │   ├── services/         # Servicios (Firebase Admin, etc.)
│   │   ├── utils/            # Utilidades del servidor
│   │   ├── config/           # Configuraciones (DB, Firebase, etc.)
│   │   ├── types/            # TypeScript types
│   │   └── index.ts          # Entry point del servidor
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                    # Código compartido (opcional)
│   └── types/                # Types compartidos entre client/server
│
├── .env.example              # Variables de entorno de ejemplo
├── .gitignore
└── README.md


Revisando el proyecto para identificar qué falta según el stack propuesto.


[19 tools called]

## Estado actual del proyecto

### Lo que ya tienes
- Frontend React con componentes básicos (Header, Hero, ProductsContainer, etc.)
- Productos hardcodeados en constantes
- Estructura de carpetas para backend (server/src con controllers, models, routes, etc.)
- Carpetas vacías para context, pages, services/firebase, services/api

### Lo que falta implementar

## 1. Frontend (React)

### Dependencias necesarias
```json
{
  "react-router-dom": "^6.x",
  "firebase": "^10.x",
  "zustand": "^4.x" // o puedes usar useContext
}
```

### Componentes faltantes
- `ProductList` — Lista de productos (puede reutilizar `ProductsContainer`)
- `ProductDetail` — Detalle individual del producto
- `Cart` — Carrito de compras
- `CheckoutForm` — Formulario de checkout

### State Management
- Context para el carrito (`context/cart-context.tsx`) o Zustand store
- Context para autenticación (`context/auth-context.tsx`)

### Routing
- Instalar `react-router-dom`
- Configurar rutas en `App.tsx`:
  - `/` — Home (actual)
  - `/products` — Lista de productos
  - `/products/:id` — Detalle del producto
  - `/cart` — Carrito
  - `/checkout` — Checkout
  - `/admin/add-product` — Ruta protegida para admin

### Firebase (Frontend)
- Configurar Firebase en `services/firebase/config.ts`
- Servicio de autenticación en `services/firebase/auth.ts`
- Servicio de Storage en `services/firebase/storage.ts`

## 2. Backend (Node/Express)

### Dependencias necesarias
```json
{
  "express": "^4.x",
  "mongoose": "^8.x",
  "firebase-admin": "^12.x",
  "cors": "^2.x",
  "dotenv": "^16.x"
}
```

### Configuración
- `config/database.ts` — Conexión a MongoDB
- `config/firebase-admin.ts` — Inicialización de Firebase Admin
- `.env` — Variables de entorno

### Modelos (MongoDB/Mongoose)
- `models/user.ts` — Schema de usuarios (customer/admin)
- `models/product.ts` — Schema de productos (nombre, descripción, precio, stock, imagen URL)
- `models/order.ts` — Schema de órdenes (usuario, productos, fecha, total)

### Controladores
- `controllers/auth-controller.ts` — Verificación de tokens Firebase
- `controllers/product-controller.ts` — CRUD de productos
- `controllers/order-controller.ts` — Crear y obtener órdenes
- `controllers/user-controller.ts` — Gestión de usuarios

### Rutas
- `routes/auth-routes.ts` — Middleware de autenticación
- `routes/product-routes.ts` — `/api/products`
- `routes/order-routes.ts` — `/api/orders`
- `routes/admin-routes.ts` — Rutas protegidas para admin

### Middleware
- `middleware/auth-middleware.ts` — Verificar token Firebase
- `middleware/admin-middleware.ts` — Verificar rol de admin (Custom Claims)

### Servicios
- `services/firebase-admin-service.ts` — Operaciones con Firebase Admin (verificar claims, etc.)

## 3. Firebase Configuration

### Custom Claims
- Función para asignar rol de admin a usuarios específicos
- Verificación de claims en el backend

### Storage
- Configurar bucket de Firebase Storage
- Subir imágenes de productos
- Generar URLs públicas

## Plan de implementación sugerido

### Fase 1: Backend base
1. Configurar Express y MongoDB
2. Crear modelos (User, Product, Order)
3. Configurar Firebase Admin
4. Crear middleware de autenticación

### Fase 2: Frontend base
1. Instalar react-router-dom
2. Configurar Firebase en el cliente
3. Crear context de autenticación
4. Crear context/store del carrito

### Fase 3: Funcionalidades
1. Páginas de productos (lista y detalle)
2. Carrito
3. Checkout
4. Panel de admin

### Fase 4: Integración
1. Conectar frontend con backend API
2. Subir imágenes a Firebase Storage
3. Implementar Custom Claims para admin

¿Quieres que te ayude a implementar alguna parte específica? Puedo empezar por el backend o por el frontend según prefieras.
