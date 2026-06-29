// UI strings for the whole site. Default language is English.
// Data-driven content (project/experience descriptions) is localized in the
// data files themselves; see `localize()` in LanguageContext.jsx.

export const translations = {
  en: {
    nav: {
      section: 'Section navigation',
      home: 'Go to home',
      projects: 'Go to projects',
      about: 'Go to about me',
      contact: 'Go to contact',
    },
    hero: {
      badge: 'Available for new projects',
      iam: 'I AM A',
      roles: ['Developer', 'UX/UI Designer', 'Sales expert'],
      description:
        "Welcome to my digital world! I'm a developer who turns ideas into real, shipped products — mobile apps and websites for businesses. I build with JavaScript and Flutter, sweat the details, and love getting things into people's hands.",
      viewWork: 'View my work',
      getInTouch: 'Get in touch',
    },
    projects: {
      title: 'Projects',
      subtitle: "A selection of things I've built — from client work to personal experiments.",
      loadMore: 'Load more projects',
      allLoaded: 'All projects loaded',
      comingSoon: 'Coming soon',
      viewDemo: 'View Demo',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      openDemo: 'Open {name} demo',
      onPlay: 'Get {name} on Google Play',
      onAppStore: 'Get {name} on the App Store',
    },
    about: {
      title: 'About me',
      subtitle: 'My journey, experience and the tools I work with.',
    },
    contact: {
      title: 'Get in touch',
      headingTop: "Let's work",
      headingBottom: 'together!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      success: 'Sent successfully!',
      errors: {
        nameRequired: 'The name field is required.',
        nameLetters: 'The name field only accepts letters.',
        emailRequired: 'The email field is required.',
        emailInvalid: 'Please enter a valid email.',
        messageRequired: 'The message field is required.',
        messageLength: 'The message field must not exceed 999 characters.',
      },
    },
    certifications: {
      back: 'Back to home',
      title: 'Study',
      intro:
        "As you explore my certificates, please keep in mind that they represent just a portion of my dedication to this field. I'm excited to share my knowledge, collaborate on innovative projects, and continue evolving as a developer.",
    },
    language: {
      label: 'Language',
      switchToSpanish: 'Cambiar a español',
      switchToEnglish: 'Switch to English',
    },
  },

  es: {
    nav: {
      section: 'Navegación de secciones',
      home: 'Ir al inicio',
      projects: 'Ir a proyectos',
      about: 'Ir a sobre mí',
      contact: 'Ir a contacto',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      iam: 'SOY UN',
      roles: ['Desarrollador', 'Diseñador UX/UI', 'Experto en ventas'],
      description:
        '¡Bienvenido a mi mundo digital! Soy un desarrollador que convierte ideas en productos reales y terminados — apps mobile y sitios web para negocios. Construyo con JavaScript y Flutter, cuido los detalles y me encanta que las cosas lleguen a la gente.',
      viewWork: 'Ver mi trabajo',
      getInTouch: 'Contactame',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de cosas que construí — desde trabajos para clientes hasta experimentos personales.',
      loadMore: 'Cargar más proyectos',
      allLoaded: 'Todos los proyectos cargados',
      comingSoon: 'Próximamente',
      viewDemo: 'Ver demo',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      openDemo: 'Abrir demo de {name}',
      onPlay: 'Conseguir {name} en Google Play',
      onAppStore: 'Conseguir {name} en la App Store',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Mi camino, mi experiencia y las herramientas con las que trabajo.',
    },
    contact: {
      title: 'Contacto',
      headingTop: '¡Trabajemos',
      headingBottom: 'juntos!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar',
      success: '¡Enviado con éxito!',
      errors: {
        nameRequired: 'El campo nombre es obligatorio.',
        nameLetters: 'El campo nombre solo acepta letras.',
        emailRequired: 'El campo email es obligatorio.',
        emailInvalid: 'Por favor ingresá un email válido.',
        messageRequired: 'El campo mensaje es obligatorio.',
        messageLength: 'El campo mensaje no debe superar los 999 caracteres.',
      },
    },
    certifications: {
      back: 'Volver al inicio',
      title: 'Formación',
      intro:
        'Mientras explorás mis certificados, tené en cuenta que representan solo una parte de mi dedicación a este campo. Me entusiasma compartir mi conocimiento, colaborar en proyectos innovadores y seguir creciendo como desarrollador.',
    },
    language: {
      label: 'Idioma',
      switchToSpanish: 'Cambiar a español',
      switchToEnglish: 'Switch to English',
    },
  },
};
