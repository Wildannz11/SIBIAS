import React from 'react';


export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="head text-center">
            <img src="" alt="user avatar" />
            <button className='btn btn-primary edit-profile-btn'>Edit Profile</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className='btn btn-primary'>LOG OUT</button>
        </div>
        </div>
    </div>
  )
}


