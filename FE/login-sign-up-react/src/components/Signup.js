import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('Masyarakat');
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const Register = async (e) => {
        e.prevenDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                username: username,
                email: email,
                password: password,
                role: role,
            });
            navigate.push("/");
        } catch (error) {
            if(error.response){
                console.log(error.response.data.msg);
            }
        }
    };

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
                    <form className='form-input' onSubmit={Register}>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Nama Lengkap"value={name} onChange={(e) => setName(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input className="input" type="email" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="password" className="input" placeholder='Password Anda'value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="password" className="input" placeholder='Ulangi Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input type="text" className="input"  value={role} onChange={(e) => setRole(e.target.value)}/>
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                          <button className='button is-success is-fullwidth'>Sign Up</button>
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
