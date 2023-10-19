import React, { useState } from 'react'
import Button from '../Button/Button'
// icons
import { BsFillPlayFill } from 'react-icons/bs'
import { HtmlIcon, CssIcon, JavascriptIcon, SassIcon, BootstrapIcon, TailwindIcon, FigmaIcon, GitIcon } from '../Assets/Icons/Icons'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants'
// css
import './projects.css'



const projects = [
    {
        id: 1,
        title: 'AutoInsurance Quote',
        description: 'A user-friendly tool for quickly obtaining insurance quotes for automobiles.',
        image: '/assets/portfolio/cotizador-seguro.png',
        link: 'https://insurancequoter.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <TailwindIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 2,
        title: 'OnlineCourse Mart',
        description: 'Your one-stop shop for online courses, featuring a fully functional shopping cart for adding, removing, and modifying course selections.',
        image: '/assets/portfolio/carrito-cursos.png',
        link: 'https://shoppingcart-ls.netlify.app/',
        technologies: <span className='technologies'>
            <HtmlIcon /> <CssIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 3,
        title: 'CityWeather Lookup',
        description: ' Instantly check the weather forecast for cities worldwide with this convenient weather lookup tool.',
        image: '/assets/portfolio/buscador-clima.png',
        link: 'https://weather-finder-lps.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <TailwindIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 4,
        title: 'YaNoUso',
        description: 'A project focused on promoting responsible consumption and sustainability. This is a UX/UI design project of my own, covering the entire process from market research to logo creation.',
        image: '/assets/portfolio/yanouso.jpg',
        link: 'https://www.figma.com/proto/q7kNSHKqujhYKpQuKus32Q/YaNoUso%2FAltaFidelidad?type=design&node-id=1-7205&t=zrN6YcQR8IMHBofJ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A7077&show-proto-sidebar=1&mode=design',
        technologies: <span className='technologies'>
            <FigmaIcon />
        </span>
    },
    {
        id: 5,
        title: 'MultiBrand Car Finder',
        description: 'Explore a vast selection of cars from different manufacturers, filterable by brand, year, doors, price, and more.',
        image: '/assets/portfolio/buscador-autos.jpg',
        link: 'https://car-finder-p.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <CssIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 6,
        title: 'MailSender Pro',
        description: 'Simplify email sending with this efficient mail delivery service designed to streamline your communication.',
        image: '/assets/portfolio/enviar-mails.png',
        link: 'https://enviar-mails.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <TailwindIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 7,
        title: 'Coinbase Clone',
        description: 'Experience the world of cryptocurrency trading with a platform that mirrors the functionality of Coinbase.',
        image: '/assets/portfolio/coinbase-clone.png',
        link: 'https://coinbase-clone-le.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <CssIcon /> <SassIcon />
        </span>
    },
    {
        id: 8,
        title: 'Startup Landing',
        description: 'A minimalist webpage designed to introduce your startup to the world and make a lasting impression.',
        image: '/assets/portfolio/startup-page.png',
        link: 'https://startup-page-le.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <CssIcon /> <SassIcon /> <JavascriptIcon /> <BootstrapIcon />
        </span>
    },
    {
        id: 9,
        title: 'Parallax Café',
        description: 'A visually stunning webpage for a cafe, complete with parallax scrolling effects to captivate visitors.',
        image: '/assets/portfolio/cafe-parallax.png',
        link: 'https://restaurant-parallax.netlify.app',
        technologies: <span className='technologies'>
            <HtmlIcon /> <CssIcon /> <JavascriptIcon />
        </span>
    },
    {
        id: 10,
        title: 'My First Portfolio',
        description: 'A sentimental showcase of my earliest work as a front-end web developer, representing the first version of my portfolio that holds a special place in my heart.',
        image: '/assets/portfolio/first-portfolio.png',
        link: 'https://www.google.com/',
        technologies:
            <span className='technologies'>
                <HtmlIcon /> <CssIcon /> <SassIcon /> <JavascriptIcon />
            </span>
    },
]

export default function Projects() {
    const [initialProjectsCount, setInitialProjectsCount] = useState(4);
    const [projectsToShow, setProjectsToShow] = useState(initialProjectsCount);
    const [allProjectsLoaded, setAllProjectsLoaded] = useState(false);

    // Handler to charge more proyects
    const loadMoreProjects = () => {
        const newProjectsToShow = projectsToShow + 2;
        if (newProjectsToShow >= projects.length) {
            setAllProjectsLoaded(true);
        }
        setProjectsToShow(newProjectsToShow);
    };

    return (
        <section className='projects container' id="projects">

            <motion.h2
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}
                className='projects__title h2'
            >
                Projects
            </motion.h2>

            <div className='projects__grid'>
                {projects.slice(0, projectsToShow).map((project) => (
                    <motion.article
                        key={project.id}
                        className='grid'
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0 }}
                    >

                        {/* img-overlay */}
                        <div className='overlay'>
                            <img className='overlay__img' src={project.image} alt={`Mockup of ${project.title} project`} />
                            <h3 className='overlay__title'>{project.title}</h3>
                            <div className="overlay__span">
                                <div className='overlay__group'>
                                    <div >
                                        <span className='overlay__span-title'>{project.title}</span>
                                        <span className='overlay__span-description'>{project.description}</span>
                                        <span>{project.technologies}</span>
                                    </div>
                                    <Button
                                        className='icon'
                                        label={<BsFillPlayFill />}
                                        url={project.link}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="project__button--responsive">
                            <Button
                                label='View Demo'
                                className='button__modal'
                                url={project.link} />
                        </div>
                    </motion.article>
                ))}
            </div>
            <motion.div
                className="load-projects"
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}>
                <Button
                    onClick={loadMoreProjects}
                    disabled={allProjectsLoaded}
                    className={`btn btn-lg  ${allProjectsLoaded ? 'btn-disabled' : 'btn'}`}
                    label={allProjectsLoaded ? 'All Projects loaded' : 'Load more projects'}
                />

            </motion.div>
        </section>
    )
}
