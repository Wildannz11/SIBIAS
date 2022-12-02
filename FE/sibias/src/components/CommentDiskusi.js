import {FaTelegramPlane} from "react-icons/fa";
import creatorPhoto from "./../image/creator.JPG";
import "./css/CardDiskusi.css";
import { Link } from "react-router-dom";
 
const CommentDiskusi = (props) => {
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
        <FaTelegramPlane className="icon m-2" size="2rem"/>
        <input type="text" className="form-control m-2" id="name-input" placeholder="Masukan Komentar"/>
        <img src={creatorPhoto} className="foto_komen" alt='Foto'/>
    </div>
  </div>
  );
}
  
  export default CommentDiskusi;