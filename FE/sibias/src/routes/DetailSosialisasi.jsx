import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
import ChatBuble from '../components/ChatBuble';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import useToast from '../hooks/useToast';

function DetailSosialisasi () {
    const { id } = useParams()
    const [judul, setJudul] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [foto, setFoto] = useState('');
    // Ini untuk post
    const [showToast] = useToast();
    const [komentar, setKomentar] = useState('');
    const [msgKomentar, setMsgKomentar] = useState('');

    const [fotoContent, setFotoKebijakan] = useState('');
    const [addComentValue, setAddComentValue] = useState('');
    const [contentBlog, setContentBlog] = useState('');
    const baseUrl = "http://localhost:3000";

    const[isiComent, setIsiComent] = useState('Capek banget ngerjain capstone, tugas mingguan kampus, tugas besar, proyek, laporan, presentasi, bikin web 3 macam itu harus combain ama machine learning and Decision suport System jugaa... Hadeuuhhhh Balaaa balaaa');
    const catchData = async (e) => {
        try {
            axios.get(`${baseUrl}/kebijakan/${id}`)
            .then(response => {
                const Data = response.data;
                setName(Data.user.nama);
                setJudul(Data.judul_kebijakan);
                setDate(Data.createdAt);
                setFoto(Data.user.foto_url);
                setFotoKebijakan(Data.foto_url);
                setContentBlog(Data.isi_kebijakan);
            })
          } catch (error) {
            return error;
        }
    }

    // Post Komentar
    const addKomentar = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!komentar) {
            setMsgKomentar('Comment is required'); 
        }else{
            setMsgKomentar(''); 
        }

        if(isValid) {
            try {
              await axios.post(`${baseUrl}/commentkebijakan/${id}`, {
                isi_comment : komentar,
              });
              showToast('Selamat Komentar Berhasil Ditambahkan', 'success');
            } catch (error) {
              if(error.response){
                showToast(error.response.data.msg, 'fail');
              }
            }
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
                <h1 className="title-blog font-color text-center mt-5 mb-3">Sosialisasi Kebijakan <br/> {judul}</h1>
            </div>
            <div className="author-blog text-center">
                <div className="text-center">
                  <img src={foto} className="img-user-author" />
                </div>
                <h5 className='title font-color mt-2'>{name}</h5>
                <p className="subtitle date-author-create-blog text-muted fst-italic">{date}</p>
            </div>
            <div className="content-blog mt-4">
                {/* <div className="text-center">
                    <img src={fotoContent} />
                </div> */}
                <p>{contentBlog}</p>
            </div>
            <div className="line"></div>
            <div className="comment-blog mt-4">
                <div className="comment-title mb-3">
                    <h3 className="title font-color">Berikan Komentar</h3>
                </div>
                <form onSubmit={addKomentar}>
                    <div className="mb-3">
                        <label className="form-label">Komentar Anda</label>
                        <textarea 
                        className="form-control coment-value" id="coment-value" 
                        rows="3"
                        onChange={(e) => setKomentar(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="add-comment-btn-container mt-5">
                        <button 
                        type="" 
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
                valueComent={contentBlog}
                imageUser={avatar2}
                />
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default DetailSosialisasi;