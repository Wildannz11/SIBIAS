import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from './HidePasswordBtn';
import axios from 'axios';
import useToast from '../hooks/useToast';
import moment from 'moment';


function EditProfile() {
  const [showToast] = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tglLahir, setTglLahir] = useState('');
  const [pendidikan, setPendidikan] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msgUsername, setMsgUsername] = useState('');
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [msgConfirmPassword, setMsgConfirmPassword] = useState('');
  const [msgTelephone, setMsgTelephone] = useState('');

  const catchData = async () => {
    try {
      await axios.get('http://localhost:5000/users/me')
      .then(response => {
        const Uid = response.data.uid;
        try {
          axios.get(`http://localhost:5000/users/rakyat/${Uid}`)
          .then(response => {
            const data = response.data;
            setName(data.nama);
            setUsername(data.username);
            setEmail(data.email);
            setAddress(data.alamat);
            setPhoneNumber(data.no_hp);
            // setPassword(data.password);
            setPendidikan(data.pendidikan);
            // setTglLahir(moment(data.tgl_lahir, 'dd-----yyyy'));
            // selanjutnya lanjutin ini
          })
        } catch (error) {
          if(error.response){
            console.log(error.response.data.msg);
          }
        }
      })
    } catch (error) {
      if(error.response){
        console.log(error.response.data.msg);
      }
    }
  }
  
  useEffect(() => {
    catchData()
    }, []);

  const editData = async (e) => {
    e.preventDefault();

    let isValid = true;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    const number = /^[0-9]$/;
    // var regExp = /^(\([0-9]{3}\)\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/

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

    // if(phoneNumber.match(number)){
    //   setMsgTelephone('');
      
    // } else {
    //   setMsgTelephone("Isikan Nomor Telephone yang Valid");
    //   isValid = false;
    // }

    // if(phoneNumber.length < 10 || phoneNumber.length > 13){
    //   setMsgTelephone('Isikan Nomor Telephone yang Valid')
    //   isValid = false
    // } else {
    //   setMsgTelephone('');
    // }
    
    // if(!password){
    //   setMsgPassword('password required');
    //     isValid = false;
    // } else {
    //   if (password.length <= 8) {
    //     setMsgPassword('password must more than 8 character');
    //     isValid = false;
    //   } else {
    //     setMsgPassword('');
        
    //   }
    // }
    
    // if(!confirmPassword){
    //   setMsgConfirmPassword('Confirm Password required');
    //     isValid = false;
    // } else {
    //   if (confirmPassword.length <= 8) {
    //     setMsgConfirmPassword('password must more than 8 character');
    //     isValid = false;
    //   } else {
    //     setMsgConfirmPassword('');
        
    //   }
    // }
    
    if(isValid){
      try {
        await axios.get('http://localhost:5000/users/me')
        .then(response => {
          const Uid = response.data.uid;
          try {
            axios.patch(`http://localhost:5000/users/${Uid}`, {
              username: username,
              nama: name,
              email: email,
              password: '',
              confirm_password: '',
              alamat: address,
              no_hp: phoneNumber,
              tgl_lahir: '2002-11-9',//moment(tglLahir, "yyyy-mm-dd"),
              pendidikan: pendidikan
            })
            showToast('Selamat Data Anda Berhasil di Update', 'success');
            navigate('/profile');
          } catch (error) {
            if(error.response){
              showToast(error.response.data.msg, 'fail');
            }
          }
        })
      } catch (error) {
        if(error.response){
          showToast(error.response.data.msg, 'fail');
        }
      }
    }

  }


  return (
    <div className="profile-container">
      <div className="show-profile-container">
    <div className="card ini-dia">
  <div className="card-body show-profile">
  <div className="text-center mb-4 img-head-container">
        <div className="text-center">
          <img src="" className="rounded" alt="..."/>
        </div>
        <div className="text-center edit-profile-btn-container mt-5">
        <Link to='/editprofile'><button type="" className="btn btn-primary mb-3 edit-profile-btn"> Edit Profil</button></Link>
        </div>
    </div>
                <form onSubmit={editData}>
                    <div className="mb-3">
                      <label className="form-label">Nama</label>
                      <input 
                      type="text" 
                      className="form-control form-control-sm" 
                      id="name-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Nama Anda"/>
                      <p className='warn-msg'>{msgName}</p> 
                    </div>
    
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input 
                      type="text" 
                      className="form-control form-control-sm" 
                      id="username-input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} 
                      placeholder="Username Anda"/>
                      <div>
                      <p className='warn-msg'>{msgUsername}</p> 
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                      type="email" 
                      className="form-control form-control-sm" 
                      id="email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Email Anda"/>
                      <p className='warn-msg'>{msgEmail}</p> 
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Alamat</label>
                        <input 
                        type="text" 
                        className="form-control form-control-sm" 
                        id="address-input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="inputkan Alamat"/>
                    </div>
                    
                      <div className="mb-3">
                        <label className="form-label">Nomor Telephone</label>
                        <input 
                        type="text" 
                        className="form-control form-control-sm" 
                        id="telephone-input"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="Inputkan Telephone"/>
                        <p className='warn-msg'>{msgTelephone}</p> 
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tanggal Lahir</label>
                        <input 
                        type="date" 
                        className="form-control form-control-sm" 
                        id="birth-date"
                        formula='yyyy-MM-dd'
                        // value={tglLahir}
                        // onChange={(e) => setTglLahir(e.target.value)} 
                        placeholder="mm/dd/yyyy"/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Pendidikan</label>
                        <input 
                        type="text" 
                        className="form-control form-control-sm" 
                        id="Pendidikan-input"
                        value={pendidikan}
                        onChange={(e) => setPendidikan(e.target.value)} 
                        placeholder="Jenjang Pendidikan"/>
                      </div>

                      {/* <div className="mb-3">
                      <label className="form-label">Password</label>
                        <Input
                        name = 'password'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password min 8 Karakter"
                        value={password}
                        type="password"
                        />
                      <p className='warn-msg'>{msgPassword}</p>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Konfirmasi Password</label>
                        <Input
                          name = 'confirm-password'
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Ulangi Password"
                          value={confirmPassword}
                          type="password"
                          />
                        <p className='warn-msg'>{msgConfirmPassword}</p>
                      </div> */}
    
                    <div className="text-center update-profile-btn-container mt-5">
                        <button type='submit' className="btn btn-primary mb-3 update-profile-btn">
                          Update
                        </button>
                    </div>
                </form>
  </div>
</div>
</div>
</div>
  )
}

export default EditProfile;