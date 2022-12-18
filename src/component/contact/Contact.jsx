
import "./contact.scss";
import {CiMail} from "react-icons/ci"
import {RiMessengerLine} from "react-icons/ri"
import {RiWhatsappLine}  from "react-icons/ri"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_urgg4f8', 'template_bbp1l0n', form.current, 'NpZ7rxgcjBznxlpa_')
      e.target.reset()
  };

  
  
  return (
    <section>
    <div className="contact" id="contact">
      <h5 className="section__title margin__title">Entrer en contact</h5>
      <h2 className="section__subtitle text-light">Contactez moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>boumedjmadjen.amazigh@gmail.com</h5>
            <a className="text-light" href="mailto:boumedjmadjen.amazigh@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>boumedjmadjen amazigh</h5>
            <a href="https://m.me/mazigh.villa.5 " className="text-light"  target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>Whatapp</h4>
            <h5>+213 559346011</h5>
            <a className="text-light" href="https://api.whatsapp.com/send?phone+213559346011 "target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      
    </div>
    </section>
  );
}