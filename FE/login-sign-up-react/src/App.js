/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import mainStyle from "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/regist' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
