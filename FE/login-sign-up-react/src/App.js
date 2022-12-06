/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import Blog from './components/Blog';
import Home from "../src/routes/Home";
import Navbar from './components/Navbar';
import axios from 'axios';
import useToast from './hooks/useToast';

function App() {
  const [authUser, setAuthUser] = useState(null)
  const [showToast] = useToast();
  // const baseUrl = 'https://sibias.up.railway.app/';
  const baseUrl = 'http://localhost:3000';

  useEffect(() => {
    const fetchGetUserLogged = () => {
      axios.get(`${baseUrl}/users/me`, {
        headers: {
          mode: 'cors',
          'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/json',
          // // 'Authorization': key,
          withCredentials: true,
        }
      })
      .then(res => {
        setAuthUser(res.data);
      })
      .catch(error => {
        console.log('eror',error)
        // showToast('Silahkan Login Terlebih Dahulu', 'fail');
      })
    };
    fetchGetUserLogged();
  }, []);

  const onLoginSuccess = () => {
    axios.get(`${baseUrl}/users/me`, {
      headers: {
          mode: 'cors',
          'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/json',
          // // 'Authorization': key,
          // withCredentials: true,
        }
      })
    // axios.get(`${baseUrl}/users/me`)
    .then(res => {
      setAuthUser(res.data);
    })
    .catch(error => {
      console.log('eror',error)
      // showToast('Silahkan Login Terlebih Dahulu', 'fail');
    })
  };

  return (
    <BrowserRouter>
    {authUser === null? (
      <Routes>
        <Route path='/*' element={<Signin onLoginSuccess={onLoginSuccess} />}/>
        {/* <Route path='/login' element={<Signin onLoginSuccess={onLoginSuccess} />}/> */}
        <Route path='/users' element={<Signup/>}/>
      </Routes>
    ) : (
      <Routes>
        <Route path='*' element={<Navbar/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/profile' element={<ShowProfile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/' element={<Signin onLoginSuccess={onLoginSuccess}/>}/>
      </Routes>
    )}
    {/* <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/users' element={<Signup/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/profile' element={<ShowProfile/>}/>
      <Route path='/editProfile' element={<EditProfile/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes> */}
    </BrowserRouter>
  );
}

export default App;