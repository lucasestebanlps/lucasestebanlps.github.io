/**
 * Project list for the Projects section.
 *
 * To add a project: copy a block, give it a unique `id`, and fill the fields.
 * Images live in `public/assets/projects/` — reference them by absolute path.
 * Tech icon names come from https://icones.js.org (use the `simple-icons:` set).
 *
 * @typedef {Object} Technology
 * @property {string} name        Iconify name, e.g. "simple-icons:react".
 * @property {string} iconColor   Brand hex color for the icon.
 *
 * @typedef {Object} Project
 * @property {number}  id          Unique identifier (used as React key).
 * @property {string}  title       Project name.
 * @property {string}  description Short summary.
 * @property {string}  image       Path under public/, e.g. "/assets/projects/x.jpg".
 * @property {string}  link        External demo / store URL.
 * @property {boolean} featured    Highlighted projects are shown first.
 * @property {Technology[]} technologies
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 1,
    title: 'Applichiamoci',
    description:
      'Design and development of Applichiamoci, an app to connect those in need with vital resources. Available on Play Store :)',
    image: '/assets/projects/applichiamoci.png',
    link: 'https://play.google.com/store/apps/details?id=com.fonzadione_emmanuel.applichiamoc',
    featured: true,
    technologies: [
      { name: 'simple-icons:flutter', iconColor: '#02569B' },
      { name: 'simple-icons:firebase', iconColor: '#FFCA28' },
    ],
  },
  {
    id: 2,
    title: 'AutoInsurance Quote',
    description: 'A user-friendly tool for quickly obtaining insurance quotes for automobiles.',
    image: '/assets/projects/autoinsurance-quote.jpg',
    link: 'https://insurancequoter.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:tailwindcss', iconColor: '#06B6D4' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
  {
    id: 3,
    title: 'OnlineCourse Mart',
    description:
      'Your one-stop shop for online courses, featuring a fully functional shopping cart for adding, removing, and modifying course selections.',
    image: '/assets/projects/onlinecourse-mart.jpg',
    link: 'https://shoppingcart-ls.netlify.app/',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
  {
    id: 4,
    title: 'CityWeather Lookup',
    description:
      'Instantly check the weather forecast for cities worldwide with this convenient weather lookup tool.',
    image: '/assets/projects/cityweather-lookup.jpg',
    link: 'https://weather-finder-lps.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:tailwindcss', iconColor: '#06B6D4' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
  {
    id: 5,
    title: 'YaNoUso',
    description:
      'A project focused on promoting responsible consumption and sustainability. This is a UX/UI design project of my own, covering the entire process from market research to logo creation.',
    image: '/assets/projects/yanouso.jpg',
    link: 'https://www.figma.com',
    featured: true,
    technologies: [{ name: 'simple-icons:figma', iconColor: '#F24E1E' }],
  },
  {
    id: 6,
    title: 'MultiBrand Car Finder',
    description:
      'Explore a vast selection of cars from different manufacturers, filterable by brand, year, doors, price, and more.',
    image: '/assets/projects/multibrand-car-finder.jpg',
    link: 'https://car-finder-p.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
  {
    id: 7,
    title: 'MailSender Pro',
    description:
      'Simplify email sending with this efficient mail delivery service designed to streamline your communication.',
    image: '/assets/projects/mailsender-pro.jpg',
    link: 'https://enviar-mails.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:tailwindcss', iconColor: '#06B6D4' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
  {
    id: 8,
    title: 'Coinbase Clone',
    description:
      'Experience the world of cryptocurrency trading with a platform that mirrors the functionality of Coinbase.',
    image: '/assets/projects/coinbase-clone.jpg',
    link: 'https://coinbase-clone-le.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:sass', iconColor: '#CC6699' },
    ],
  },
  {
    id: 9,
    title: 'Startup Landing',
    description:
      'A minimalist webpage designed to introduce your startup to the world and make a lasting impression.',
    image: '/assets/projects/startup-landing.jpg',
    link: 'https://startup-page-le.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:sass', iconColor: '#CC6699' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
      { name: 'simple-icons:bootstrap', iconColor: '#7952B3' },
    ],
  },
  {
    id: 10,
    title: 'Parallax Café',
    description:
      'A visually stunning webpage for a cafe, complete with parallax scrolling effects to captivate visitors.',
    image: '/assets/projects/parallax-cafe.jpg',
    link: 'https://restaurant-parallax.netlify.app',
    featured: false,
    technologies: [
      { name: 'simple-icons:html5', iconColor: '#E34F26' },
      { name: 'simple-icons:css3', iconColor: '#1572B6' },
      { name: 'simple-icons:javascript', iconColor: '#F7DF1E' },
    ],
  },
];
