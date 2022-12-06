import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import logo from '../images/logo.png';
import useToast from '../hooks/useToast';
import PropTypes from 'prop-types';
// import FetchAPI from '../utils/API';
// import PropTypes from 'prop-types';
import axios from 'axios';
import HidePasswordBtn from './HidePasswordBtn';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Input from './HidePasswordBtn';
import { FaLock } from 'react-icons/fa';
import mainStyle from "../styles/main.css";

function Signin() {
  const navigate = useNavigate();
  const [showToast] = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [inputType, setInputType] = useState('');
  const [hidePassword, setHidePassword] = React.useState(false);
  // const input = document.querySelector('.password').type;
  const validate = async (e) => {
    e.preventDefault();
    
    let isValid = true;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

    if (!email) {
      setMsgEmail('email is required');
      isValid = false;
      
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
        await axios.post('http://localhost:5000/users/login', {
          email: email,
          password: password,
        })
        await axios.get('http://localhost:5000/users/me')
        .then(response => {
          const data = response.data;
          showToast(`Hallo Selamat Datang ${data.nama}`, 'success');
        })
        navigate("/dashboard");
      } catch (error) {
        if(error.response){
            showToast(error.response.data.msg, 'fail');
        }
      }
    }
  }

  return (
    <section className='hero'>
      <div className="card form-container">
        <div className="card-body sub-form-container">
          <div className="text-center mb-5 title-signup-login-container">
            <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias mb-3'/>
            <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
            <p className="subtitle text-muted">Sign In Untuk Melanjutkan</p>
          </div>
          <div className="text-center">
          <p className='has-text-centered warn-msg'>{msg}</p>
          </div>
          <form onSubmit={validate}>
              <div className="mb-4">
                <label className="form-label">Email</label>

                <div className="input-group">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-envelope"></i></span>

                  <input 
                  className="form-control form-control-sm email" 
                  type="text" 
                  placeholder="Maukkan Email Anda"
                  value={email}  
                  onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <p className='warn-msg'>{msgEmail}</p> 
              </div>

              <div className="mb-5">
                <label className="form-label">Password</label>
                  <Input
                  name = 'password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="min 8 character"
                  value={password}
                  type="password"
                  />
                <p className='warn-msg'>{msgPassword}</p>
              </div>

              <div className="d-grid text-center mb-5">
              <button type="submit" className="btn btn-primary is-success btn-login">Login</button>
              </div>
          </form>

          <div className="text-center">
            <p>Belum Punya Akun? <Link to="/users">Daftar Akun</Link></p>
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
