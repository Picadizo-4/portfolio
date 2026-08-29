# Portfolio — Miguel Ángel Ordóñez Picadizo

Portfolio personal como desarrollador de software junior. Funciona como currículum interactivo y muestra de proyectos reales.

🔗 **[miguelpicadizo.com](https://miguelpicadizo.com)**

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** — entorno de desarrollo y build
- **CSS puro** — sin frameworks, con variables CSS propias para colores, tipografía y espaciado
- **ESLint** — control de calidad de código

## Características

- Diseño en modo claro/oscuro persistente (`localStorage`)
- Navegación por anclas con scroll suave
- Descarga de CV en español e inglés desde un desplegable
- Skills interactivas: cada una muestra una breve descripción al pulsarla
- Diseño responsive

## Desarrollo local

```bash
npm install
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

## Despliegue

Desplegado automáticamente en **Vercel** en cada `push` a la rama `main`, con dominio propio gestionado a través de **Cloudflare**.

## Estructura del proyecto

```
src/
├── assets/       → imágenes y recursos
├── components/   → piezas reutilizables (Navbar, Footer)
├── hooks/        → hooks personalizados (useTheme)
├── sections/     → secciones de la página (Hero, SobreMi, Skills...)
├── styles/       → variables CSS globales y estilos compartidos
├── App.tsx       → ensambla todas las secciones
└── main.tsx      → punto de entrada de la aplicación
```