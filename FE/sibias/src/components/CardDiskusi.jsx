import {FaEye} from "react-icons/fa";
import {FaCommentDots} from "react-icons/fa";
import creatorPhoto from "./../images/creator.JPG";
import "./css/CardDiskusi.css";
import { Link } from "react-router-dom";
 
const CardDiskusi = (props) => {
  return (
  <div className="classCard">
    <Link to="/show_diskusi" className="Link">
    <div className="classCard__upper">
      <div className="classCard__className">{props.judul}</div>
      <div className="classCard__creatorName">{props.creator} - {props.waktu} WIB</div>
      <img src={creatorPhoto} className="classCard__creatorPhoto" alt='Foto'/>
    </div>
    </Link>
    <div className="classCard__middle"> <div className="deskripsi">{props.deskripsi}</div></div>
    <div className="classCard__lower">
      <div className="m-2">
        <FaCommentDots size="1.5rem" className="icon"/> {props.komentar} 
      </div>
      <div className="m-2">
        <FaEye size="1.5rem" className="icon"/> {props.lihat}
      </div>

    </div>
  </div>
  );
}
  
  export default CardDiskusi;