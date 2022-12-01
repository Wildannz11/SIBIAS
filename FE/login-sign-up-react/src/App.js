/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/users' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<ShowProfile/>}/>
      <Route path='/editProfile' element={<EditProfile/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
