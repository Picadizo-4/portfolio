export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      sobreMi: 'Sobre mí',
      skills: 'Skills',
      trayectoria: 'Trayectoria',
      formacion: 'Formación',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    hero: {
      eyebrow: 'Disponible para trabajar',
      subtitle: 'Construyo software, aprendizaje constante y ganas de crecer.',
      description: 'Desarrollador junior con experiencia en proyectos personales.',
      verProyectos: 'Ver proyectos →',
      contactar: 'Contactar',
    },
    sobreMi: {
      eyebrow: '01 — sobre_mi.ts',
      titulo: 'Sobre mí',
      p1: 'Soy un desarrollador de software con un enfoque muy práctico y orientado a resolver problemas. Mi camino hasta la programación no ha sido el típico: antes de escribir código estudié finanzas, trabajé en administración e incluso estuve en Alemania gestionando operativa logística y optimizando rutas de reparto para Deutsche Post y DHL. Toda esa etapa me enseñó a buscarme la vida, a mantener la calma bajo presión y a entender que con constancia se saca cualquier problema adelante. Hoy aplico esa misma disciplina cuando me siento a programar.',
      p2: 'Me gusta centrarme en lo verdaderamente importante y crear herramientas que resuelvan problemas reales. Mi objetivo ahora es unirme a un equipo que desarrolle proyectos grandes y exigentes, donde pueda seguir aprendiendo y aportar creando software que sea verdaderamente útil.',
    },
    skills: {
      eyebrow: '02 — skills.map()',
      titulo: 'Skills',
      probarNivel: 'Pon a prueba tu nivel →',
      categorias: [
        {
          title: 'Lenguajes',
          description: 'Los lenguajes con los que construyo lógica y aplicaciones.',
          skills: [
            { name: 'Java', desc: 'Lenguaje orientado a objetos, base de Android y de muchos sistemas empresariales.' },
            { name: 'C#', desc: 'Lenguaje de Microsoft, usado en .NET para aplicaciones de escritorio y web.' },
            { name: 'Python', desc: 'Lenguaje versátil, usado aquí en PanTypeo con arquitectura MVVM y PyQt6.' },
            { name: 'Kotlin', desc: 'Lenguaje moderno para Android, usado en PanGeo junto a Jetpack Compose.' },
          ],
        },
        {
          title: 'Arquitectura y lógica',
          description: 'Cómo organizo y estructuro el código para que escale bien.',
          skills: [
            { name: 'MVVM', desc: 'Patrón que separa interfaz, lógica y datos para un código más mantenible.' },
            { name: 'Lógica asíncrona', desc: 'Manejo de tareas que se ejecutan sin bloquear el resto de la aplicación.' },
            { name: 'POO', desc: 'Programación orientada a objetos — organizar el código en clases y objetos que modelan el dominio del problema.' },
          ],
        },
        {
          title: 'Datos',
          description: 'Cómo almaceno, muevo y estructuro la información.',
          skills: [
            { name: 'Firebase', desc: 'Backend as a service de Google, usado en PanGeo para datos y autenticación.' },
            { name: 'NoSQL', desc: 'Bases de datos no relacionales, flexibles para datos poco estructurados.' },
            { name: 'JSON', desc: 'Formato estándar para intercambiar datos entre sistemas.' },
            { name: 'SVG', desc: 'Formato de gráficos vectoriales, usado en PanGeo para los mapas interactivos.' },
            { name: 'Bases de datos', desc: 'Diseño y gestión de almacenamiento de datos, relacional y no relacional.' },
          ],
        },
        {
          title: 'Herramientas',
          description: 'Ecosistema de software con el que trabajo cada día.',
          skills: [
            { name: 'Git', desc: 'Control de versiones — el historial y la columna vertebral de este mismo proyecto.' },
            { name: 'Docker', desc: 'Empaqueta aplicaciones en contenedores para que funcionen igual en cualquier entorno.' },
            { name: 'Figma', desc: 'Herramienta de diseño de interfaces usada para prototipar antes de programar.' },
            { name: 'Jetpack Compose', desc: 'Toolkit moderno de Android para construir interfaces de forma declarativa, usado en PanGeo.' },
            { name: 'Inteligencia Artificial', desc: 'Exploración de herramientas y modelos de IA aplicados al desarrollo de software.' },
          ],
        },
      ],
    },
    trayectoria: {
      eyebrow: '03 — experience.log',
      titulo: 'Trayectoria',
      items: [
        {
          periodo: 'Ene 2026 — May 2026',
          empresa: 'SweetCode',
          rol: 'Desarrollador en prácticas',
          descripcion: 'Desarrollo y personalización de funcionalidades mediante código, resolución de incidencias técnicas en entornos de producción y automatización de flujos de trabajo internos.',
          tags: ['Desarrollo', 'Producción', 'Automatización'],
        },
        {
          periodo: '2023 — 2024',
          empresa: 'Deutsche Post / DHL',
          rol: 'Operador logístico internacional · Wertheim am Main, Alemania',
          descripcion: 'Integración en entornos laborales multiculturales, gestión de documentación sensible y diseño de rutas para maximizar eficiencia y reducir tiempos.',
          tags: ['Internacional', 'Procesos', 'Adaptabilidad'],
        },
      ],
    },
    formacion: {
      eyebrow: '04 — education.json',
      titulo: 'Formación',
      levelup: {
        titulo: '¡Nivel 1 completado!',
        sub: 'Administración y Finanzas',
      },
      ticker: {
        completado: 'Grado completado',
      },
      items: [
        { titulo: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', centro: 'Universidad Europea, Madrid', periodo: '2024 — 2026' },
        { titulo: 'Grado en Finanzas y Contabilidad', centro: 'Universidad de Cádiz', periodo: '2020 — 2022' },
        { titulo: 'Técnico Superior en Administración y Finanzas', centro: 'IES Fernando III El Santo', periodo: '2018 — 2020' },
      ],
    },
    proyectos: {
      eyebrow: '05 — projects.list()',
      titulo: 'Proyectos',
      items: [
        {
          nombre: 'PanGeo — App',
          tipo: 'Trabajo de Fin de Grado',
          descripcion: 'Aplicación Android para el aprendizaje gamificado de geografía mediante mapas interactivos, con interacción táctil directa sobre mapas vectoriales (SVG) y sistema de experiencia y rankings.',
          stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase'],
          enlace: 'https://github.com/Picadizo-4/PanGeo',
          enlaceLabel: 'Ver en GitHub',
        },
        {
          nombre: 'PanGeo — Web',
          tipo: 'Blog y proyecto en curso',
          descripcion: 'Plataforma web sobre geografía política: artículos, curiosidades y, próximamente, una sala de mapas con minijuegos interactivos.',
          stack: ['Odoo'],
          enlace: 'https://pangeo.odoo.com/',
          enlaceLabel: 'Visitar web',
        },
        {
          nombre: 'PanTypeo',
          tipo: 'Proyecto personal',
          descripcion: 'Aplicación de escritorio para entrenar mecanografía, construida con arquitectura MVVM estricta, separando por completo la interfaz de la lógica que calcula pulsaciones y penalizaciones en tiempo real.',
          stack: ['Python', 'PyQt6', 'PyInstaller'],
          enlace: 'https://github.com/Picadizo-4/Pantypeo',
          enlaceLabel: 'Ver en GitHub',
        },
      ],
    },
    contacto: {
      eyebrow: '06 — contact.send()',
      titulo: 'Contacto',
      intro: 'Disponible para incorporarme a proyectos y equipos. Escríbeme por cualquiera de estos canales.',
      items: [
        { label: 'Email', valor: 'miguepicadizo@gmail.com', href: 'mailto:miguepicadizo@gmail.com' },
        { label: 'LinkedIn', valor: 'Miguel Ángel Ordóñez Picadizo', href: 'https://www.linkedin.com/in/miguel-angel-ordonez-picadizo/' },
        { label: 'GitHub', valor: 'Picadizo-4', href: 'https://github.com/Picadizo-4' },
      ],
    },
  },
  en: {
    nav: {
      sobreMi: 'About me',
      skills: 'Skills',
      trayectoria: 'Experience',
      formacion: 'Education',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    hero: {
      eyebrow: 'Available for work',
      subtitle: 'I build software, constant learning and a drive to grow.',
      description: 'Junior developer with experience in personal projects.',
      verProyectos: 'View projects →',
      contactar: 'Contact',
    },
    sobreMi: {
      eyebrow: '01 — about_me.ts',
      titulo: 'About me',
      p1: 'I\'m a software developer with a very practical, problem-solving-oriented approach. My path into programming wasn\'t the typical one: before writing code I studied finance, worked in administration, and even spent time in Germany managing logistics operations and optimizing delivery routes for Deutsche Post and DHL. That whole stage taught me to figure things out on my own, stay calm under pressure, and understand that with persistence any problem can be solved. Today I apply that same discipline when I sit down to code.',
      p2: 'I like to focus on what truly matters and build tools that solve real problems. My goal right now is to join a team working on large, demanding projects, where I can keep learning and contribute by building software that\'s genuinely useful.',
    },
    skills: {
      eyebrow: '02 — skills.map()',
      titulo: 'Skills',
      probarNivel: 'Test your level →',
      categorias: [
        {
          title: 'Languages',
          description: 'The languages I use to build logic and applications.',
          skills: [
            { name: 'Java', desc: 'Object-oriented language, the base of Android and many enterprise systems.' },
            { name: 'C#', desc: 'Microsoft\'s language, used in .NET for desktop and web applications.' },
            { name: 'Python', desc: 'Versatile language, used here in PanTypeo with an MVVM architecture and PyQt6.' },
            { name: 'Kotlin', desc: 'Modern language for Android, used in PanGeo alongside Jetpack Compose.' },
          ],
        },
        {
          title: 'Architecture & logic',
          description: 'How I organize and structure code so it scales well.',
          skills: [
            { name: 'MVVM', desc: 'Pattern that separates UI, logic and data for more maintainable code.' },
            { name: 'Async logic', desc: 'Handling tasks that run without blocking the rest of the application.' },
            { name: 'OOP', desc: 'Object-oriented programming — organizing code into classes and objects that model the problem domain.' },
          ],
        },
        {
          title: 'Data',
          description: 'How I store, move and structure information.',
          skills: [
            { name: 'Firebase', desc: 'Google\'s backend as a service, used in PanGeo for data and authentication.' },
            { name: 'NoSQL', desc: 'Non-relational databases, flexible for loosely structured data.' },
            { name: 'JSON', desc: 'Standard format for exchanging data between systems.' },
            { name: 'SVG', desc: 'Vector graphics format, used in PanGeo for the interactive maps.' },
            { name: 'Databases', desc: 'Designing and managing data storage, both relational and non-relational.' },
          ],
        },
        {
          title: 'Tools',
          description: 'The software ecosystem I work with every day.',
          skills: [
            { name: 'Git', desc: 'Version control — the history and backbone of this very project.' },
            { name: 'Docker', desc: 'Packages applications into containers so they run the same anywhere.' },
            { name: 'Figma', desc: 'Interface design tool used to prototype before coding.' },
            { name: 'Jetpack Compose', desc: 'Modern Android toolkit for building UIs declaratively, used in PanGeo.' },
            { name: 'Artificial Intelligence', desc: 'Exploring AI tools and models applied to software development.' },
          ],
        },
      ],
    },
    trayectoria: {
      eyebrow: '03 — experience.log',
      titulo: 'Experience',
      items: [
        {
          periodo: 'Jan 2026 — May 2026',
          empresa: 'SweetCode',
          rol: 'Developer intern',
          descripcion: 'Developed and customized features through code, resolved technical issues in production environments, and automated internal workflows.',
          tags: ['Development', 'Production', 'Automation'],
        },
        {
          periodo: '2023 — 2024',
          empresa: 'Deutsche Post / DHL',
          rol: 'International logistics operator · Wertheim am Main, Germany',
          descripcion: 'Integrated into multicultural work environments, managed sensitive documentation, and designed routes to maximize efficiency and reduce times.',
          tags: ['International', 'Processes', 'Adaptability'],
        },
      ],
    },
    formacion: {
      eyebrow: '04 — education.json',
      titulo: 'Education',
      levelup: {
        titulo: 'Level 1 complete!',
        sub: 'Business Administration and Finance',
      },
      ticker: {
        completado: 'Degree completed',
      },
      items: [
        { titulo: 'Higher Technician in Multiplatform Application Development', centro: 'Universidad Europea, Madrid', periodo: '2024 — 2026' },
        { titulo: 'Degree in Finance and Accounting', centro: 'Universidad de Cádiz', periodo: '2020 — 2022' },
        { titulo: 'Higher Technician in Business Administration and Finance', centro: 'IES Fernando III El Santo', periodo: '2018 — 2020' },
      ],
    },
    proyectos: {
      eyebrow: '05 — projects.list()',
      titulo: 'Projects',
      items: [
        {
          nombre: 'PanGeo — App',
          tipo: 'Final Degree Project',
          descripcion: 'Android app for gamified geography learning through interactive maps, with direct touch interaction on vector maps (SVG) and an XP/ranking system.',
          stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase'],
          enlace: 'https://github.com/Picadizo-4/PanGeo',
          enlaceLabel: 'View on GitHub',
        },
        {
          nombre: 'PanGeo — Web',
          tipo: 'Blog & ongoing project',
          descripcion: 'A web platform about political geography: articles, trivia, and soon a map room with interactive mini-games.',
          stack: ['Odoo'],
          enlace: 'https://pangeo.odoo.com/',
          enlaceLabel: 'Visit site',
        },
        {
          nombre: 'PanTypeo',
          tipo: 'Personal project',
          descripcion: 'Desktop typing-practice app built with a strict MVVM architecture, fully separating the UI from the logic that calculates keystrokes and penalties in real time.',
          stack: ['Python', 'PyQt6', 'PyInstaller'],
          enlace: 'https://github.com/Picadizo-4/Pantypeo',
          enlaceLabel: 'View on GitHub',
        },
      ],
    },
    contacto: {
      eyebrow: '06 — contact.send()',
      titulo: 'Contact',
      intro: 'Available to join projects and teams. Reach out through any of these channels.',
      items: [
        { label: 'Email', valor: 'miguepicadizo@gmail.com', href: 'mailto:miguepicadizo@gmail.com' },
        { label: 'LinkedIn', valor: 'Miguel Ángel Ordóñez Picadizo', href: 'https://www.linkedin.com/in/miguel-angel-ordonez-picadizo/' },
        { label: 'GitHub', valor: 'Picadizo-4', href: 'https://github.com/Picadizo-4' },
      ],
    },
  },
}