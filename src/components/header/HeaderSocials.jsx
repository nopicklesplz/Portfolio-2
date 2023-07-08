import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href='https://www.linkedin.com/in/jesus-moreno-5081291b1/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/nopicklesplz' target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href='mailto:moreno_2318@yahoo.com' target='_blank' rel="noreferrer"><AiOutlineMail /></a>
        </div>
    )
}

export default HeaderSocials;