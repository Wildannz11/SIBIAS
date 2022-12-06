import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import avatar2 from '../images/avatar2.png';
// import  from '../hooks/DATA.json';
import ChatBuble from './ChatBuble';
import useToast from '../hooks/useToast';

function Blog() {
    const [name, setName] = useState('Fadilla Rahim');
    const [date, setDate] = useState('November, 20 2022');
    const [addComentValue, setAddComentValue] = useState('');
    const [tags, setTags] = useState('');
    const baseUrl = 'http://localhost:3000';
    const idKebijakan = 'e375a49c-f5cb-4164-8148-40b44e78ab8c';
    const [contentBlog, setContentBlog] = useState('');
    const [titleKebijakan, setTitleKebijakan] = useState('')
    const[isiComent, setIsiComent] = useState('jahsgfdyfsedfrs');
    const [showToast] = useToast();
    
    const getUserLogged = () => {
      axios.get(`${baseUrl}/users/me`)
      .then(response => {
        const Uid = response.data.uid
        return Uid;
      })
      .catch(error => {
        console.log(error.response.data.msg)
      })
    }

    const addComment = (e) => {
      e.preventDefault();

      axios.get(`${baseUrl}/users/me`)
      .then(response => {
        const Uid = response.data.uid
        axios.post(`${baseUrl}/commentkebijakan/${idKebijakan}`, {
          isi_comment: addComentValue
        })
        .then(response => {
          showToast(response.data.msg, 'success')
          setAddComentValue('');
        })
        .catch(error => {
          console.log('error', error)
        })
      })
      .catch(error => {
        console.log(error.response.data.msg)
      })
    }

    const catchKebijakan = () => {
      axios.get(`${baseUrl}/kebijakan/${idKebijakan}`)
      .then(response => {
        const data = response.data
        setContentBlog(data.isi_kebijakan)
        setTitleKebijakan(data.judul_kebijakan)
      })
      .catch(error => {
        console.log(error.response.data.msg)
      })
    }

    useEffect(() => {
      catchKebijakan();
      
      console.log();
      }, []);
  return (
    <div>
      <div className="blog-big-container">
        <div className="card blog-inner-container">
            <div className="title-blog-container">
                <h1 className="title-blog font-color text-center mt-5 mb-3">{titleKebijakan}</h1>
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
                <form onSubmit={addComment}>
                    <div className="mb-3">
                        <label className="form-label">Komentar Anda</label>
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
                        className="form-control tags-coment" 
                        id="tags-coment" 
                        placeholder="#RecoverTogether"
                        value={tags}
                        onChange={(e)=>setTags(e.target.value)}/>
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
                valueComent={contentBlog}
                imageUser={avatar2}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
