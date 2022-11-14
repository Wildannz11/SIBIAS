/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    document.querySelector('#login-signup-container').innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
