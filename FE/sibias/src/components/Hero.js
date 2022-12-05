import {Carousel} from 'react-bootstrap';
import "./css/Hero.css";
import hero1 from './../image/Carousel/1.jpg'
import hero2 from './../image/Carousel/2.jpeg'
import hero3 from './../image/Carousel/3.jpeg'

const Hero = () => {
  return (
    <>
    <div className='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-flex w-100 rounded img-thumbnail"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kebijakan KTT G20</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100 rounded img-thumbnail"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Persemian Kebijakan</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100 rounded img-thumbnail"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kebijakan Perekonomian</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Hero;