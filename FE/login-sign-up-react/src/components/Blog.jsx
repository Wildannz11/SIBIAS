import React from 'react';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
// import  from '../hooks/DATA.json';
import ChatBuble from './ChatBuble';

function Blog() {
    const [name, setName] = useState('Fadilla Rahim');
    const [date, setDate] = useState('November, 20 2022');
    const [addComentValue, setAddComentValue] = useState('');
    const [contentBlog, setContentBlog] = useState('akarta, CNN Indonesia -- Penelitian data awal oleh Organisasi Kesehatan Dunia (WHO) menunjukkan Covid-19 varian Omicron lebih cepat menular ketimbang Delta dan dapat melemahkan vaksin yang ada saat ini. "Berdasarkan data yang ada saat ini, Omicron kemungkinan bakal mengalahkan varian Delta di tempat di mana terjadi penularan antar-masyarakat," demikian pernyataan WHO yang dikutip AFP, Minggu (12/12). Merujuk pada data yang dihimpun WHO, saat ini Omicron sudah menyebar di 63 negara. Mereka melihat Omicron cepat menyebar di Afrika Selatan, di mana varian Delta tak mendominasi. Namun, mereka juga mencatat penyebaran cepat Covid-19 varian Omicron di Inggris, yang kasusnya secara keseluruhan sebenarnya masih didominasi Delta. Meski demikian, WHO menegaskan bahwa data yang ada saat ini masih kurang. Mereka pun belum dapat memastikan tingkat penularan Omicron tinggi karena lebih mudah menembus respons imun atau memang lebih cepat menular. Selain itu, WHO juga menyatakan bahwa data awal menunjukkan Omicron menyebabkan "pengurangan efikasi vaksin terjadi infeksi dan penularan [Covid-19]." Terlepas dari temuan tersebut, WHO menekankan bahwa infeksi virus corona varian Omicron sejauh ini hanya menyebabkan gejala ringan. Mereka masih mengumpulkan data untuk menentukan tingkat keparahan klinis Omicron. Penelitian ini masih terus dilakukan setelah Afrika Selatan melaporkan temuan varian baru tersebut ke WHO pada 24 November lalu. Sejak saat itu, banyak pakar memang menyebut Omicron lebih cepat menular dan kemungkinan dapat melemahkan vaksin yang sudah ada saat ini. Kendati demikian, sejumlah produsen vaksin menyatakan bahwa suntikan mereka masih efektif melawan Omicron. Pfizer/BioNTech bahkan menyebut tiga dosis vaksin mereka efektif menangkal varian baru itu.');

    const[isiComent, setIsiComent] = useState('Capek banget ngerjain capstone, tugas mingguan kampus, tugas besar, proyek, laporan, presentasi, bikin web 3 macam itu harus combain ama machine learning and Decision suport System jugaa... Hadeuuhhhh Balaaa balaaa');
    
  return (
    <div>
      <div className="blog-big-container">
        <div className="card blog-inner-container">
            <div className="title-blog-container">
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
                <form action="">
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
    </div>
  )
}

export default Blog
