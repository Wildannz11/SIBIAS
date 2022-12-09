import React from 'react';
import axios from 'axios';
import CardSosialisasi from './CardSosialisasi';
import CONFIG from '../utils/Config';

export default class ListSosialisasi extends React.Component {
  state = {
    Kebijakans: []
  }

  componentDidMount() {
    const baseUrl = CONFIG.BASE_URL;
    axios.get(`${baseUrl}/kebijakan`)
      .then(res => {
        const Kebijakans = res.data.data;
        this.setState({ Kebijakans });
      })
  }

  render() {
    return (
        <>
        {
          this.state.Kebijakans
            .map(Kebijakan =>
                <div className="col-md-4 col-sm-6 mb-3">
                    <CardSosialisasi image={Kebijakan.foto_url} judul={Kebijakan.judul_kebijakan} isi={Kebijakan.isi_kebijakan} link={Kebijakan.kid} />
                </div>
            )
        }
        </>
    )
  }
}