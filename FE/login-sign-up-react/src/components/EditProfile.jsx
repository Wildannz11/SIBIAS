import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from './HidePasswordBtn';
import axios from 'axios';
import useToast from '../hooks/useToast';
import moment from 'moment';
import Avatar from 'react-avatar-edit';
import avatar2 from '../images/avatar2.png';
import FormData from 'form-data';
import Navbar from './Navbar';
import CONFIG from '../utils/Config';
import '../styles/main.css'


export default function EditProfile() {
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
  const [imageUser, setImageUser] = useState();
  const [msgUsername, setMsgUsername] = useState('');
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [msgConfirmPassword, setMsgConfirmPassword] = useState('');
  const [msgTelephone, setMsgTelephone] = useState('');
  // const baseUrl = 'http://localhost:3000';
  const baseUrl = CONFIG.BASE_URL;
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
    var gambar = new Image();
    gambar.src = preview;
    console.log(gambar);
  }

  const catchData = async () => {
    try {
      await axios.get(`${baseUrl}/users/me`)
      .then(response => {
        const Uid = response.data.uid;
        try {
          axios.get(`${baseUrl}/users/rakyat/${Uid}`)
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
            const dataImage = data.foto_url;
            if(dataImage === null){
              setImageUser(avatar2);
            } else{
              setImageUser(dataImage);
            }
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

    if(phoneNumber){
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
    }
    
    
    if(isValid){
      try {
        await axios.get(`${baseUrl}/users/me`)
        .then(response => {
          const Uid = response.data.uid;
          try {
            axios.patch(`${baseUrl}/users/${Uid}`, {
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

  const [image, setImages] = useState('') //untuk API
  const onUpload = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('foto', image);

    axios.get(`${baseUrl}/users/me`)
    .then(response => {
      const Uid = response.data.uid;
      axios.patch(`${baseUrl}/images/users/${Uid}`, data, {
          headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data boundary=${data._boundary}`,
          }
      })
      .then(response => {
        axios.get(`${baseUrl}/users/rakyat/${Uid}`)
        .then(response => {
          const data = response.data;
            const dataImage = data.foto_url;
            if(!dataImage){
              setImageUser(avatar2);
            } else{
              setImageUser(dataImage);
            }
            showToast('Foto Profile Berhasil diperbaharui', 'success');
          console.log('response', response)
          const cardChoseImg = document.querySelector('.upload-img-container');
          cardChoseImg.style.display = 'none';
        })
        .catch(error => {
          console.log('eror', error)
        })
      })
      .catch(error => {
        console.log('eror', error)
      })
    })
    .catch(error => {
      console.log('eror', error)
    })
    
}


  return (
    <div>
      <Navbar/>
      <div className="profile-container">
      <div className="show-profile-container">
    <div className="card ini-dia">
  <div className="card-body show-profile">
  <div className="text-center mb-4 img-head-container">
        <div className="text-center">
        <img className='img-user' src={imageUser} alt='foto user'/>
        </div>
        <div className="text-center edit-profile-btn-container mt-2">
        <Link to='/editprofile' onClick={action}><button type="" className="btn btn-primary mb-3 edit-profile-btn"> Edit Image</button></Link>
        </div>
    </div>
                <form onSubmit={editData} className='form-profile'>
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
                        <button type='submit' className="btn btn-primary mb-3 me-5 cancel-update-profile-btn" onClick={() =>  navigate('/profile')}>
                            Cancel
                        </button>

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
              <div className="card-header">
                <p className="text-center text-upload-foto-profile">Upload Foto Profile</p>
              </div>
              <div className="card-body text-center upload-image-container">
                <form onSubmit={onUpload}>
                  <label className="form-label label-input-img mb-3">Inputkan Foto Profile Anda</label>
                  <input className="form-control form-control-sm upload-image" id="formFileSm" type="file" onChange={(e) => setImages(e.target.files[0])}/>

                    <button type='submit' className="btn btn-primary mb-3 btn-upload mt-5">
                        Upload
                    </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  )
}