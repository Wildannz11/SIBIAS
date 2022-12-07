import React from 'react';
import axios from 'axios';
import CardDiskusi from './CardDiskusi';

export default class ListDiskusi extends React.Component {
  state = {
    Diskusies: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/kebijakan`)
      .then(res => {
        const Diskusies = res.data;
        this.setState({ Diskusies });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.Diskusies
            .map(Diskusi =>
                <div className="row" >
                <div className="col-12">
                  <CardDiskusi judul={Diskusi.judul_diskusi} creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>
                </div>
              </div>
            )
        }
      </ul>
    )
  }
}