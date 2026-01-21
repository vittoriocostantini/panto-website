# 🛋️ Panto - E-commerce de Muebles e Interiorismo

<div align="center">

![Panto](https://img.shields.io/badge/Panto-E--commerce-orange)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green)

</div>

## 📋 Descripción

Panto es una plataforma de e-commerce moderna y elegante especializada en muebles e interiorismo. Ofrece una experiencia de usuario fluida con un diseño minimalista y contemporáneo, permitiendo a los usuarios explorar, seleccionar y comprar productos de decoración para transformar sus espacios.

## ✨ Características Principales

### Frontend
- 🎨 **Diseño Moderno y Responsive**: Interfaz minimalista adaptada a todos los dispositivos
- 🛒 **Sistema de Carrito**: Carrito de compras con soporte para usuarios registrados e invitados
- 🔐 **Autenticación de Usuarios**: Sistema de registro y login seguro con JWT
- 📦 **Gestión de Productos**: Catálogo completo con búsqueda y filtrado
- 💳 **Gestión de Órdenes**: Sistema completo de pedidos
- ⭐ **Testimonios y Reseñas**: Sección dedicada a las opiniones de clientes
- 🎯 **Guards de Rutas**: Protección de rutas privadas
- 🔔 **Sistema de Notificaciones**: Toast notifications para feedback al usuario

### Backend
- 🚀 **API RESTful**: Arquitectura REST completa y escalable
- 🔒 **Autenticación JWT**: Sistema de autenticación seguro
- 🗄️ **Base de Datos MongoDB**: Almacenamiento flexible y eficiente
- 👥 **Gestión de Usuarios**: CRUD completo de usuarios
- 📦 **Gestión de Productos**: Administración de catálogo
- 🛒 **Sistema de Carrito**: Gestión de carritos para usuarios e invitados
- 📋 **Gestión de Órdenes**: Procesamiento y seguimiento de pedidos
- 🔄 **Patrón Observer**: Implementación de suscriptores para eventos

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.2**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **Redux Toolkit**: Gestión de estado global
- **React Router DOM**: Enrutamiento
- **Material-UI (MUI)**: Componentes UI
- **Tailwind CSS**: Estilos utilitarios
- **Axios**: Cliente HTTP
- **React Slick**: Carousel/Slider

### Backend
- **Node.js**: Runtime de JavaScript
- **Express 5.2**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **JWT (jsonwebtoken)**: Autenticación
- **bcryptjs**: Encriptación de contraseñas
- **CORS**: Manejo de políticas CORS
- **dotenv**: Variables de entorno

## 📁 Estructura del Proyecto

```
panto-website/
├── client/                 # Frontend React/TypeScript
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   │   ├── common/    # Componentes comunes
│   │   │   ├── features/  # Componentes de funcionalidades
│   │   │   └── layout/    # Componentes de layout
│   │   ├── guards/        # Guards de autenticación
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── redux/         # Estado global Redux
│   │   ├── routes/        # Configuración de rutas
│   │   ├── services/      # Servicios API
│   │   ├── types/         # Tipos TypeScript
│   │   └── utils/         # Utilidades
│   └── ...
├── backend/               # Backend Node.js/Express
│   ├── src/
│   │   ├── config/       # Configuración (DB, etc.)
│   │   ├── controllers/  # Controladores
│   │   ├── middleware/   # Middlewares (auth, etc.)
│   │   ├── models/       # Modelos de Mongoose
│   │   ├── routes/       # Rutas de la API
│   │   ├── services/     # Lógica de negocio
│   │   ├── subscriber/   # Observers/Subscribers
│   │   └── utils/        # Utilidades
│   └── server.js         # Punto de entrada del servidor
└── ...
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- MongoDB (local o MongoDB Atlas)

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd panto-website
```

2. **Instalar dependencias del frontend**
```bash
cd client
npm install
```

3. **Instalar dependencias del backend**
```bash
cd ../backend
npm install
```

4. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto `backend/`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/panto
# o para MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/panto
JWT_SECRET=tu_secret_key_muy_segura
```

5. **Iniciar MongoDB**
```bash
# Si usas MongoDB local
mongod
```

## 🎯 Uso

### Desarrollo

**Iniciar el backend:**
```bash
cd backend
npm run dev
```
El servidor se ejecutará en `http://localhost:3000`

**Iniciar el frontend:**
```bash
cd client
npm run dev
```
La aplicación se ejecutará en `http://localhost:5173` (o el puerto que asigne Vite)

### Producción

**Build del frontend:**
```bash
cd client
npm run build
```

**Preview del build:**
```bash
npm run preview
```

**Ejecutar el backend en producción:**
```bash
cd backend
node server.js
```

## 🔌 Endpoints de la API

### Autenticación
- `POST /api/users/register` - Registro de usuario
- `POST /api/users/login` - Inicio de sesión

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener un producto por ID
- `POST /api/products` - Crear producto (requiere auth)
- `PUT /api/products/:id` - Actualizar producto (requiere auth)
- `DELETE /api/products/:id` - Eliminar producto (requiere auth)

### Carrito
- `GET /api/cart/:userId` - Obtener carrito del usuario
- `POST /api/cart` - Agregar producto al carrito
- `PUT /api/cart/:cartId` - Actualizar carrito
- `DELETE /api/cart/:cartId` - Eliminar carrito

### Órdenes
- `GET /api/orders` - Obtener todas las órdenes (requiere auth)
- `GET /api/orders/:id` - Obtener una orden por ID (requiere auth)
- `POST /api/orders` - Crear una nueva orden (requiere auth)

### Usuarios
- `GET /api/users/:id` - Obtener usuario por ID (requiere auth)
- `PUT /api/users/:id` - Actualizar usuario (requiere auth)

## 🔐 Seguridad

- Contraseñas encriptadas con bcryptjs
- Autenticación JWT para rutas protegidas
- Middleware de autenticación en endpoints sensibles
- CORS configurado para seguridad
- Variables de entorno para información sensible

## 🎨 Diseño y UI

La aplicación cuenta con un diseño moderno y minimalista que incluye:

- **Hero Section**: Imagen principal con call-to-action
- **Why Choosing Us**: Sección de características destacadas
- **Productos**: Catálogo con cards interactivas
- **About Us**: Información sobre la empresa
- **Testimonios**: Reseñas de clientes con carrusel
- **Header y Footer**: Navegación y enlaces importantes

## 📝 Scripts Disponibles

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

### Backend
- `npm run dev` - Inicia el servidor con nodemon



## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 👥 Autor

Desarrollado con ❤️ para Panto

---

<div align="center">
  Hecho con React, TypeScript, Node.js y MongoDB
</div>


