/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import Blog from './components/Blog';
import Home from "./routes/Home";
import Diskusi from "./routes/Diskusi";
import DetailSosialisasi from "./routes/DetailSosialisasi";
import DetailDiskusi from "./routes/DetailDiskusi";
import TambahDiskusi from "./routes/TambahDiskusi";
import Sosialisasi from "./routes/Sosialisasi";
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
        <Route path='/diskusi' element={<Diskusi/>}/>
        <Route path='/tambah_diskusi' element={<TambahDiskusi/>}/>
        <Route path='/detail_diskusi/:id' element={<DetailDiskusi/>} />
        <Route path='/sosialisasi' element={<Sosialisasi/>}/>
        <Route path='/detail_sosialisasi/:id' element={<DetailSosialisasi/>} />
        <Route path='/' element={<Signin onLoginSuccess={onLoginSuccess}/>}/>
      </Routes>
    )}
    </BrowserRouter>
  );
}

export default App;
