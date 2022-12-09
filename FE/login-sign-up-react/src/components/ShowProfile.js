import React, {Component, useEffect} from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import useToast from '../hooks/useToast';
import avatar2 from '../images/avatar2.png';
import Navbar from './Navbar';
import CONFIG from '../utils/Config';


export default function ShowProfile() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [imageUser, setImageUser] = useState();
  const navigate = useNavigate();
  const [showToast] = useToast();
  const baseUrl = CONFIG.BASE_URL;
  // const baseUrl = 'https://sibias.up.railway.app';


  const catchData = async (e) => {

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
            const dataImage = data.foto_url;
            if(!dataImage){
              setImageUser(avatar2);
            } else{
              setImageUser(dataImage);
            }
            
          })
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

  useEffect(() => {
    catchData()
    }, []);

  const logout = async(e) => {
    e.preventDefault();
    try {
      await axios.delete(`${baseUrl}/logout`)
      .then(response => {
        const pesan = response.data.msg
        showToast(pesan, 'success');
      })
      navigate('/');
    } catch (error) {
      if(error.response){
        showToast(error.response.data.msg, 'fail');
      }
    }
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
                <Link to='/editprofile'><button type="" className="btn btn-primary mb-3 edit-profile-btn"> Edit Profil</button></Link>
                </div>
            </div>

            <form>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input 
                    type="text" 
                    className="form-control data-profile" 
                    id="name" 
                    // placeholder="Fadilla Rahim"
                    value= {name} 
                    disabled readOnly
                  />
                </div>
            
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input 
                  type="text" 
                  className="form-control data-profile" 
                  id="username" 
                  // placeholder="fadillarahim07" 
                  value={username}
                  disabled readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                  type="email" 
                  className="form-control data-profile" 
                  id="email" 
                  // placeholder="fadillarahim07@gmail.com" 
                  value={email}
                  disabled readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Alamat</label>
                  <input 
                  type="text" 
                  className="form-control data-profile" 
                  id="address" 
                  placeholder="Alamat Belum Di inputkan"
                  value={address} 
                  disabled readOnly/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Nomor Telephone</label>
                  <input 
                  type="text" 
                  className="form-control data-profile" 
                  id="telephone" 
                  placeholder="telephone Belum Di inputkan" 
                  value={phoneNumber}
                  disabled readOnly/>
                </div>
            
                <div className="text-center sign-out-btn-container mt-5">
                  <button type="" className="btn btn-primary mb-3 sign-out-btn" onClick={logout}>Sign Out</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
