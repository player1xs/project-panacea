import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import stream from '/src/assets/stream.mp4'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service = process.env.REACT_APP_SERVICE
    const template = process.env.REACT_APP_TEMPLATE
    const publicKey = process.env.REACT_APP_PUBLIC_KEY


    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Email'>
      <video src={stream} autoPlay loop muted/>
      <div className="email-container">
        <form ref={form} onSubmit={sendEmail}>
          <p className="email-title">Contact Form</p>
          <div className="fieldset">
            {/* <label className="label-text">Name</label> */}
            <input type="text" placeholder="Name" name="user_name" className="form-details"/>
            {/* <label className="label-text">Email</label> */}
            <input type="email" placeholder="Email" name="user_email"  required className="form-details"/>
            {/* <label className="label-text">Message</label> */}
            <textarea name="message"  placeholder="Message,,," className="form-details-message"/>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};