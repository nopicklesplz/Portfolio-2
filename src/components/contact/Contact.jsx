import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [buttonText, submitButtonText] = useState('Send Message')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nsuhx87', 'template_pfcf31l', form.current, 'CxTGe7AYKsWahZ4Pt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5 style={{ wordBreak: 'break-word' }}>moreno_2318@yahoo.com</h5>
                        <a href='mailto:moreno_2318@yahoo.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin />
                        <h4>Linkedin</h4>
                        <a href='https://www.linkedin.com/in/jesus-moreno-5081291b1/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Get in Touch
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' required ></textarea>
                    <button 
                        onClick={() => submitButtonText('Message Sent!')}
                        type='submit' 
                        className='btn btn-primary'
                    >
                        {buttonText}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact