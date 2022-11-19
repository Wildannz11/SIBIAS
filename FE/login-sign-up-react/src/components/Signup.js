import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useInput from '../hooks/useInput';
import FetchAPI from '../utils/API';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useInput('');
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const [role, setRole] = useInput('Masyarakat');
    const [errors, setErrors] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        role:'',
      });
      const handleError = (error, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: error }));
      };

      const validate = async (e) => {
        e.preventDefault();
    handleError('', 'password');
    handleError('', 'email');
    handleError('', 'fullname');

    let isValid = true;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

    if (!username) {
        handleError('Username is required', 'username');
      }
    if (!name) {
      handleError('fullname is required', 'fullname');
    }
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
    if (confirmPassword.length <= 8) {
        handleError('password must more than 8 character', 'password');
        isValid = false;
    }
    if (isValid) {
      const { status, message } = await FetchAPI.register({ username, name, email, password, role });
      if (status === 'fail') {
        alert(message);
      }

      if (status === 'success') {
        alert(message);
        navigate('/signin');
      }
    }
      }

    // const Register = async (e) => {
    //     e.prevenDefault();
    //     try {
    //         await axios.post('http://localhost:5000/users', {
    //             name: name,
    //             username: username,
    //             email: email,
    //             password: password,
    //             role: role,
    //         });
    //         navigate.push("/");
    //     } catch (error) {
    //         if(error.response){
    //             console.log(error.response.data.msg);
    //         }
    //     }
    // };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop box">
                    <div className="column has-text-centered mb-3">
                        <img src={require('../images/logo.png').default} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                        <h3 className="title form-page-title">Sign Up</h3>
                        <p className="subtitle">Buat Akun Baru</p>
                    </div>
                    <form className='form-input'>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input username" type="text" placeholder="Username" value={username} onChange={setUsername} error={errors.username}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input name" type="text" placeholder="Nama Lengkap"value={name} onChange={setName} error={errors.name}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input email" type="email" placeholder="Alamat Email" value={email} onChange={setEmail} error={errors.email}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="password" className="input password" placeholder='Password Anda'value={password} onChange={setPassword} error={errors.password}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="password" className="input confirm-password" placeholder='Ulangi Password' value={confirmPassword} onChange={setConfirmPassword} error={errors.confirmPassword}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="text" className="input role"  value={role} onChange={setRole} error={errors.role} disabled/>
                                <span className="icon is-small is-left">
                                <p>Role</p>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                          <button className='button is-success is-fullwidth button-sin-up' onClick={validate} type="button">Sign Up</button>
                        </div>
                    </form>
                    <div className="column has-text-centered">
                    <p>Sudah Punya Akun? <Link to="/" className='sign-in-link'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;
