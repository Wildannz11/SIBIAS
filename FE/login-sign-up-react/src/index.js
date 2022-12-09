import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'bulma/css/bulma.css';
import axios from 'axios';
import mainStyle from "./styles/main.css";
import responsiveStyle from "./styles/responsive.css";
import blogStyle from './styles/blog.css';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

