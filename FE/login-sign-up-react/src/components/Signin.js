import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import logo from '../images/logo.png';
import useToast from '../hooks/useToast';
// import FetchAPI from '../utils/API';
// import PropTypes from 'prop-types';
import axios from 'axios';
import HidePasswordBtn from './HidePasswordBtn';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Signin() {
  const navigate = useNavigate();
  const [showToast] = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        showToast(`Hallo Selamat Datang`, 'success');
        navigate("/dashboard");
      } catch (error) {
        if(error.response){
            showToast(error.response.data.msg, 'fail');
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
                      <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                      <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
                      <p className="subtitle">Sign In Untuk Melanjutkan</p>
                  </div>
                  <p className='has-text-centered warn-msg'>{msg}</p>
                  <form onSubmit={validate} className='form-input'>
                      <div className='field mt-5'>
                          <label className="label">Email</label>
                          <div className="control has-icons-left">
                              <input 
                              className="input email" 
                              type="text" 
                              placeholder="Maukkan Email Anda"
                              value={email}  
                              onChange={(e) => setEmail(e.target.value)} 
                              />
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-envelope"></i>
                              </span>
                              
                          </div>
                          <p className='warn-msg'>{msgEmail}</p>
                      </div>
                      <div className='field mt-5'>
                          <label className='label'>Password</label>
                          <div className="control has-icons-left has-icons-right">
                              <input 
                              type="password" 
                              className="input password pw" 
                              onChange={(e) => setPassword(e.target.value)} 
                              value={password}   
                              placeholder='Password Anda'/>
                              <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                              </span>
                              <span className="icon is-small is-right">
                               <a href="hide-password"><i className="fa-solid fa-eye"></i></a> 
                              </span>    
                          </div>
                          <p className='warn-msg'>{msgPassword}</p>
                      </div>
                      <div className='field mt-5'>
                        <button 
                        className='button is-success btn-login is-fullwidth'>
                          Login
                          </button>
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
