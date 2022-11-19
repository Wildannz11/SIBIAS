import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
// import useInput from '../hooks/useInput';
// import FetchAPI from '../utils/API';
// import useToast from '../hooks/useToast';

function Signup() {
  // const [showToast] = useToast();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('Masyarakat');
    const [msg, setMsg] = useState('');
    const [msgUsername, setMsgUsername] = useState('');
    const [msgName, setMsgName] = useState('');
    const [msgEmail, setMsgEmail] = useState('');
    const [msgPassword, setMsgPassword] = useState('');
    const [msgConfirmPassword, setMsgConfirmPassword] = useState('');
    // const [errors, setErrors] = useState({
    //     username: '',
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     role:'',
    //   });
    //   const handleError = (error, input) => {
    //     setErrors((prevState) => ({ ...prevState, [input]: error }));
    //   };

  // const validate = async (e) => {
  //   e.preventDefault();
  //   handleError('', 'password');
  //   handleError('', 'email');
  //   handleError('', 'fullname');
  //   handleError('', 'confirm-password');

  //   let isValid = true;
  //   const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

  //   if (!username) {
  //       handleError('Username is required', 'username');
  //     }
  //   if (!name) {
  //     handleError('fullname is required', 'fullname');
  //   }
  //   if (!email) {
  //     handleError('email is required', 'email');
  //     isValid = false;
  //   }
  //   if (reg.test(email) === false) {
  //     handleError('Please input valid email', 'email');
  //     isValid = false;
  //   }
  //   if (password.length <= 8) {
  //     handleError('password must more than 8 character', 'password');
  //     isValid = false;
  //   }
  //   if (confirmPassword.length <= 8) {
  //       handleError('password must more than 8 character', 'password');
  //       isValid = false;
  //   }
  //   if (isValid) {
  //     const { status, message } = await FetchAPI.register({ username, name, email, password, confirmPassword,role });
  //     if (status === 'fail') {
  //       showToast(message);
  //     }

  //     if (status === 'success') {
  //       showToast(message);
  //       navigate('/signin');
  //     }
  //   }
  // }

    const Register = async (e) => {
        e.preventDefault();

        let isValid = true;
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

        if (!username) {
            setMsgUsername('Username is required');
            
          }else{
            setMsgUsername('');
            
          }

        if (!name) {
          setMsgName('Name is required');
          
        }else{
          setMsgName('');
          
        }

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
        
        if(!confirmPassword){
          setMsgConfirmPassword('Confirm Password required');
            isValid = false;
        } else {
          if (confirmPassword.length <= 8) {
            setMsgConfirmPassword('password must more than 8 character');
            isValid = false;
          } else {
            setMsgConfirmPassword('');
            
          }
        }

        if(isValid) {
          console.log(`${password} --- ${confirmPassword}`);
          console.log(typeof(password));
          console.log(typeof(confirmPassword));
          try {
            await axios.post('http://localhost:5000/users', {
              username:username,
              nama: name,
              email: email,
              password: password,
              confirm_password: confirmPassword,
              role: role,
            });
            navigate("/signin");
          } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
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
                    <p className='has-text-centered'>{msg}</p>
                    <form onSubmit={Register} className='form-input'>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input username" type="text" placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                // error={errors.username}
                                />
                                
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                            <p>{msgUsername}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input name" type="text" 
                                placeholder="Nama Lengkap"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                // error={errors.name}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                            <p>{msgName}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input email" type="text" 
                                placeholder="Alamat Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                // error={errors.email}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                            <p>{msgEmail}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="password" 
                                className="input password" placeholder='Password Anda'
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                // error={errors.password}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                            <p>{msgPassword}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="password" 
                                className="input confirm-password" placeholder='Ulangi Password' 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                // error={errors.confirmPassword}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                            <p>{msgConfirmPassword}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="" 
                                className="input role"  
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                // error={errors.role} 
                                disabled/>
                                <span className="icon is-small is-left">
                                <p>Role</p>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                          <button 
                          className='button is-success is-fullwidth button-sin-up' 
                           
                          >
                            Sign Up
                          </button>
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
