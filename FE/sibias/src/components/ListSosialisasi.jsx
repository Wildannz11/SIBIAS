import { React } from 'react'
import data from "./ListDataSosialisasi.json"
import "./css/CardSosialisasi.css";
import CardSosialisasi from './CardSosialisasi';

function ListSosialisasi(props) {
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
              <CardSosialisasi image="./../images/Kebijakan/1.jpg" judul={item.judul} isi={item.isi}/>
            ))}
        </div>
    )
}

export default ListSosialisasi