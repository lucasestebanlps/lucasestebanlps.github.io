import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { projects as projectsData } from '../../data/projects';
import './projects.css';
import '../Assets/Icons/icons.css'

// Featured projects first, keeping the original order within each group.
const projects = [...projectsData].sort((a, b) => Number(b.featured) - Number(a.featured));

// Builds the list of available links for a project (web demo + app stores).
const getProjectLinks = (project) => {
    const links = [];
    if (project.link) {
        links.push({
            key: 'demo',
            url: project.link,
            icon: <BsFillPlayFill aria-hidden="true" />,
            text: 'View Demo',
            label: `Open ${project.title} demo`,
        });
    }
    if (project.playStore) {
        links.push({
            key: 'play',
            url: project.playStore,
            icon: <FaGooglePlay aria-hidden="true" />,
            text: 'Google Play',
            label: `Get ${project.title} on Google Play`,
        });
    }
    if (project.appStore) {
        links.push({
            key: 'appstore',
            url: project.appStore,
            icon: <FaAppStore aria-hidden="true" />,
            text: 'App Store',
            label: `Get ${project.title} on the App Store`,
        });
    }
    return links;
};

export default function Projects() {
    const [projectsToShow, setProjectsToShow] = useState(4);
    const allProjectsLoaded = projectsToShow >= projects.length;

    // Mapeo dinámico de íconos basado en el nombre
    const renderTechnologyIcons = (techs) => {
        return techs.map((tech) => (
            <Icon
                key={tech.name}
                icon={tech.name}
                className="icons__group--icon"
                style={{ color: tech.iconColor }}
            />
        ));
    };

    const loadMoreProjects = () => {
        setProjectsToShow((current) => current + 2);
    };

    return (
        <section className='projects container' id="projects">
            <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0 }}
                className='projects__header'
            >
                <h2 className='projects__title h2'>Projects</h2>
                <p className='section__subtitle'>
                    A selection of things I&apos;ve built — from client work to personal experiments.
                </p>
            </motion.div>

            <div className='projects__grid'>
                {projects.slice(0, projectsToShow).map((project) => (
                    <motion.article
                        key={project.id}
                        className='grid'
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <div className='overlay'>
                            <img className='overlay__img' src={project.image} alt={`Mockup of ${project.title} project`} loading='lazy' />
                            <h3 className='overlay__title'>{project.title}</h3>
                            <div className="overlay__span">
                                <div className='overlay__group'>
                                    <div>
                                        <span className='overlay__span-title'>{project.title}</span>
                                        <span className='overlay__span-description'>{project.description}</span>
                                        <span className='technologies'>{renderTechnologyIcons(project.technologies)}</span>
                                    </div>
                                    <div className='project__links'>
                                        {getProjectLinks(project).map((link) => (
                                            <Button
                                                key={link.key}
                                                className='icon'
                                                label={link.icon}
                                                ariaLabel={link.label}
                                                url={link.url}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project__button--responsive">
                            {getProjectLinks(project).map((link) => (
                                <Button
                                    key={link.key}
                                    label={link.text}
                                    className='button__modal'
                                    ariaLabel={link.label}
                                    url={link.url}
                                />
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                className="load-projects"
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0 }}
            >
                <Button
                    onClick={loadMoreProjects}
                    disabled={allProjectsLoaded}
                    className={`btn btn-lg ${allProjectsLoaded ? 'btn-disabled' : 'btn'}`}
                    label={allProjectsLoaded ? 'All Projects loaded' : 'Load more projects'}
                />
            </motion.div>
        </section>
    );
}