import React from 'react'
import { FiHome } from 'react-icons/fi';
import { BsBriefcase, BsBook, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useLanguage } from '../../i18n/LanguageContext';
import './nav.css'

export default function Nav() {
    const { t } = useLanguage();
    return (
        <nav className='nav-bottom' aria-label={t.nav.section}>
            <ul className='shadow-bottom'>
                <li className="nav-list__item">
                    <Link
                        activeClass="active"
                        to="header"
                        smooth={true}
                        spy={true}
                        offset={-400}
                        duration={600}
                        className="nav-list__link"
                        tabIndex={0}
                        role="link"
                        aria-label={t.nav.home}
                    >
                        <FiHome aria-hidden="true" />
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link
                        activeClass="active"
                        to="projects"
                        smooth={true}
                        spy={true}
                        duration={600}
                        className="nav-list__link"
                        tabIndex={0}
                        role="link"
                        aria-label={t.nav.projects}
                    >
                        <BsBriefcase aria-hidden="true" />
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link
                        activeClass="active"
                        to="about-me"
                        smooth={true}
                        spy={true}
                        duration={600}
                        className="nav-list__link"
                        tabIndex={0}
                        role="link"
                        aria-label={t.nav.about}
                    >
                        <BsBook aria-hidden="true" />
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        spy={true}
                        duration={600}
                        className="nav-list__link"
                        tabIndex={0}
                        role="link"
                        aria-label={t.nav.contact}
                    >
                        <BsChatSquare aria-hidden="true" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}