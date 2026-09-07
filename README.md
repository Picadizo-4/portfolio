# Portfolio — Miguel Ángel Ordóñez Picadizo

Portfolio personal como desarrollador de software junior. Funciona como currículum interactivo y muestra de proyectos reales.

🔗 [miguelpicadizo.com](https://miguelpicadizo.com)

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** — entorno de desarrollo y build
- **CSS puro** — sin frameworks, con variables CSS propias para colores, tipografía y espaciado
- **ESLint** — control de calidad de código

## Características

- **Traducción completa ES/EN** — todo el contenido, incluidos los ejercicios de skills y los mensajes de interacción, mediante un sistema de diccionario propio (i18n)
- **Modo claro/oscuro persistente** (`localStorage`), más un tercer tema secreto
- **Skills interactivas** — cada una con descripción y un mini ejercicio práctico para poner a prueba tu nivel
- **Proyectos documentados** con vídeo de demo y el reto técnico real detrás de cada uno
- **Interacciones propias por sección** — animaciones ligadas a experiencia y formación (furgoneta, confeti, barra de nivel, ticker)
- **Colección de easter eggs** — comandos de teclado, gestos táctiles y un minijuego con leaderboard local, para quien tenga curiosidad de explorar
- **PWA-ready** — manifest e iconos para añadir a pantalla de inicio en móvil
- **Accesibilidad** — `aria-label` en controles sin texto, `lang` del documento sincronizado con el idioma activo
- **Diseño responsive**, probado en dispositivos reales
- **Meta tags Open Graph** completos para una vista previa cuidada al compartir el enlace

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
├── assets/       → imágenes, vídeos y recursos
├── components/   → piezas reutilizables (Navbar, Footer, easter eggs...)
├── data/         → datos estructurados (ejercicios, países)
├── hooks/        → hooks personalizados (useTheme, useLanguage, useEasterEgg)
├── i18n/         → diccionario de traducciones ES/EN
├── sections/     → secciones de la página (Hero, SobreMi, Skills...)
├── styles/       → variables CSS globales y estilos compartidos
├── App.tsx       → ensambla todas las secciones
└── main.tsx      → punto de entrada de la aplicación
```
