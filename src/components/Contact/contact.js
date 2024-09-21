import React, { useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yg7gk5g', 'template_14as7js', form.current, '3poxOr_naDBqagVd6La_d')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
      }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <section id="contact">
      <h2 className="worksTitle">Contact Me</h2>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name"  />
        <input type="email" className="email" placeholder="Your Email" name="your_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

