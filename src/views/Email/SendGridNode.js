import React, { useState } from 'react';
import axios from '../../utilities/axios';

const SendGridNode = () => {
  const [contactData, setContactData] = useState('');

  const {name, email, message} = contactData;
  const onChange = (e) => {
    setContactData({...contactData, [e.target.name]: e.target.value });
  }
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const mail = await axios.post('/mails/sendMail', contactData);
      console.log('mail', mail, mail.data);

    } catch (e) {
      console.log('error', e)

    }
  }
  return (
      <>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="name"
          onChange={(e) => onChange(e)}
          value={name}/>
          <label>Email</label>
          <input type="email" name="email"
                 value={email}
                 onChange={(e) => onChange(e)} />
          <label>Message</label>
          <textarea name="message"
                    value={message}
                    onChange={(e) => onChange(e)}/>
          <input type="submit" value="Send" />
        </form>
      </>
  );
};

export default SendGridNode;
