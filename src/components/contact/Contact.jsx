import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0izlddp', 'template_xsjuuob', form.current, 'Kt8hvXTEB0fjcnlKd')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TbBrandTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>0813-8406-7234</h5>
            <a href="https://t.me/aldirachmawans" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>aldirachmawan11@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aldirachmawan11@gmail.com" target='_blank'>Send a email</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>0877-2064-0064</h5>
            <a href="https://wa.me/6287720640064" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact