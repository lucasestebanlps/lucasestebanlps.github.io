import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
// motion
import { motion } from 'framer-motion';
// button
import { Link as RouterLink } from 'react-router-dom';
// icon
import { GiGraduateCap } from 'react-icons/gi';
// variants
import { fadeIn } from '../../variants';
// css
import './experience.css';
import '../Assets/Icons/icons.css'

export default function Experience() {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        // Cargar el JSON
        fetch('/data/experience.json')
            .then((response) => response.json())
            .then((data) => setExperienceData(data.experiences));
    }, []);

    // Renderizar iconos de habilidades
    const renderSkillsIcons = (skills) => {
        return skills?.map((skill, index) => (
            <Icon key={index} icon={skill.name} className="icons__group--icon" style={{ color: skill.iconColor }} />
        ));
    };

    return (
        <section className='about-me' id='about-me'>
            {/* Text & Image */}
            <div className='container about-me__container'>
                <motion.article
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    className='texts'>
                    <div className='text__container'>
                        <h2 className='h2 text__container--title '>About me</h2>
                        <h3 className='text__container--description'>Technology enthusiast, passionate about development, and creator of unique experiences.</h3>
                    </div>
                </motion.article>

                {/* Experiences */}
                <motion.article
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    className='experiences'>
                    {experienceData?.map((experience, index) => (
                        <div className='experience__container' key={index}>
                            <div className='experience__container-header'>
                                <h4 className='experience__container-header--title'>{experience.name}</h4>
                                {experience.link && (
                                    <RouterLink to={experience.link} className='btn experience__container-header--button'>
                                        <GiGraduateCap />
                                    </RouterLink>
                                )}
                            </div>
                            <span className='experience__description'>{experience.description}</span>

                            {/* Mostrar skills si existen */}
                            {experience.skills && (
                                <div className="skills__icons">
                                    <span className="icons__group">{renderSkillsIcons(experience.skills)}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.article>
            </div>
        </section>
    );
}