// import { IconButton } from '@mui/material';
// import {ThumbUpAltIcon, RemoveRedEyeIcon} from '@mui/icons-material/ThumbUpAlt';
import { FontAwesomeIcon } from "@react-icons/all-files/";
import creatorPhoto from "./../image/creator.JPG";
import "./css/CardDiskusi.css";
 
const CardDiskusi = (props) => {
  return (
    <div className="classCard">
    <div className="classCard__upper">
      <div className="classCard__className">Diskusi Kebijakan Kenaikan BBM</div>
      <div className="classCard__creatorName">Cahya Diantoni</div>
      <img src={creatorPhoto} className="classCard__creatorPhoto" alt='Foto'/>
    </div>
    <div className="classCard__middle"></div>
    <div className="classCard__lower">
        {/* <IconButton>
            <svg data-testid="RemoveRedEyeIcon"></svg>
        </IconButton> */}
        <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
    </div>
  </div>
  );
}
  
  export default CardDiskusi;