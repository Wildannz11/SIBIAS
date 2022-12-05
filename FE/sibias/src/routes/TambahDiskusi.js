import react from "react"
import "./css/TambahDiskusi.css"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function TambahDiskusi(){
    return (
    <div className="container">
      <div className="show-profile-container">
        <div className="card ini-dia">
            <div className="kembali">
                <Link to="/diskusi">
                <BsFillArrowLeftCircleFill size={30} color></BsFillArrowLeftCircleFill>
                </Link>
            </div>
            <div className="card-body show-profile">
                <div className="text-center mb-4 img-head-container">
                    <div className="text-center">
                        Buat Diskusi Baru
                    </div>
                </div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Judul Diskusi</label>
                            <input type="text" className="form-control" id="name-input" placeholder="Nama Anda"/>
                        </div>
        
                        <div className="mb-3">
                            <label className="form-label">Keterangan</label>
                            <textarea type="text" className="form-control" id="keterangan"></textarea>
                        </div>
                        <div className="text-center update-profile-btn-container mt-5">
                            <button type="" className="btn mb-3 update-profile-btn">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TambahDiskusi;