import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
// import useInput from '../hooks/useInput';
// import FetchAPI from '../utils/API';
import useToast from '../hooks/useToast';
import logo from '../images/logo.png';

function Signup() {
    const [showToast] = useToast();
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
            showToast('Selamat Akun Anda Berhasil Dibuat', 'success');
            navigate("/login");
          } catch (error) {
            if(error.response){
              showToast(error.response.data.msg, 'fail');
            }
          }
        }
    };

  return (
    <section className="hero">
      <div className="card form-container">
        <div className="card-body sub-form-container">
          <div className="text-center mb-5 title-signup-login-container">
            <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias mb-3'/>
            <h3 className="title form-page-title">Sign Up</h3>
            <p className="subtitle">Buat Akun Baru</p>
          </div>
          <div className="text-center">
            <p className='warn-msg'>{msg}</p>
          </div>

          <form onSubmit={Register}>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>

                  <input 
                  className="form-control username" 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  />
                </div>
                <p className='warn-msg'>{msgUsername}</p> 
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>

                  <input 
                  className="form-control name" 
                  type="text" 
                  placeholder="Nama Lengkap"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <p className='warn-msg'>{msgName}</p> 
              </div>

              <div className="mb-4">
                <div className="input-group">
                <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-envelope"></i></span>

                  <input
                   className="form-control email" 
                   type="text" 
                   placeholder="Alamat Email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className='warn-msg'>{msgEmail}</p>
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                  <input
                  type="password" 
                  className="form-control password pw" 
                  placeholder='Password Anda'
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="input-group-text hide-password" id="addon-wrapping"><i className="fa-solid fa-eye"></i></span>
                </div>
                <p className='warn-msg'>{msgPassword}</p>
              </div>

              <div className="mb-4">
                <div className="input-group">
                <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                
                  <input 
                 type="password" 
                 className="form-control confirm-password pw" 
                 placeholder='Ulangi Password' 
                 value={confirmPassword} 
                 onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
                  <span className="input-group-text hide-password" id="addon-wrapping"><i className="fa-solid fa-eye"></i></span>
                </div>
                <p className='warn-msg'>{msgConfirmPassword}</p> 
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text role-icon" id="addon-wrapping">Role</span>
                  <input
                 type="text" 
                 className="form-control input role"  
                 value={role} 
                 onChange={(e) => setRole(e.target.value)}
                 disabled
                  />
                </div>
              </div>

              <div className="d-grid text-center mb-5">
              <button type="submit" className="btn btn-primary is-success btn-sign-up">Daftar</button>
              </div>
          </form>

          <div className="text-center">
            <p>Sudah Punya Akun? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Signup;
