import { React } from 'react'
import data from "./ListData.json"
import "./css/CardDiskusi.css";
import CardDiskusi from "./CardDiskusi"

function List(props) {
    const filteredData = data.filter((el) => {
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

export default List