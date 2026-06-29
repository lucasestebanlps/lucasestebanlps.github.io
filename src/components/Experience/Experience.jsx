import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GiGraduateCap } from 'react-icons/gi';
import './experience.css';
import { fadeIn } from '../../variants';
import { experiences as experienceData } from '../../data/experience';
import { useLanguage, localize } from '../../i18n/LanguageContext';
import '../Assets/Icons/icons.css';

export default function Experience() {
    const { t, lang } = useLanguage();

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
                        <h2 className="h2 text__container--title">{t.about.title}</h2>
                        <p className="section__subtitle about-me__subtitle">
                            {t.about.subtitle}
                        </p>
                    </div>
                </motion.article>

                <motion.article className="experiences">
                    {experienceData?.map((experience, index) => (
                        <motion.div
                            key={`experience-${index}`}
                            className={`experience__container ${index % 2 === 0 ? "left" : "right"}`}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, y: 50 }}
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.1)}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                        >
                            <div className="experience__container-header">
                                <h3 className="experience__container-header--title">
                                    {localize(experience.name, lang)}
                                </h3>
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
                                {localize(experience.description, lang)}
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