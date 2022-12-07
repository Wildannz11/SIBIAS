import React, {useState, useEffect} from 'react'
import "./css/CardDiskusi.css";
import useToast from '../hooks/useToast';
import CardDiskusi from "./CardDiskusi"
import Data from "./ListData.json"
import axios from 'axios';

function FilterDiskusi(props) {

    const filteredData = Data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.judul.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='container'>
            {filteredData.map((item) => (
              <CardDiskusi judul={item.judul} creator={item.nama} waktu={item.waktu} deskripsi={item.keterangan} lihat={item.lihat} komentar={item.komentar}/>
            ))}
        </div>
    )
}

export default FilterDiskusi