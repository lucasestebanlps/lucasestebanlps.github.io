import React from 'react';
// form
import ContactForm from './ContactForm/ContactForm';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants';
// css
import './Contact.css'



export default function Contact() {
  return (
    <footer className='container footer' id='contact'>
      {/* text */}
      <motion.article className='footer__texts'
        variants={
          fadeIn("up", 0.3)
        }
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
      >

        <h2
          className='h2 footer__texts-title'>
          Get in touch
        </h2>
        <h4
          className='footer__texts-description'>
          Let's work <br /> together!
        </h4>
      </motion.article>
      <ContactForm />
    </footer>
  )
}
