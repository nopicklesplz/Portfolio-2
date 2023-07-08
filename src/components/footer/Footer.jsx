import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Jesus M.</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/jesus-moreno-5081291b1/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/nopicklesplz' target='_blank' rel="noreferrer"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Porfolio Website: JESUS MORENO;</small>
            </div>
        </footer>
    )
}

export default Footer;