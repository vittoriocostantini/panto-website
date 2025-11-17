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
