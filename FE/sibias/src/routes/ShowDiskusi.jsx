import React from "react"
import "./css/ShowDiskusi.css"
import 'semantic-ui-css/semantic.min.css'
import CommentDiskusi from "../components/CommentDiskusi";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ShowDiskusi(){
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="main text-center">
                <h1>Detail Diskusi</h1>
            </div>
            <div className="comment_diskusi">

            </div>
                <CommentDiskusi judul="Diskusi Kebijakan Kenaikan BBM" creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>
            
        </div>
        <Footer/>
        </>
  )
}

export default ShowDiskusi;