import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import SocialMedia from '../components/Social-media/SocialMedia';
import { fadeIn } from '../variants';
import { certifications } from '../data/certifications';
import { useLanguage } from '../i18n/LanguageContext';
import './certifications-page.css';

export default function CertificationsPage() {
  const { t } = useLanguage();
  // Aplicar el efecto tilt a las tarjetas de certificados
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt-effect');

    tiltElements.forEach((element) => {
      element.addEventListener('mousemove', handleMove);
      element.addEventListener('mouseleave', handleMouseOut);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
      tiltElements.forEach((element) => {
        element.removeEventListener('mousemove', handleMove);
        element.removeEventListener('mouseleave', handleMouseOut);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
      });
    };
  }, []);

  function handleMove(e) {
    const el = e.currentTarget;
    const height = el.clientHeight;
    const width = el.clientWidth;
    const xVal = e.layerX;
    const yVal = e.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
    el.style.transform = string;
  }

  function handleMouseOut(e) {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  }

  function handleMouseDown(e) {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
  }

  function handleMouseUp(e) {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
  }

  return (
    <>
      <div className='top-menu'>
        <div className='container top-menu__group'>
          <RouterLink to='/' className='top-menu__group--link' aria-label={t.certifications.back}>
            <BiArrowBack className='top-menu__group--icon' aria-hidden='true' />
          </RouterLink>
          <SocialMedia className='buttons__socials' />
        </div>
      </div>
      <section className='container certifications'>
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='certifications__title h2'>
          {t.certifications.title}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='certifications__description'>
          {t.certifications.intro}
        </motion.p>
        <article className="certifications__grid">
          {certifications.map((certification, index) => {
            const { name, year, institution, img } = certification;
            return (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeIn("right", 0.1) : fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className='element tilt-effect'>
                <h3 className='element__name'> {name} </h3>
                <img className='element__img' src={img} alt={`Certificate of ${name}`} />
                <span className='element__institution'> {institution} </span>
                <span className='element__year'> {year} </span>
              </motion.div>
            );
          })}
        </article>
      </section>
    </>
  );
}