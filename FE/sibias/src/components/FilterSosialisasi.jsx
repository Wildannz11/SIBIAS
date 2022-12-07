import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardSosialisasi from './CardSosialisasi';
import Data from "./ListDataSosialisasi.json"

function FilterSosialisasi (props) {
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
                <div className="col-md-4 col-sm-6 mb-3">
                    <CardSosialisasi image={item.image} judul={item.judul} isi={item.isi} />
                </div>
            ))}
        </div>
    )
}
export default FilterSosialisasi;