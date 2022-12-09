import React from 'react';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
// import  from '../hooks/DATA.json';
import ChatBuble from './ChatBuble';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/blog.css';

function Blog(porps) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [addComentValue, setAddComentValue] = useState('');
    const [contentBlog, setContentBlog] = useState('');
    const[isiComent, setIsiComent] = useState('');
    
  return (
    <div>
      <Navbar/>
      <div className="blog-big-container">
        <div className="card blog-inner-container">
            <div className="title-blog-container">
                <h1>
                  {porps.id}
                </h1>
                <h1 className="title-blog font-color text-center mt-5 mb-3">Sosialisasi Kebijakan Pemerintah</h1>
            </div>
            <div className="author-blog text-center">
                <div className="text-center">
                  <img className='img-user-author' src={avatar2} />
                </div>
                <h5 className='title font-color mt-2'>{name}</h5>
                <p className="subtitle date-author-create-blog text-muted fst-italic">{date}</p>
            </div>
            <div className="content-blog mt-4">
                <p>{contentBlog}</p>
            </div>
            <div className="line"></div>
            <div className="comment-blog mt-4">
                <div className="comment-title mb-3">
                    <h3 className="title font-color">Berikan Komentar</h3>
                </div>
                <form action="" className='form-coment'>
                  
                    <div className="kotak mb-3">
                    <ul>
                      <li><label className="form-label">Komentar Anda</label></li>
                        <li><textarea 
                        className="coment-value" id="coment-value" 
                        rows="3"
                        value={addComentValue}
                        onChange={(e)=>setAddComentValue(e.target.value)}
                        ></textarea></li>
                      </ul>
                    </div>
                    <div className="add-comment-btn-container mt-3">
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

export default Blog
