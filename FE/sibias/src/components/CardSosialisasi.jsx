
import "./css/CardSosialisasi.css";
 
const CardSosialisasi = (props) => {
  return (
  <article className="list-item">
    <a href="/show_sosialisasi">
            <div className="list-thumbnail">
                <img className="lazyload list-item__thumbnail card-image" tabindex="0" crossorigin="anonymous" alt="Test" src={props.image}/>
                <p className="list-city">Sosialisasi</p>
            </div>
            <div className="list-item__content">
                <h2 className="list-item__title">{props.judul || '-'}</h2>
                <p className="list-item__description">{props.isi || '-'}...</p>
            </div>
    </a>
  </article>
  );
}
  
  export default CardSosialisasi;