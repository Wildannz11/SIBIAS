import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import FetchAPI from '../utils/API';
import PropTypes from 'prop-types';

function Signin({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const validate = async (e) => {
    e.preventDefault();
    handleError('', 'password');
    handleError('', 'email');
    let isValid = true;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

    if (!email) {
      handleError('email is required', 'email');
      isValid = false;
    }
    if (reg.test(email) === false) {
      handleError('Please input valid email', 'email');
      isValid = false;
    }
    if (password.length <= 8) {
      handleError('password must more than 8 character', 'password');
      isValid = false;
    }
    if (isValid) {
      const { error, data } = await FetchAPI.login({ email, password });
      if (error) {
        alert(error);
      } else {
        onLoginSuccess(data);
        navigate('/');
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
                  <form action="POST" className='form-input'>
                      <div className='field mt-5'>
                          <label className="label">Email</label>
                          <div className="control has-icons-left">
                              <input className="input" type="email" name='email' placeholder="Maukkan Email Anda" onChange={setEmail} value={email} error={errors.email}/>
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-envelope"></i>
                              </span>
                          </div>
                      </div>
                      <div className='field mt-5'>
                          <label className='label'>Password</label>
                          <div className="control has-icons-left">
                              <input type="password" className="password" onChange={setPassword} value={password} error={errors.password}  placeholder='Password Anda'/>
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-lock"></i>
                              </span>
                          </div>
                      </div>
                      <div className='field mt-5'>
                        <button className='button is-success btn-login is-fullwidth' onClick={validate} type="button">Login</button>
                      </div>
                  </form>
                  <div className="column has-text-centered">
                  <p>Belum Punya Akun? <Link to="/signup">Daftar Akun</Link></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  )
}

Signin.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Signin
