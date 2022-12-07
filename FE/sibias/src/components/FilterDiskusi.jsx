import React, {useState, useEffect} from 'react'
import "./css/CardDiskusi.css";
import CardDiskusi from "./CardDiskusi"
import axios from 'axios';

function FilterDiskusi(props) {

    const [dataes, setData] = useState([]);
    const baseUrl = "http://localhost:3000";
    const catchData = async (e) => {
        try {
            axios.get(`${baseUrl}/diskusii?judul_diskusi=${props.input}`)
            .then(response => {
                setData(response.data);
            })
          } catch (error) {
            return error;
        }
    }

    useEffect(() => {
    catchData()
    }, []);

    return (
        <div className='container'>
            {dataes.map((Diskusi) => (
              <CardDiskusi judul={Diskusi.judul_diskusi} creator={Diskusi.user.nama} foto={Diskusi.user.foto_url} lihat={Diskusi.jumlah_kunjungan} link={Diskusi.did} />
            ))}
        </div>
    )
}

export default FilterDiskusi