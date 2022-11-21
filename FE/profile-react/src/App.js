
import ShowProfile from "./components/show-profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProfile from "./components/Edit-profile";
import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<ShowProfile/>}/>
      <Route path='/' element={<Profile/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
