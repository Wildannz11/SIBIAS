import React, { useState } from "react"
import "./css/TambahDiskusi.css"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Navbar from '../components/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import useToast from '../hooks/useToast';

function TambahDiskusi(){

    const [showToast] = useToast();
    const navigate = useNavigate();
    const [judul, setJudul] = useState('');
    const [msgJudul, setMsgJudul] = useState('');
    const baseUrl = 'http://localhost:3000';

    const addDiskusi = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!judul) {
            setMsgJudul('Judul is required'); 
        }else{
            setMsgJudul(''); 
        }

        if(isValid) {
            try {
              await axios.post(`${baseUrl}/diskusi`, {
                judul_diskusi : judul,
              });
              showToast('Selamat Diskusi Berhasil Dibuat', 'success');
              navigate("/diskusi");
            } catch (error) {
              if(error.response){
                showToast(error.response.data.msg, 'fail');
              }
            }
          }
    }

    return (
        <>
        <Navbar/>
    <div className="container">
      <div className="show-container">
        <div className="card tambah-diskusi">
            <div className="kembali">
                <Link to="/diskusi">
                <BsFillArrowLeftCircleFill size={30} color></BsFillArrowLeftCircleFill>
                </Link>
            </div>
            <div className="card-body show-profile test">
                <div className="text-center mb-4 img-head">
                    <div className="text-center">
                        Buat Diskusi Baru
                    </div>
                </div>
                <form onSubmit={addDiskusi}>
                    <div className="mb-3">
                        <label className="form-label">Judul Diskusi</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Judul Diskusi" 
                        value={judul} 
                        onChange={(e) => setJudul(e.target.value)} 
                        />
                    </div>
                    <p className='warn-msg'>{msgJudul}</p> 
                    <div className="text-center update-profile-btn-container mt-5">
                        <button type="" className="btn mb-3 btn-buat-diskusi">Buat Diskusi</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
        </>
  )
}

export default TambahDiskusi;