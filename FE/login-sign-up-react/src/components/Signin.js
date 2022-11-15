import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
    <div className="hero-body">
      <div className="container">
          <div className="columns is-centered">
              <div className="column is-4-desktop box">
              <div className="column has-text-centered">
                      <img src={require('../images/logo.png').default} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                      <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
                      <p className="subtitle">Sign In Untuk Melanjutkan</p>
                  </div>
                  <form className='form-input'>
                      <div className='field mt-5'>
                          <label className="label">Email</label>
                          <div className="control has-icons-left">
                              <input className="input" type="email" placeholder="Maukkan Email Anda"/>
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-envelope"></i>
                              </span>
                          </div>
                      </div>
                      <div className='field mt-5'>
                          <label className='label'>Password</label>
                          <div className="control has-icons-left">
                              <input type="password" className="input" placeholder='Password Anda'/>
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-lock"></i>
                              </span>
                          </div>
                      </div>
                      <div className='field mt-5'>
                        <button className='button is-success is-fullwidth'>Login</button>
                      </div>
                  </form>
                  <div className="column has-text-centered">
                  <p>Belum Punya Akun? <Link to="/regist">Daftar Akun</Link></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Signin
