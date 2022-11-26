/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';


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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
