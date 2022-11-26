import React from 'react';
import {Link} from 'react-router-dom'

function EditProfile() {
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
                      <input type="text" className="form-control" id="name-input" placeholder="Fadilla Rahim"/>
                    </div>
    
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" id="username-input" placeholder="fadillarahim07"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Alamat</label>
                        <input type="text" className="form-control" id="address-input" placeholder="Jalan Mandor Goweng 07"/>
                    </div>
                    
                      <div className="mb-3">
                        <label className="form-label">Nomor Telephone</label>
                        <input type="text" className="form-control" id="telephone-input" placeholder="082298765478"/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tanggal Lahir</label>
                        <input type="date" className="form-control" id="birth-date" placeholder="mm/dd/yyyy"/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="input-password" placeholder="Min 8 Karakter"/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Ulangi Password</label>
                        <input type="password" className="form-control" id="reinput-password" placeholder="ulangi password anda"/>
                      </div>
    
                    <div className="text-center update-profile-btn-container mt-5">
                        <button type="" className="btn btn-primary mb-3 update-profile-btn">Update</button>
                    </div>
                </form>
  </div>
</div>
</div>
</div>
  )
}

export default EditProfile;