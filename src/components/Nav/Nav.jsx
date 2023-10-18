import { FiHome } from 'react-icons/fi';
import { BsBriefcase, BsBook, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';
import './nav.css'

export default function Nav() {
    return (
        <nav className='nav-bottom'>
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
                    >
                        <FiHome />
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
                    >
                        <BsBriefcase />
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
                    >
                        <BsBook />
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
                    >
                        <BsChatSquare />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}