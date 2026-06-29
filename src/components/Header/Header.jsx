import React from 'react'

// assets
import Image from '/assets/avatar.webp'
import SocialMedia from '../Social-media/SocialMedia'

// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants.js';
// type animation
import { TypeAnimation } from 'react-type-animation'
// scroll
import { Link as ScrollLink } from 'react-scroll'
// i18n
import { useLanguage } from '../../i18n/LanguageContext'
// css
import './header.css'


export default function Header() {
    const { t } = useLanguage();

    // Interleave each role with a 2s pause for the typing animation.
    const roleSequence = t.hero.roles.flatMap((role) => [role, 2000]);

    return (
        <header className='container header' id='header'>
            <motion.article
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0 }}
                className='text'>
                <span className='text__eyebrow'>
                    <span className='text__eyebrow-dot' aria-hidden='true'></span>
                    {t.hero.badge}
                </span>
                <h1
                    className='text__h1'>LUCAS ESTEBAN
                </h1>
                <div className='animation'>
                    <span className='text__span'>{t.hero.iam} </span> <TypeAnimation
                        key={roleSequence.join('|')}
                        sequence={roleSequence}
                        speed={50}
                        className='text__animation'
                        wrapper='span'
                        repeat={Infinity}
                    />
                </div>
                <p className='text__description'>
                    {t.hero.description}
                </p>
                <div className='header__cta'>
                    <ScrollLink
                        to='projects'
                        smooth={true}
                        duration={600}
                        className='btn btn-lg header__cta-primary'
                        tabIndex={0}
                        role='button'
                    >
                        {t.hero.viewWork}
                    </ScrollLink>
                    <ScrollLink
                        to='contact'
                        smooth={true}
                        duration={600}
                        className='header__cta-secondary'
                        tabIndex={0}
                        role='button'
                    >
                        {t.hero.getInTouch}
                    </ScrollLink>
                </div>
                <div className='buttons'>
                    <SocialMedia className='buttons__socials' />
                </div>
            </motion.article>
            <motion.picture
                variants={fadeIn('down', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0 }}
                className='header__picture'>
                <img src={Image} alt="Photo of Lucas Esteban" className='header__picture-img' />
            </motion.picture>
        </header>
    )
}
