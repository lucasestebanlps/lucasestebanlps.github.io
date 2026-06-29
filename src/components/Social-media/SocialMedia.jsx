import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'
import './social-media.css'
import Button from '../Button/Button'

export default function SocialMedia({className}) {
    return (
        <article className={className}>
            <Button
                url="https://www.linkedin.com/in/lucasestebanlps"
                className="buttons__socials-linkedin"
                ariaLabel="LinkedIn profile"
                label={<FaLinkedin />}
            />
            <Button
                url="https://github.com/lucasestebanlps"
                className="buttons__socials-github"
                ariaLabel="GitHub profile"
                label={<FaGithub />}
            />
            <Button
                url="https://www.youtube.com/c/LucasEstebanLPS"
                className="buttons__socials-youtube"
                ariaLabel="YouTube channel"
                label={<FaYoutube />}
            />
            <Button
                url="https://www.instagram.com/lucasestebanlps"
                className="buttons__socials-instagram"
                ariaLabel="Instagram profile"
                label={<FaInstagram />}
            />
        </article>
    )
}
