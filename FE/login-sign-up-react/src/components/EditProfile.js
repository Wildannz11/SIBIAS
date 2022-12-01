import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from './HidePasswordBtn';
import axios from 'axios';
import useToast from '../hooks/useToast';
import moment from 'moment';
import Avatar from 'react-avatar-edit';
import avatar2 from '../images/avatar2.png';


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

  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  }
  const onCrop = (view) => {
    setPreview(view)
  }

  if(!preview){
    setPreview(avatar2)
  }

  const action = () => {
    const cardChoseImg = document.querySelector('.upload-img-container');
    cardChoseImg.style.display = 'block';
  }

  const reAction = () => {
    const cardChoseImg = document.querySelector('.upload-img-container');
    cardChoseImg.style.display = 'none';
    console.log(preview);
  }

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
            let mySQLDate = data.tgl_lahir
            let dateParse = new Date(mySQLDate).toISOString().split('T')[0];
            setTglLahir(dateParse);
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
    const number = /^[0-9]+$/;
    
    if (!username) {
      setMsgUsername('Username is required');
      isValid = false
    }else{
      setMsgUsername('');
      
    }

    if (!name) {
      setMsgName('Name is required');
      isValid = false
    }else{
      setMsgName('');
      // isValid = true
    }

    if (!email) {
      setMsgEmail('email is required');
      isValid = false 
    } else {
      if (reg.test(email) === false) {
        setMsgEmail('Please input valid email')
        isValid = false;
      } else {
        setMsgEmail('')
        
      }
    }

    
    if(phoneNumber.match(number)){
      if(phoneNumber.length < 10 || phoneNumber.length > 13){
        setMsgTelephone('Isikan Nomor Telephone yang Valid')
        isValid = false
      } else {
        setMsgTelephone('');
      }
    } else {
      setMsgTelephone('Mohon Hanya isikan angka');
      isValid = false;
    }
    
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
              tgl_lahir: tglLahir,
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
        <img className='img-user' src={preview} />
        </div>
        <div className="text-center edit-profile-btn-container mt-2">
        <Link to='/editprofile' onClick={action}><button type="" className="btn btn-primary mb-3 edit-profile-btn"> Edit Image</button></Link>
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
                      type="text" 
                      className="form-control form-control-sm" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Email Anda"
                      disabled readOnly
                      />
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
                        type="tel" 
                        className="form-control form-control-sm phone"
                        id="phone-input phone" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="Inputkan Telephone"
                        />
                        <p className='warn-msg'>{msgTelephone}</p> 
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tanggal Lahir</label>
                        <input 
                        type="date" 
                        className="form-control form-control-sm" 
                        id="birth-date"
                        formula='yyyy-MM-dd'
                        value={tglLahir}
                        onChange={(e) => setTglLahir(e.target.value)} 
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
    
                      <div className="text-center update-profile-btn-container mt-5">
                        <button type='submit' className="btn btn-primary mb-3 update-profile-btn">
                          Update
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="upload-img-container">
            <div className="card upload-img" id='upload-img'>
              <div className="card-header ">
                <h5 className="card-title text-center">Upload Foto Profile</h5>
              </div>
              <div className="card-body text-center">
                <Avatar
                className='avatar'
                width={400}
                height={300}
                onClose= {onClose}
                onCrop= {onCrop}
                src={src}
              />
                <a href="#" className="btn btn-primary mt-5 btn-upload" onClick={reAction}>Upload</a>
              </div>
            </div>
          </div>
          
        </div>
  )
}

export default EditProfile;