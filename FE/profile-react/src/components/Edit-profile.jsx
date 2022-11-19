import React from 'react'

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
                    <a href="">Change Picture</a>
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

                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label">Provinsi</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Jawa Barat</option>
                                <option value="1">Aceh</option>
                                <option value="2">Sumatera Barat</option>
                                <option value="3">Kalimantan Selatan</option>
                              </select>
                        </div>
                        <div className="col">
                            <label className="form-label">Kabupaten/Kota</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Depok</option>
                                <option value="1">Bekasi</option>
                                <option value="2">Bogor</option>
                                <option value="3">Bandung</option>
                              </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label">Kecamatan</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Lima Kaum</option>
                                <option value="1">Beji</option>
                                <option value="2">Sungayang</option>
                                <option value="3">Sungai Tarab</option>
                              </select>
                        </div>
                        <div className="col">
                            <label className="form-label">Kelurahan/Desa</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Kukusan</option>
                                <option value="1">Beji Timur</option>
                                <option value="2">Parambahan</option>
                                <option value="3">Kayu Putih</option>
                              </select>
                        </div>
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