import React from 'react'
import './footer.scss'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
<footer>
    <a href="#" className='footer__logo'>Maz-dev</a>
    <ul className='permalinks'>
        <li><a href="#intro">Acceuil</a></li>
        <li><a href="#testimonials">A propos de moi</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#skills">Compétence</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="socials__links">
        <a href="https://www.facebook.com/mazigh.villa.5" target="_blank"><FiFacebook/></a>
        <a href="https://www.instagram.com/amazighboumm/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/AmazighBoumedj1" target="_blank"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/amazigh-boumedjmadjen-13a567257/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/mazigh123" target="_blank"><FaGithub/></a>
    </div>

    <div className="footer__copyright">
        <small> &copy; Maz-dev Portfolio</small>
    </div>



</footer>  )
}

export default Footer