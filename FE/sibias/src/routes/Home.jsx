import Hero from "../components/Hero"
import CardSosialisasi from "../components/CardSosialisasi"
import CardDiskusi from "../components/CardDiskusi"
import sos1 from "./../images/Kebijakan/1.jpg"
import sos2 from "./../images/Kebijakan/2.jpeg"
import sos3 from "./../images/Kebijakan/3.jpg"
import Navbar from '../components/Navbar';

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
            <div className="col-md-4 col-sm-6 mb-3">
              <CardSosialisasi image={sos1} judul="KTT G20" isi="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."/>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <CardSosialisasi image={sos2} judul="Kampus Merdeka" isi="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs." />
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <CardSosialisasi image={sos3} judul="Ekonomi Kreatif" isi="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs." />
            </div>
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
      </div>
    );
  }
  
  export default Home;