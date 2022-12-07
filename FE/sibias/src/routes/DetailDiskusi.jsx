import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
import ChatBuble from '../components/ChatBuble';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function DetailDiskusi () {
    const { id } = useParams()
    const [judul, setJudul] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [foto, setFoto] = useState('');
    const [addComentValue, setAddComentValue] = useState('');
    const baseUrl = "http://localhost:3000";

    const[isiComent, setIsiComent] = useState('Capek banget ngerjain capstone, tugas mingguan kampus, tugas besar, proyek, laporan, presentasi, bikin web 3 macam itu harus combain ama machine learning and Decision suport System jugaa... Hadeuuhhhh Balaaa balaaa');
    const catchData = async (e) => {
        try {
            axios.get(`${baseUrl}/diskusi/${id}`)
            .then(response => {
                const Data = response.data;
                setName(Data.user.nama);
                setJudul(Data.judul_diskusi);
                setDate(Data.createdAt);
                setFoto(Data.user.foto_url);
            })
          } catch (error) {
            return error;
        }
    }

    useEffect(() => {
    catchData()
    }, []);

  return (
    <div>
      <Navbar/>
      <div className="blog-big-container">
        <div className="card blog-inner-container">
            <div className="title-blog-container">
                <h1 className="title-blog font-color text-center mt-5 mb-3">{judul}</h1>
            </div>
            <div className="author-blog text-center">
                <div className="text-center">
                  <img src={foto} className="img-user-author" />
                </div>
                <h5 className='title font-color mt-2'>{name}</h5>
                <p className="subtitle date-author-create-blog text-muted fst-italic">{date}</p>
            </div>
            <div className="content-blog mt-4">
                <p>Diskusi ini dibuat untuk membahas tentang beberapa Kebijakan Pemerintah dalam mengatasi beberapa isu di Masyarakat atau membahas Kebijakan yang masih belum dimengerti oleh masyarakat</p>
            </div>
            <div className="line"></div>
            <div className="comment-blog mt-4">
                <div className="comment-title mb-3">
                    <h3 className="title font-color">Tanggapan Diskusi</h3>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label className="form-label">Tanggapan Anda</label>
                        <textarea 
                        className="form-control coment-value" id="coment-value" 
                        rows="3"
                        value={addComentValue}
                        onChange={(e)=>setAddComentValue(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3 add-comentar-container">
                        <label className="form-label">Tags</label>
                        <input 
                        type="text" 
                        className="form-control tags-coment" id="tags-coment" 
                        placeholder="#RecoverTogether"/>
                    </div>
                    <div className="add-comment-btn-container mt-5">
                        <button 
                        type='submit' 
                        className="btn btn-primary mb-3 update-profile-btn">
                          Post
                        </button>
                    </div>
                </form>
            </div>
            <div className="line"></div>
            <div className="discussion-container">
                <ChatBuble
                name={name}
                date={date}
                valueComent={isiComent}
                imageUser={avatar2}
                />
                <ChatBuble
                name={name}
                date={date}
                valueComent={isiComent}
                imageUser={avatar2}
                />
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default DetailDiskusi;