import React from 'react';
import Navbar from './Navbar';
import ShowProfile from './ShowProfile';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Dashboard() {
  const navigate = useNavigate();
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
        console.log(error.response.data.msg, 'fail');
      }
    }
  }
  return (
    <div className='box is-centered'>
    <Navbar/>
      <button className="btn btn-primary" onClick={validate}>PROFILE</button>
    </div>
  )
}

export default Dashboard
