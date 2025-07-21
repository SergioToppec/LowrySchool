# Lowry School Project

## Descripción General
Este proyecto es una aplicación web desarrollada con **React**, **Vite** y **Tailwind CSS**. Está diseñado para gestionar y mostrar información relacionada con la escuela Lowry School, incluyendo vistas para estudiantes, maestros, reportes, y más.

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

```
LowrySchool/
├── public/                # Archivos públicos como imágenes y recursos estáticos
├── src/                   # Código fuente principal
│   ├── assets/            # Recursos como imágenes, íconos y fuentes
│   ├── config/            # Configuración del proyecto
│   │   └── routes/        # Archivo AppRoutes para gestionar las rutas
│   ├── modules/           # Lógica del negocio
│   │   ├── auth/          # Formularios de autenticación (Login y Registro)
│   │   ├── students/      # Formularios relacionados con estudiantes
│   │   └── teachers/      # Formularios relacionados con maestros
│   ├── services/          # Servicios para interactuar con APIs
│   ├── ui/                # Componentes de interfaz de usuario y vistas
│   │   ├── auth/          # Vistas de autenticación
│   │   ├── components/    # Componentes reutilizables
│   │   ├── layout/        # Componentes de diseño como Navbar y Footer
│   │   └── pages/         # Páginas principales del proyecto
│   └── main.jsx           # Punto de entrada de la aplicación
├── package.json           # Dependencias y scripts del proyecto
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

### Descripción de Carpetas

#### `public/`
Contiene recursos estáticos como imágenes y archivos que no necesitan ser procesados por Webpack o Vite.

#### `src/assets/`
Incluye imágenes, íconos y fuentes utilizadas en la aplicación.

#### `src/config/routes/AppRoutes.jsx`
Este archivo gestiona las rutas de la aplicación. Utiliza `react-router-dom` para definir las rutas públicas y privadas.

- **Cómo funciona:**
  - Define las rutas principales de la aplicación.
  - Permite integrar rutas protegidas mediante componentes como `PrivateRoute`.

- **Cómo agregar futuras rutas protegidas:**
  1. Crea un componente para la vista protegida.
  2. Define la lógica de autenticación en `PrivateRoute`.
  3. Agrega la nueva ruta en `AppRoutes.jsx`.

#### `src/modules/`
Esta carpeta contiene la lógica del negocio. Cada subcarpeta representa un módulo específico:

- **`auth/`**: Maneja la lógica de autenticación, incluyendo formularios de inicio de sesión y registro.
- **`students/`**: Contiene formularios y lógica relacionada con estudiantes.
- **`teachers/`**: Contiene formularios y lógica relacionada con maestros.

#### `src/services/`
Aquí se encuentran los servicios para interactuar con APIs externas. Por ejemplo, puedes definir funciones para realizar solicitudes HTTP usando `fetch` o bibliotecas como `axios`.

#### `src/ui/`
Esta carpeta contiene todo lo relacionado con la interfaz de usuario:

- **`auth/`**: Vistas de autenticación como Login y Registro.
- **`components/`**: Componentes reutilizables como botones, inputs, etc.
- **`layout/`**: Componentes de diseño como Navbar y Footer.
- **`pages/`**: Páginas principales como LandingPage, Students, Teachers, etc.

#### `src/main.jsx`
Este archivo es el punto de entrada de la aplicación. Renderiza el componente raíz (`App`) y configura el enrutamiento.

## Tecnologías Utilizadas

### React
Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.

### Vite
Herramienta de desarrollo rápida para proyectos de frontend. Proporciona un entorno de desarrollo ágil y una configuración mínima.

### Tailwind CSS
Framework de CSS basado en utilidades que permite crear diseños modernos y responsivos directamente en las clases de los elementos HTML.

- **Cómo funciona:**
  - Usa clases predefinidas para estilos como `text-center`, `bg-red-500`, `flex`, etc.
  - Permite personalizar el diseño mediante la configuración en `tailwind.config.js`.

## Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar la versión de producción:**
   ```bash
   npm run preview
   ```

## Contribuir al Proyecto

1. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```

3. Haz push de tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

4. Abre un Pull Request para revisión.

## Créditos
Este proyecto fue creado por Sergio Torres.

## Notas Finales
Este README está diseñado para que cualquier desarrollador, incluso sin experiencia previa con React, Vite o Tailwind CSS, pueda entender y trabajar con el proyecto. Si tienes dudas adicionales, consulta la documentación oficial de las tecnologías utilizadas:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
