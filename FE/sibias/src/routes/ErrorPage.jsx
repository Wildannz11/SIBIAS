import { useRouteError } from "react-router-dom";
import "../styles/App.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar/>
    <div id="error-page">
      <h1>Oh noo!</h1>
      <p>This is an Error Page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    <Footer/>
    </>
  );
}