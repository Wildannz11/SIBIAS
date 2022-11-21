import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import useToast from '../hooks/useToast';
import logo from '../images/logo.png';
import Input from './HidePasswordBtn';

function Signup() {
    const [showToast] = useToast();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('Masyarakat');
    const [msgUsername, setMsgUsername] = useState('');
    const [msgName, setMsgName] = useState('');
    const [msgEmail, setMsgEmail] = useState('');
    const [msgPassword, setMsgPassword] = useState('');
    const [msgConfirmPassword, setMsgConfirmPassword] = useState('');

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
          <div className="text-center mb-4 title-signup-login-container">
            <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias mb-3'/>
            <h3 className="title form-page-title">Sign Up</h3>
            <p className="subtitle">Buat Akun Baru</p>
          </div>
          <div className="text-center">
          </div>

          <form onSubmit={Register}>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>

                  <input 
                  className="form-control form-control-sm username" 
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
                  className="form-control form-control-sm name" 
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
                   className="form-control form-control-sm email" 
                   type="text" 
                   placeholder="Alamat Email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className='warn-msg'>{msgEmail}</p>
              </div>

              <div className="mb-4">
                  <Input
                  name = 'password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password min 8 Karakter"
                  value={password}
                  type="password"
                  />
                <p className='warn-msg'>{msgPassword}</p>
              </div>

              <div className="mb-4">
                  <Input
                  name = 'confirm-password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi Password"
                  value={confirmPassword}
                  type="password"
                  />
                <p className='warn-msg'>{msgConfirmPassword}</p>
              </div>

              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text role-icon" id="addon-wrapping">Role</span>
                  <input
                 type="text" 
                 className="form-control form-control-sm role"  
                 value={role} 
                 onChange={(e) => setRole(e.target.value)}
                 disabled
                  />
                </div>
              </div>

              <div className="d-grid text-center mb-4">
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
