import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
// import FetchAPI from '../utils/API';
// import PropTypes from 'prop-types';
import axios from 'axios';

function Signin({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [msg, setMsg] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');

  const validate = async (e) => {
    e.preventDefault();
    
    let isValid = true;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

    if (!email) {
      setMsgEmail('email is required');
      
    } else {
      if (reg.test(email) === false) {
        setMsgEmail('Please input valid email')
        isValid = false;
      } else {
        setMsgEmail('')
        
      }
    }
    
    if(!password){
      setMsgPassword('password required');
        isValid = false;
    } else {
      if (password.length <= 8) {
        setMsgPassword('password must more than 8 character');
        isValid = false;
      } else {
        setMsgPassword('');
        
      }
    }

    if(isValid) {
      try {
        await axios.post('http://localhost:5000/login', {
          email: email,
          password: password,
        });
        navigate("/dashboard");
      } catch (error) {
        if(error.response){
            setMsg(error.response.data.msg);
        }
      }
    }
  }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
    <div className="hero-body">
      <div className="container">
          <div className="columns is-centered">
              <div className="column is-4-desktop box">
              <div className="column has-text-centered">
                      <img src={require('../images/logo.png').default} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                      <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
                      <p className="subtitle">Sign In Untuk Melanjutkan</p>
                  </div>
                  <p className='has-text-centered'>{msgEmail}</p>
                  <form action="POST" onSubmit={validate} className='form-input'>
                      <div className='field mt-5'>
                          <label className="label">Email</label>
                          <div className="control has-icons-left">
                              <input 
                              className="input" 
                              type="email" 
                              name='email' 
                              placeholder="Maukkan Email Anda" onChange={(e) => {setEmail(e.target.value)}} 
                              value={email} 
                              />
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-envelope"></i>
                              </span>
                          </div>
                          <p>{msgEmail}</p>
                      </div>
                      <div className='field mt-5'>
                          <label className='label'>Password</label>
                          <div className="control has-icons-left">
                              <input 
                              type="password" 
                              className="input password" 
                              onChange={(e) => {setPassword(e.target.value)}} 
                              value={password}   placeholder='Password Anda'/>
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-lock"></i>
                              </span>
                          </div>
                          <p>{msgPassword}</p>
                      </div>
                      <div className='field mt-5'>
                        <button className='button is-success btn-login is-fullwidth' type="button">Login</button>
                      </div>
                  </form>
                  <div className="column has-text-centered">
                  <p>Belum Punya Akun? <Link to="/users">Daftar Akun</Link></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  )
}

// Signin.propTypes = {
//   onLoginSuccess: PropTypes.func.isRequired,
// };

export default Signin
