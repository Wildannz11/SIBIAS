/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import Blog from './components/Blog';
import Home from "./routes/Home";
import Diskusi from "./routes/Diskusi";
import ShowDiskusi from "./routes/ShowDiskusi";
import TambahDiskusi from "./routes/TambahDiskusi";
import Sosialisasi from "./routes/Sosialisasi";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/' element={<Signin/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/users' element={<Signup/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/diskusi' element={<Diskusi/>}/>
      <Route path='/show_diskusi' element={<ShowDiskusi/>}/>
      <Route path='/tambah_diskusi' element={<TambahDiskusi/>}/>
      <Route path='/profile' element={<ShowProfile/>}/>
      <Route path='/editProfile' element={<EditProfile/>}/>
      <Route path='/sosialisasi' element={<Sosialisasi/>}/>
      <Route path='/show_sosialisasi' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
