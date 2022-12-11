import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
import ChatBuble from '../components/ChatBuble';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import useToast from '../hooks/useToast';
import CONFIG from '../utils/Config';

function DetailDiskusi () {

    const { id } = useParams()
    const [judul, setJudul] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [foto, setFoto] = useState('');

    // Ini untuk post
    const [showToast] = useToast();
    const [chat, setChat] = useState('');
    const [msgChat, setMsgChat] = useState('');

    const [addComentValue, setAddComentValue] = useState('');
    
    const baseUrl = CONFIG.BASE_URL;

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

    const [chats, setChats] = useState([]);
    // Get Chat Diskusi
    const catchChat = async (e) => {
        try {
            axios.get(`${baseUrl}/chatdiskusi/${id}`)
            .then(response => {
                setChats(response.data);
            })
          } catch (error) {
            return error;
        }
    }

    useEffect(() => {
    catchData();
    catchChat()
    }, []);

    // Post Chat Diskusi
    const addChat = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!chat) {
            setMsgChat('Chats is required'); 
        }else{
            setMsgChat(''); 
        }

        if(isValid) {
            try {
              await axios.post(`${baseUrl}/chatdiskusi/${id}`, {
                isi_chat : chat,
              });
              catchChat();
              showToast('Selamat Chat Diskusi Anda Berhasil Masuk', 'success');
            } catch (error) {
              if(error.response){
                showToast(error.response.data.msg, 'fail');
              }
            }
          }
    }


  return (
    <div>
      <Navbar/>
      <div className="blog-big-container">
        <div className="card blog-inner-container">
            <div className="title-blog-container">
                <h1 className="title-blog font-color text-center mt-5 mb-3">Forum Diskusi <br/> {judul}</h1>
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
                <form onSubmit={addChat}>
                    <div className="mb-3">
                        <label className="form-label">Tanggapan Anda</label>
                        <textarea 
                        className="form-control coment-value" id="coment-value" 
                        rows="3"
                        onChange={(e) => setChat(e.target.value)}

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
                {chats.map((chat) => (
                <ChatBuble
                name={chat.user.nama}
                date={chat.createdAt}
                valueComent={chat.isi_chat}
                imageUser={chat.user.foto_url}
                />
              ))}
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default DetailDiskusi;