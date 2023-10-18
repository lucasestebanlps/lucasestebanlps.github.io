import React from 'react'

// assets
import Image from '/assets/avatar.png'
import SocialMedia from '../Social-media/SocialMedia'
import Button from '../Button/Button'

// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants.js';
// type animation
import { TypeAnimation } from 'react-type-animation'
// css
import './header.css'

const cvFileName = '/assets/cv-italiano.pdf'


export default function Header() {
    return (
        <header className='container header' id='header'>
            <motion.article
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}
                className='text'>
                <h1
                    className='text__h1'>LUCAS ESTEBAN
                </h1>
                <div className='animation'>
                    <span className='text__span'>I AM A </span> <TypeAnimation sequence={[
                        'Developer',
                        2000,
                        'UX/UI Designer',
                        2000,
                        'Sales expert',
                        2000,
                    ]}
                        speed={50}
                        className='text__animation'
                        wrapper='span'
                        repeat={Infinity}
                    />
                </div>
                <p className='text__description'>
                Welcome to my digital world! My approach goes beyond writing code; it's about bringing innovative ideas and solutions to life that positively impact people.
                </p>
                <div className='buttons'>
                    <Button
                        label={'Download CV'}
                        url={cvFileName}
                        className='btn btn-lg'
                        download='cv-italiano.pdf'
                    />
                    <SocialMedia className='buttons__socials' />
                </div>
            </motion.article>
            <motion.picture
                variants={fadeIn('down', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}
                className='header__picture'>
                <img src={Image} alt="Photo of Lucas Esteban" className='header__picture-img' />
            </motion.picture>
        </header>
    )
}
