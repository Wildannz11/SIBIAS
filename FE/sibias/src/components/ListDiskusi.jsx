import React, {useState} from 'react';
import axios from 'axios';
import CardDiskusi from './CardDiskusi';
import { DataUsageRounded } from '@mui/icons-material';

export default class ListDiskusi extends React.Component {
  state = {
    Diskusies: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/diskusi`)
      .then(res => {
        const Diskusies = res.data;
        this.setState({ Diskusies });
      })
  }
  
  getImage(id){
    axios.get(`http://localhost:3000/users/rakyat/${id}`)
      .then(res => {
        const foto = res.foto_url;
        return foto;
      })
  }
  
  getNama(id){
    axios.get(`http://localhost:3000/users/rakyat/${id}`)
      .then(res => {
        const nama = res.nama;
        console.log(nama);
      })
  }

  render() {
    return (
      <>
        {
          this.state.Diskusies
          .map(Diskusi =>
              <div className="row">
                <div className="col-12">
                  <CardDiskusi judul={Diskusi.judul_diskusi} creator={this.getNama(Diskusi.userId)} foto={this.getImage(Diskusi.userId)} lihat={Diskusi.jumlah_kunjungan}/>
                </div>
              </div>
            )
        }
        </>
    )
  }
}