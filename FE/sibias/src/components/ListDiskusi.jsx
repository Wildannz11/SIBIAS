import React from 'react';
import axios from 'axios';
import CardDiskusi from './CardDiskusi';

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

  render() {
    return (
      <>
        {
          this.state.Diskusies
          .map(Diskusi =>
              <div className="row">
                <div className="col-12">
                  <CardDiskusi judul={Diskusi.judul_diskusi} creator={Diskusi.user.nama} foto={Diskusi.user.foto_url} lihat={Diskusi.jumlah_kunjungan}/>
                </div>
              </div>
            )
        }
        </>
    )
  }
}