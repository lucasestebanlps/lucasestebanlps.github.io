import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { BsFillPlayFill } from 'react-icons/bs';

import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { projects as projectsData } from '../../data/projects';
import './projects.css';
import '../Assets/Icons/icons.css'

// Featured projects first, keeping the original order within each group.
const projects = [...projectsData].sort((a, b) => Number(b.featured) - Number(a.featured));

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
                                    <Button
                                        className='icon'
                                        label={<BsFillPlayFill aria-hidden="true" />}
                                        ariaLabel={`Open ${project.title} demo`}
                                        url={project.link}
                                    />
                                </div>
                            </div>
                        </div>

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