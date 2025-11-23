 🪑 Panto - E-commerce de Muebles

> Plataforma de comercio electrónico moderna y elegante para la venta de muebles de alta calidad, construida con React, TypeScript y Node.js.

![Panto Website](./public/icon.png)

## 📋 Descripción

**Panto** es una aplicación web full-stack de e-commerce especializada en la venta de muebles. Ofrece una experiencia de usuario fluida y moderna, con un sistema completo de autenticación, gestión de productos, carrito de compras y procesamiento de órdenes.

El proyecto está diseñado con arquitectura cliente-servidor, implementando las mejores prácticas de desarrollo web moderno, tipado estático con TypeScript, y una interfaz de usuario responsive construida con React y estilizada con Material-UI y Tailwind CSS.

## ✨ Características Principales

### Frontend
- 🎨 **Interfaz Moderna**: Diseño elegante y responsive con Material-UI y Tailwind CSS
- 🔐 **Autenticación Segura**: Sistema de login/registro con Firebase Authentication
- 🛒 **Carrito de Compras**: Gestión completa del carrito con Redux Toolkit
- 📱 **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- 🎭 **Guards de Autenticación**: Rutas protegidas para usuarios autenticados
- 🎠 **Carruseles Interactivos**: Galerías de productos y testimonios con React Slick
- 📦 **Catálogo de Productos**: Sistema de filtrado y categorización de productos
- ⭐ **Sistema de Testimonios**: Sección de reseñas y opiniones de clientes
- 🎯 **Experiencia de Usuario**: Navegación intuitiva y fluida con React Router

### Backend
- 🚀 **API RESTful**: Endpoints bien estructurados con Express.js
- 🗄️ **Base de Datos MongoDB**: Almacenamiento eficiente con Mongoose
- ✅ **Validación de Datos**: Schemas robustos con Zod
- 🔒 **Firebase Admin**: Integración con Firebase para autenticación del lado del servidor
- 📝 **Logging**: Sistema de logs con Morgan
- 🌐 **CORS Configurado**: Control de orígenes permitidos
- 🎯 **TypeScript**: Código tipado y mantenible

## 🛠️ Tecnologías

### Frontend
| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| React | ^19.2.0 | Librería UI |
| TypeScript | ~5.9.3 | Lenguaje de programación |
| Vite | ^7.2.2 | Build tool y dev server |
| Redux Toolkit | ^2.10.1 | Gestión de estado global |
| Material-UI | ^7.3.5 | Componentes UI |
| Tailwind CSS | ^4.1.17 | Framework CSS |
| Firebase | ^12.6.0 | Autenticación |
| React Router | ^7.9.6 | Navegación |
| React Slick | ^0.31.0 | Carruseles |

### Backend
| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| Express | ^4.21.2 | Framework web |
| TypeScript | ^5.9.3 | Lenguaje de programación |
| MongoDB/Mongoose | ^8.20.1 | Base de datos |
| Firebase Admin | ^13.2.0 | Autenticación backend |
| Zod | ^3.24.1 | Validación de esquemas |
| Morgan | ^1.10.1 | HTTP logger |
| CORS | ^2.8.5 | Cross-Origin Resource Sharing |

## 📁 Estructura del Proyecto

```
panto-website/
│
├── src/client/                 # Código del frontend
│   ├── components/
│   │   ├── common/            # Componentes reutilizables
│   │   │   ├── button-carousel.tsx
│   │   │   ├── card-products.tsx
│   │   │   ├── cards-checkout.tsx
│   │   │   ├── carousel-slider.tsx
│   │   │   ├── notification-toast.tsx
│   │   │   └── testimonial-card.tsx
│   │   ├── features/          # Componentes de características
│   │   │   └── select-bar-product.tsx
│   │   └── layout/            # Componentes de layout
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
│   │   ├── public/            # Páginas públicas
│   │   │   ├── home/
│   │   │   └── auth/
│   │   └── private/           # Páginas privadas
│   │       └── cart/
│   │
│   ├── redux/                 # Gestión de estado
│   │   ├── store/
│   │   ├── slices/
│   │   │   ├── cart.ts
│   │   │   └── products.ts
│   │   └── hooks.ts
│   │
│   ├── services/
│   │   ├── api/               # Llamadas a la API
│   │   │   ├── products.ts
│   │   │   └── cart.ts
│   │   └── firebase/          # Configuración Firebase
│   │       └── firebase-config.ts
│   │
│   ├── context/               # Context API
│   │   └── auth-context.tsx
│   │
│   ├── guards/                # Guards de rutas
│   │   └── auth-guards.tsx
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── use-notification.ts
│   │   └── use-responsive-slides.ts
│   │
│   ├── routes/                # Configuración de rutas
│   │   └── routes.ts
│   │
│   ├── types/                 # Definiciones de tipos
│   ├── constants/             # Constantes
│   ├── utils/                 # Utilidades
│   └── assets/                # Imágenes y recursos
│
├── server/                    # Código del backend
│   └── src/
│       ├── config/            # Configuraciones
│       │   ├── database.ts
│       │   └── index.ts
│       │
│       ├── controllers/       # Controladores
│       │   ├── product.controller.ts
│       │   └── order.controller.ts
│       │
│       ├── models/            # Modelos de datos
│       │   ├── product.model.ts
│       │   └── orders.model.ts
│       │
│       ├── routes/            # Rutas de la API
│       │   ├── product.routes.ts
│       │   └── order.routes.ts
│       │
│       ├── services/          # Lógica de negocio
│       ├── middleware/        # Middlewares
│       ├── types/             # Tipos TypeScript
│       ├── utils/             # Utilidades
│       └── index.ts           # Punto de entrada
│
├── shared/                    # Código compartido
│   └── types/                 # Tipos compartidos
│
└── public/                    # Recursos públicos
    └── icon.png

```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- MongoDB (local o Atlas)
- Cuenta de Firebase

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/panto-website.git
cd panto-website
```

### 2. Instalar Dependencias

#### Frontend
```bash
npm install
```

#### Backend
```bash
cd server
npm install
```


### 4. Iniciar el Proyecto

#### Desarrollo

**Opción 1: Ejecutar frontend y backend por separado**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
cd server
npm run dev
```

**Opción 2: Ejecutar ambos simultáneamente (desde la carpeta server)**
```bash
cd server
npm run dev:all
```

#### Producción

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

## 📡 Endpoints de la API

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Obtener un producto específico |
| POST | `/api/products` | Crear un nuevo producto |
| PUT | `/api/products/:id` | Actualizar un producto |
| DELETE | `/api/products/:id` | Eliminar un producto |

### Órdenes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/orders` | Obtener todas las órdenes |
| GET | `/api/orders/:id` | Obtener una orden específica |
| POST | `/api/orders` | Crear una nueva orden |
| PUT | `/api/orders/:id` | Actualizar una orden |
| DELETE | `/api/orders/:id` | Eliminar una orden |

## 🎨 Características de la UI

### Secciones Principales

1. **Hero Section**: Banner principal con imagen de portada y CTA
2. **Why Choosing**: Razones para elegir Panto
3. **Products Container**: Catálogo de productos con filtros y categorías
4. **About Us**: Información sobre la empresa y materiales
5. **Testimonials**: Reseñas y testimonios de clientes
6. **Footer**: Información de contacto y enlaces

### Componentes Reutilizables

- **Card Products**: Tarjetas de productos con imagen, precio y botón de añadir al carrito
- **Carousel Slider**: Carrusel personalizado para galerías
- **Notification Toast**: Sistema de notificaciones
- **Testimonial Card**: Tarjetas de testimonios con avatar y reseña
- **Button Carousel**: Botones de navegación para carruseles
- **Search Bar**: Barra de búsqueda de productos

## 🔒 Seguridad

- ✅ Autenticación con Firebase
- ✅ Guards de rutas para páginas privadas
- ✅ Validación de datos con Zod en el backend
- ✅ CORS configurado
- ✅ Variables de entorno para datos sensibles
- ✅ TypeScript para prevención de errores en tiempo de compilación

## 🎯 Estado Global (Redux)

### Slices

- **Cart Slice**: Gestión del carrito de compras
  - Añadir productos
  - Eliminar productos
  - Actualizar cantidades
  - Calcular totales

- **Products Slice**: Gestión de productos
  - Lista de productos
  - Producto seleccionado
  - Filtros y categorías

## 🌐 Despliegue

### Frontend (Vercel)

```bash
npm run build
vercel --prod
```

### Backend (Railway, Render, etc.)

```bash
cd server
npm run build
# Configurar variables de entorno en la plataforma
# Desplegar según las instrucciones de la plataforma
```

## 📝 Scripts Disponibles

### Frontend

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

### Backend

- `npm run dev` - Inicia el servidor en modo desarrollo con hot reload
- `npm run dev:all` - Inicia frontend y backend simultáneamente
- `npm run build` - Compila TypeScript a JavaScript
- `npm start` - Inicia el servidor en producción
- `npm run lint` - Ejecuta el linter

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y no tiene licencia pública.

## 👨‍💻 Autor

**Costantini**

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub!
