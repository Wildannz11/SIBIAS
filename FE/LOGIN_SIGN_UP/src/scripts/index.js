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
import responsiveStyle from '../styles/responsive.css';
import App from './views/app';

const app = new App({
  login: document.querySelector('#sign-in-link'),
  signUp: document.querySelector('#sign-up-link'),
  content: document.querySelector('#body-container'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
