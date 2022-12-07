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
            <div className='row'>
            {filteredData.map((item) => (
            
            <div className="col-md-4 col-sm-6 mb-3 mt-3">
              <CardSosialisasi image={item.image} judul={item.judul} isi={item.isi}/>
            </div>
            ))}
            </div>
        </div>
    )
}

export default ListSosialisasi