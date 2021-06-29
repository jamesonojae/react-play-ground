import React from 'react';
import emailjs from 'emailjs-com';

const EmailJs = () => {
  const sendEmail = (e) => {
    e.preventDefault();
   try{
    const mail = emailjs.sendForm('service_7tfec3i', 'template_42ic1bd', e.target, 'user_pvIAwHgYNjvK1j6W5G4dS');
    console.log(mail);
    e.target.reset();

   } catch (e) {
     console.log('error', e)

   }
  }
  return (
      <>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="to_name" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </>
  );
};

export default EmailJs;
