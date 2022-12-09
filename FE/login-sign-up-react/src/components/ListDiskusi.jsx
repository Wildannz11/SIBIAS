import React from 'react';
import axios from 'axios';
import CardDiskusi from './CardDiskusi';
import CONFIG from '../utils/Config';

export default class ListDiskusi extends React.Component {
  
  state = {
    Diskusies: [],
  }

  componentDidMount() {
    const baseUrl = CONFIG.BASE_URL;
    axios.get(`${baseUrl}/diskusi`)
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
                  <CardDiskusi judul={Diskusi.judul_diskusi} creator={Diskusi.user.nama} foto={Diskusi.user.foto_url} lihat={Diskusi.jumlah_kunjungan} link={Diskusi.did} />
                </div>
              </div>
            )
        }
        </>
    )
  }
}