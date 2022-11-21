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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100 rounded img-thumbnail"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100 rounded img-thumbnail"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Hero;