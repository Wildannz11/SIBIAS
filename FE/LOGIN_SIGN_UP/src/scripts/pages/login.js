import { registForm, loginForm } from '../templates/template_creators';

const login = {
  async render() {
    return loginForm;
  },

  afterRender() {
    const btnSignIn = document.querySelector('.btn-sign-in');
    btnSignIn.addEventListener('click', () => {
      console.log(document.querySelector('#input-email').value);
    });
  },
};

export default login;
