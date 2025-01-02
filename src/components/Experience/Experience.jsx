import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GiGraduateCap } from 'react-icons/gi';
import './experience.css';
import { fadeIn } from '../Assets/variants';
import '../Assets/Icons/icons.css';

export default function Experience() {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        fetch('/data/experience.json')
            .then((response) => response.json())
            .then((data) => setExperienceData(data.experiences));
    }, []);

    const renderSkillsIcons = (skills) => {
        return skills?.map((skill, index) => (
            <Icon
                key={`skill-icon-${index}`}
                icon={skill.name}
                className="icons__group--icon"
                style={{ color: skill.iconColor }}
            />
        ));
    };

    return (
        <section className="about-me" id="about-me">
            <div className="container about-me__container">
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="texts"
                >
                    <div className="text__container">
                        <h2 className="h2 text__container--title">About me</h2>
                    </div>
                </motion.article>

                <motion.article className="experiences">
                    {experienceData?.map((experience, index) => (
                        <motion.div
                            key={`experience-${index}`}
                            className={`experience__container ${index % 2 === 0 ? "left" : "right"}`}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.1)}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="experience__container-header">
                                <h4 className="experience__container-header--title">
                                    {experience.name}
                                </h4>
                                {experience.link && (
                                    <RouterLink
                                        to={experience.link}
                                        className="btn experience__container-header--button"
                                    >
                                        <GiGraduateCap />
                                    </RouterLink>
                                )}
                            </div>
                            <span className="experience__description">
                                {experience.description}
                            </span>

                            {experience.skills && (
                                <div className="skills__icons">
                                    <span className="icons__group">
                                        {renderSkillsIcons(experience.skills)}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.article>
            </div>
        </section>
    );
}