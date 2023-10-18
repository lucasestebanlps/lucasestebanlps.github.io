import React from 'react'
// icon
import { GiGraduateCap } from 'react-icons/gi'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants'
// css
import './experience.css'
// button
import { Link as RouterLink } from 'react-router-dom'
//icons
import { AllIcons } from '../Assets/Icons/Icons';



// experience data

const experience = [
    {
        name: 'Web developer',
        description: "Since venturing into this world, I've dedicated myself to honing my coding skills, gaining hands-on experience through various projects, and acquiring relevant certifications. I'm enthusiastic about transitioning into development as my new career!",
        link: '/certifications'
    },
    {
        name: 'UI/UX Design',
        description: "My lifelong passion for design has driven me to explore and practice UX/UI design. I'm motivated to create engaging and intuitive user experiences, which I've honed through personal projects.",
        link: '/certifications'
    },
    {
        name: 'Sales expert',
        description: "In my previous roles, I gained 5+ years of sales experience, mastering customer service, surpassing sales targets, working effectively in teams, and problem-solving. These skills remain invaluable, enhancing my collaboration, communication, and project efficiency."
    },
    {
        name: 'Skills',
        description: <AllIcons />
    },
]

export default function Experience() {
    return (
        <section className='about-me' id='about-me'>
            {/* text & image*/}
            <div className='container about-me__container'  id='about-me'>
                <motion.article
                    variants={
                        fadeIn("up", 0.3)
                    }
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className='texts'>
                    <div className='text__container'>
                        <h2 className='h2 text__container--title '>About me</h2>
                        <h3 className='text__container--description'>Technology enthusiast, passionate about development, and creator of unique experiences.</h3>
                    </div>
                </motion.article>
                {/* services */}
                <motion.article
                    variants={
                        fadeIn("up", 0.3)
                    }
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className='experiences'>
                    {/* service list */}
                    {experience.map((service, index) => {
                        {/* destructure service */ }
                        const { name, description, link } = service;
                        let linkButton = null;
                        if (link) {
                            linkButton = (
                                <RouterLink to={link} className='btn experience__container-header--button'>
                                    <GiGraduateCap />
                                </RouterLink>
                            );
                        }
                        return (
                            <div className='experience__container' key={index}>
                                <div className='experience__container-header'>
                                    <h4 className='experience__container-header--title'>
                                        {name}
                                    </h4>
                                    {linkButton}
                                </div>
                                <span className='experience__description'>
                                    {description}
                                </span>
                            </div>
                        );
                    })}
                </motion.article>
            </div>
        </section>
    )
}
