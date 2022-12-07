import Hero from "../components/Hero"
import CardSosialisasi from "../components/CardSosialisasi"
import CardDiskusi from "../components/CardDiskusi"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListSosialisasi from "../components/ListSosialisasi"

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
          <div className="row" >
            <div className="col-12">
              <CardDiskusi judul="Diskusi Kebijakan Kenaikan BBM" creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>
            </div>
          </div>
          <div className="row">
          <div className="col-12">
              <CardDiskusi judul="Diskusi Kebijakan Kenaikan BBM" creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CardDiskusi judul="Diskusi Kebijakan Kenaikan BBM" creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;