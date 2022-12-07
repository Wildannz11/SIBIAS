import Hero from "../components/Hero"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListSosialisasi from "../components/ListSosialisasi"
import ListDiskusi from "../components/ListDiskusi"

function Home() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Sosialisasi Kebijakan</h1>
            </div>
          </div>
          <div className="row">
            <ListSosialisasi/>
          </div>
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Diskusi Kebijakan</h1>
            </div>
          </div>
            <ListDiskusi/>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;