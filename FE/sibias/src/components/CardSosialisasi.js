import {Card, Button} from 'react-bootstrap';
import "./css/CardSosialisasi.css";
 
const CardSosialisasi = (props) => {
  return (
  <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.judul}</Card.Title>
      <Card.Text>
        {props.isi}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}
  
  export default CardSosialisasi;