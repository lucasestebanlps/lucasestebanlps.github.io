import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { motion } from 'framer-motion'
import SocialMedia from '../components/Social-media/SocialMedia'
import { fadeIn } from '../components/Assets/variants'
import './certifications-page.css'

const certifications = [
  {
    name: 'UX/UI design',
    year: 2023,
    institution: 'Codo a codo',
    img: '/assets/certifications/diseñouxui-codoacodo.jpg'
  },
  {
    name: 'Web design',
    year: 2022,
    institution: 'Udemy',
    img: '/assets/certifications/diseñoWeb-udemy.jpg'
  },
  {
    name: 'Javascript',
    year: 2022,
    institution: 'Open Bootcamp',
    img: '/assets/certifications/javascript-openbootcamp.jpg'
  },
  {
    name: 'Digital marketing',
    year: 2022,
    institution: 'Google',
    img: '/assets/certifications/digitalMarketing-google.jpg'
  },
  {
    name: 'HTML & CSS',
    year: 2022,
    institution: 'Open Bootcamp',
    img: '/assets/certifications/htmlCss-openbootcamp.jpg'
  },
  {
    name: 'Programming Concepts',
    year: 2022,
    institution: 'Open Bootcamp',
    img: '/assets/certifications/conceptosProgramacion-openbootcamp.jpg'
  },
  {
    name: 'Programming Logic',
    year: 2022,
    institution: 'Udemy',
    img: '/assets/certifications/logica-udemy.jpg'
  },
]

export default function CertificationsPage() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt-effect');

    tiltElements.forEach((element) => {
      element.addEventListener('mousemove', handleMove);
      element.addEventListener('mouseout', handleMouseOut);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
      tiltElements.forEach((element) => {
        element.removeEventListener('mousemove', handleMove);
        element.removeEventListener('mouseout', handleMouseOut);
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
          <RouterLink
            to='/'
            className='top-menu__group--link'>
            <BiArrowBack className='top-menu__group--icon' />
          </RouterLink>
          <SocialMedia className='buttons__socials' />
        </div>
      </div>
      <section className='container certifications'>
        <motion.h2
          variants={
            fadeIn("up", 0.3)
          }
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='certifications__title h2'>
          Study
        </motion.h2>
        <motion.p
          variants={
            fadeIn("up", 0.3)
          }
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='certifications__description'>
          As you explore my certificates, please keep in mind that they represent just a portion of my dedication to this field. I'm excited to share my knowledge, collaborate on innovative projects, and continue evolving as a developer.
        </motion.p>
        <article className="certifications__grid">
          {certifications.map((certification, index) => {
            const { name, year, institution, img } = certification
            return (
              <motion.div
                key={index}
                variants={
                  index % 2 === 0
                    ? fadeIn("right", 0.1)
                    : fadeIn("left", 0.1)
                }
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className='element tilt-effect'>
                <h3 className='element__name'> {name} </h3>
                <img className='element__img' src={img} alt={`Mockup of ${name} project`} />
                <span className='element__institution'> {institution} </span>
                <span className='element__year'> {year} </span>
              </motion.div>
            )
          })}
        </article>
      </section>
    </>
  )
}
