import React from 'react';
import Navbar from './Navbar';
import ShowProfile from './ShowProfile';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useToast from '../hooks/useToast';
import UploadAvatar from './UploadAvatar';


function Dashboard() {
  const navigate = useNavigate();
  const [showToast] = useToast();
  const validate = async (e) => {
    e.preventDefault();

    try {
      await axios.get('http://localhost:5000/users/me')
      .then(response => {
        const Uid = response.data.uid;
        try {
          axios.get(`http://localhost:5000/users/rakyat/${Uid}`)
          .then(response => {
            const data = response.data;
            console.log(data);
          })
        } catch (error) {
          if(error.response){
            console.log(error.response.data.msg, 'fail');
          }
        }
      })
      navigate('/profile');
    } catch (error) {
      if(error.response){
        console.log(error.response.data, 'fail');
      }
    }
  }

  const logout = async(e) => {
    e.preventDefault();
    try {
      await axios.delete('http://localhost:5000/logout')
      .then(response => {
        const pesan = response.data.msg
        showToast(pesan, 'success');
      })
      navigate('/login');
    } catch (error) {
      if(error.response){
        showToast(error.response.data.msg, 'fail');
      }
    }
  }
  return (
    <div className='box is-centered'>
    <Navbar/>
      <button className="btn btn-primary" onClick={validate}>PROFILE</button>
      <button className='btn btn-primary' onClick={logout}>LOGOUT</button>
      <Link to={'/blog'}><button className="btn btn-primary">BLOG</button></Link>
    <UploadAvatar/>
    
    </div>
  )
}

export default Dashboard
