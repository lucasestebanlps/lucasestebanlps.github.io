/**
 * Experience / About section entries.
 *
 * `name` and `description` are localized: use `{ en, es }`. A plain string
 * also works and is shown for both languages (see `localize()`).
 * Optional `link` adds a button; optional `skills` renders a row of tech icons.
 */

export const experiences = [
  {
    name: { en: 'Flutter Developer', es: 'Desarrollador Flutter' },
    description: {
      en: 'Experienced in building production-ready mobile apps using Flutter and Firebase, such as Applichiamoci and Eventz. Skilled in scalable architecture, geolocation, push notifications, and custom UI.',
      es: 'Experiencia construyendo apps móviles listas para producción con Flutter y Firebase, como Applichiamoci y Eventz. Manejo de arquitectura escalable, geolocalización, notificaciones push e interfaces personalizadas.',
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
