/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ login, signUp, content }) {
    this._login = login;
    this._signUp = signUp;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    const signUpLinkContainer = document.querySelector('.sign-up-link-container');
    const signInLinkContainer = document.querySelector('.sign-in-link-container');
    const btnSignUp = document.querySelector('.btn-sign-up');
    const btnSignIn = document.querySelector('.btn-sign-in');
    console.log(url);
    if (url === '/sign-up') {
      btnSignUp.style.display = 'block';
      btnSignIn.style.display = 'none';
      signInLinkContainer.style.display = 'block';
      signUpLinkContainer.style.display = 'none';
    } else if (url === '/login' || url === '/') {
      btnSignIn.style.display = 'block';
      btnSignUp.style.display = 'none';
      signUpLinkContainer.style.display = 'block';
      signInLinkContainer.style.display = 'none';
    }
    await page.afterRender();
  }
}

export default App;
