/* eslint-disable quote-props */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/order */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable camelcase */

/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style.css';
import * as bootstrap from 'bootstrap';
import { registForm, loginForm } from './templates/template_creators';
import * as fontawesome from '@fortawesome/fontawesome';
import App from './views/app';

const pages = {
  'login': `${loginForm}`,
  'regist': `${registForm}`,
};

const getPageContent = (page) => {
  let contentToReturn;
  switch (page) {
    case 'login':
      contentToReturn = pages.login;
      break;
    case 'regist':
      contentToReturn = pages.regist;
      break;
    default:
      contentToReturn = pages.login;
      break;
  }
  document.getElementById('login-signup-container').innerHTML = contentToReturn;
};

const loginContainer = document.querySelector('.login-container');
const registContainer = document.querySelector('.regist-container');

window.addEventListener('hashchange', () => {
  getPageContent('login');
  const signInLinkContainer = document.querySelector('.sign-in-link-container');
  const signInLink = document.querySelector('#sign-in');

  const signUpLink = document.querySelector('#registrasi-akun');
  signUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('regist');
  });

  signInLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('login');
  });
});

window.addEventListener('load', () => {
  getPageContent('login');
  const signInLinkContainer = document.querySelector('.sign-in-link-container');
  const signInLink = document.querySelector('#sign-in');
  signInLinkContainer.style.display = 'none';

  const signUpLink = document.querySelector('#registrasi-akun');
  signUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('regist');
  });

  signInLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('login');
  });
});

const btnSignIn = document.querySelector('.btn-sign-in');
btnSignIn.addEventListener('click', () => {
  console.log(document.querySelector('#input-email').value);
});





// cadangan kedua



const pages = {
    'login': `${loginForm}`,
    'regist': `${registForm}`,
  };
  
  const getPageContent = (page) => {
    let contentToReturn;
    switch (page) {
      case 'login':
        contentToReturn = pages.login;
        break;
      case 'regist':
        contentToReturn = pages.regist;
        break;
      default:
        contentToReturn = pages.login;
        break;
    }
    document.querySelector('#form').innerHTML = contentToReturn;
  };
  
  window.addEventListener('load', () => {
    getPageContent('login');
    const signInLink = document.querySelector('#sign-in-link');
    const signUpLink = document.querySelector('#sign-up-link');
  
    signUpLink.addEventListener('click', (event) => {
      event.preventDefault();
      getPageContent('regist');
    });
  
    signInLink.addEventListener('click', (event) => {
      event.preventDefault();
      getPageContent('login');
    });
  
  });
  

  //ini di pages>login
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="../public/logo.png" alt="Logo SIBIAS" title="Logo SIBIAS">
    <h5 class="card-title text-center">Hallo Sobat SIBIAS</h5>
    <p class="card-subtitle text-muted mb-5 text-center">Sign In to Continue</p>
  </div>
</div>`