import React, {useRef} from 'react'
import './Contact.css'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_id', 'template id', form.current, {
        publicKey: 'id',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email send successful')
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <p className='contactDesc'>Please fill out the form below for any work opportunities.</p>

        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type="text" className='name' name="from_name" placeholder="Name"/>
            <input type="email" className="email" name='from_email' placeholder="Your email" />
            <textarea  name="message" rows="5" className='msg' placeholder='Your Message'></textarea>
            <button type="submit" value='Send' className='contactBtn'>Submit</button>
        </form>

        <div className='socialLinks'>
            <a className='link' href=""><img src={Instagram} alt="" /></a>
            <a className='link' href=""><img src={Facebook} alt="" /></a>
            <a className='link' href=""><img src={Twitter} alt="" /></a>
            <a className='link' href=""><img src={Youtube} alt="" /></a>
        </div>
      
    </section>
  )
}

export default Contact
