/**
 * Experience / About section entries.
 *
 * `name` and `description` are localized: use `{ en, es }`. A plain string
 * also works and is shown for both languages (see `localize()`).
 * Optional `link` adds a button; optional `skills` renders a row of tech icons.
 */

export const experiences = [
  {
    name: { en: 'Developer', es: 'Desarrollador' },
    description: {
      en: 'I build and ship web and mobile products with JavaScript (React) and Flutter, backed by Firebase and Cloud Functions in TypeScript. Building since 2023, I focus on delivering real, complete products — using modern tools, including AI, to move fast without cutting corners.',
      es: 'Construyo y lanzo productos web y mobile con JavaScript (React) y Flutter, sobre Firebase y Cloud Functions en TypeScript. Construyendo desde 2023, me enfoco en entregar productos reales y completos — usando herramientas modernas, incluida la IA, para avanzar rápido sin descuidar la calidad.',
    },
  },
  {
    name: { en: 'AI Integration', es: 'Integración de IA' },
    description: {
      en: 'I bring AI into the products I build — like AI-powered receipt scanning that automatically splits shared expenses in Roomies. Comfortable integrating LLMs and AI services into real, working features.',
      es: 'Llevo la IA a los productos que construyo — como el escaneo de tickets con IA que divide automáticamente los gastos en Roomies. Cómodo integrando LLMs y servicios de IA en funcionalidades reales.',
    },
  },
  {
    name: { en: 'UI/UX Designer', es: 'Diseñador UI/UX' },
    description: {
      en: 'Focused on crafting intuitive, user-centered interfaces that merge aesthetics with usability.',
      es: 'Enfocado en crear interfaces intuitivas y centradas en el usuario que combinan estética y usabilidad.',
    },
  },
  {
    name: { en: 'Sales Expert', es: 'Experto en ventas' },
    description: {
      en: 'Over 5 years of experience in customer service and sales. Strong communication and goal-oriented mindset, which I bring into technical and collaborative projects.',
      es: 'Más de 5 años de experiencia en atención al cliente y ventas. Fuerte comunicación y mentalidad orientada a objetivos, que aplico en proyectos técnicos y colaborativos.',
    },
  },
  {
    name: { en: 'Studies', es: 'Formación' },
    description: {
      en: 'Background in Communication Design with additional development courses. Currently preparing for Computer Science studies in Copenhagen.',
      es: 'Formación en Diseño de Comunicación con cursos adicionales de desarrollo. Actualmente preparándome para estudiar Ciencias de la Computación en Copenhague.',
    },
    link: '/certifications',
  },
  {
    name: { en: 'Skills', es: 'Habilidades' },
    description: {
      en: 'Proficient in a variety of tools and technologies:',
      es: 'Manejo de una variedad de herramientas y tecnologías:',
    },
    skills: [
      { name: 'simple-icons:flutter', iconColor: '#02569B' },
      { name: 'simple-icons:firebase', iconColor: '#FFCA28' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
      { name: 'simple-icons:react', iconColor: '#61DAFB' },
      { name: 'simple-icons:figma', iconColor: '#F24E1E' },
      { name: 'simple-icons:tailwindcss', iconColor: '#06B6D4' },
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:sass', iconColor: '#CC6699' },
      { name: 'simple-icons:github', iconColor: '#ffffff' },
    ],
  },
];
