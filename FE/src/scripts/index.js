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

window.addEventListener('load', () => {
  getPageContent('login');

  const signUpLink = document.querySelector('#registrasi-akun');
  signUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('regist');
  });

  const signInLink = document.querySelector('#sign-in');
  signInLink.addEventListener('click', (event) => {
    event.preventDefault();
    getPageContent('login');
  });
});
