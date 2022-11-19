import React from 'react';
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types';

export default function ShowProfile(
//     {
//     label,
//     type,
//     name,
//     value,
//     placeholder,
//     onChange,
//     IconName,
//     error,
// }
) {
  return (
    <div className="profile-container">
      <div className="show-profile-container">
    <div className="card ini-dia">
  <div className="card-body show-profile">
    <div className="text-center mb-4 img-head-container">
        <div className="text-center">
          <img src="" className="rounded" alt="..."/>
        </div>
        <div className="text-center edit-profile-btn-container mt-5">
        <Link to='/editprofile'><button type="" className="btn btn-primary mb-3 edit-profile-btn"> Edit Profil</button></Link>
        </div>
    </div>

    <form>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control data-profile" id="name" placeholder="Fadilla Rahim" disabled readOnly/>
        </div>
    
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control data-profile" id="username" placeholder="fadillarahim07" disabled readOnly/>
        </div>

        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <input type="text" className="form-control data-profile" id="address" placeholder="Jalan Mandor Goweng 07" disabled readOnly/>
        </div>

        <div className="mb-3">
          <label className="form-label">Nomor Telephone</label>
          <input type="text" className="form-control data-profile" id="telephone" placeholder="082298765478" disabled readOnly/>
        </div>
    
        <div className="text-center sign-out-btn-container mt-5">
          <button type="" className="btn btn-primary mb-3 sign-out-btn">Sign Out</button>
        </div>
    </form>
  </div>
</div>
</div>
</div>
  )
}
