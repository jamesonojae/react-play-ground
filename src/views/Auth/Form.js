import React, { useState } from 'react';
import axios from '../../utilities/axios';
import {Alert} from 'react-bootstrap';

const Form = () => {
  const [userData, setUserData] = useState({
    name: '', email: '', password: '', message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState('');
  const {name, email, password, message} = userData;
  const onChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const mail = await axios.post('users/createUser', {...userData, userName: name});
      console.log('mail', mail.data.message);
      setMsg(mail.data.message);
      setShowAlert(true);
    } catch (e) {
      console.log('error', e)

    }
  }
  const handleAlert = () => {
    return (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          <p>
            {msg}
          </p>
        </Alert>
    );
  }

  const onLogin = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  const handleLogin = async  (e) => {
    e.preventDefault();
    console.log('data', userData);
    try {
      const mail = await axios.post('users/login', userData);
      console.log('data', mail.data);
      setShowAlert(true)
      setMsg(mail.data.message);

    } catch (e) {
      console.log('error', e)

    }
  }

  const loginForm = () => {
    return (
        <div>
          <form onSubmit={handleLogin}>
            <div className="row">
              <div className="col-md-12 text-center">{showAlert && handleAlert()}</div>
              <div className="col-md-6">
                <input type="text" className="form-control" value={email} placeholder="email" name="email"
                       onChange={(e) => onLogin(e)}/>
              </div>
              <div className="form-group col-md-6">
                <input className="form-control" type="text"  placeholder="password" name="password"
                onChange={(e) => onLogin(e)} value={password} />
              </div>
              <div className="col-md-12">
                <button type="button" className="btn btn-lg btn-outline-success"
                onClick={handleLogin}>Login</button>
              </div>
            </div>
          </form>
        </div>
    )
  }
  return (
        <>
          <form onSubmit={sendEmail}>
            <div className="container">
              <div className="row">
                <div className="col-md-12"> <span className="text-center"> Register User</span></div>
                <div className="col-md-12"> <span className="text-center">{showAlert &&  handleAlert()}</span></div>
                <div className="col-md-4">
                  <input type="hidden" name="contact_number" />
                  <label>Name</label>
                  <input  className="form-control" type="text" name="name"
                          onChange={(e) => onChange(e)}
                          value={name}/>
                </div>
                <div className="col-md-4">
                  <label>Email</label>
                  <input  className="form-control" type="email" name="email"
                          value={email}
                          onChange={(e) => onChange(e)} />
                </div>
                <div className="col-md-4">
                  <label>Password</label>
                  <input className="form-control" type="email" name="password"
                         value={password}
                         onChange={(e) => onChange(e)} />
                </div>
                <div className="col-md-4">
                  <label>Message</label>
                  <textarea  className="form-control" name="message"
                             value={message}
                             onChange={(e) => onChange(e)}/>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-primary" type="button" onClick={sendEmail}>SUBMIT</button>
                </div>
              </div>
            </div>
          </form>
          <div className="pt-8">
            {loginForm()}
          </div>
        </>
  );
};

export default Form;
