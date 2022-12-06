import React, {useEffect, useState} from 'react';
import Avatar from 'react-avatar-edit';
import swal from 'sweetalert';
import avatar from '../images/avatar.jpg';
import foto1 from '../images/foto1.jpeg';
import avatar2 from '../images/avatar2.png';
function UploadAvatar() {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  }
  const onCrop = (view) => {
    setPreview(view)
  }

  if(!preview){
    setPreview(avatar2)
  }

  const action = () => {
    const cardChoseImg = document.querySelector('.upload-img-container');
    cardChoseImg.style.display = 'block';
  }

  const reAction = () => {
    const cardChoseImg = document.querySelector('.upload-img-container');
    cardChoseImg.style.display = 'none';
    console.log(preview);
  }
  
  return (
    <div >
      <button onClick={action}>ambil gambar</button>
      <div className="upload-img-container">
      <div className="card upload-img" id='upload-img'>
        <div className="card-header ">
          <h5 className="card-title text-center">Upload Foto Profile</h5>
        </div>
        <div className="card-body text-center">
          <Avatar
          className='avatar'
          width={400}
          height={300}
          onClose= {onClose}
          onCrop= {onCrop}
          src={src}
        />
          <a href="#" className="btn btn-primary mt-5 btn-upload" onClick={reAction}>Upload</a>
        </div>
      </div>
      </div>

       <img className='img-user' src={preview} />
       
    </div>
  )
}

export default UploadAvatar
