import React from 'react'

function cadangan() {
  return (
    <section className="hero">
    <div className="hero-body">
      <div className="container">
          <div className="columns is-centered">
              <div className="column is-4-desktop box">
              <div className="column has-text-centered">
                      <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                      <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
                      <p className="subtitle">Sign In Untuk Melanjutkan</p>
                  </div>
                  <p className='has-text-centered warn-msg'>{msg}</p>
                  <form onSubmit={validate} className='form-input'>
                      <div className='field mt-5'>
                          <label className="label">Email</label>
                          <div className="control has-icons-left">
                              <input 
                              className="input email" 
                              type="text" 
                              placeholder="Maukkan Email Anda"
                              value={email}  
                              onChange={(e) => setEmail(e.target.value)} 
                              />
                              <span className="icon is-small is-left">
                              <i className="fa-solid fa-envelope"></i>
                              </span>
                              
                          </div>
                          <p className='warn-msg'>{msgEmail}</p>
                      </div>
                      <div className='field mt-5'>
                          <label className='label'>Password</label>
                          <div className="control has-icons-left has-icons-right">
                              <input 
                              type="password" 
                              className="input password pw" 
                              onChange={(e) => setPassword(e.target.value)} 
                              value={password}   
                              placeholder='Password Anda'/>
                              <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                              </span>
                              <span className="icon is-small is-right">
                               <a href="hide-password"><i className="fa-solid fa-eye"></i></a> 
                              </span>    
                          </div>
                          <p className='warn-msg'>{msgPassword}</p>
                      </div>
                      <div className='field mt-5'>
                        <button 
                        className='button is-success btn-login is-fullwidth'>
                          Login
                          </button>
                      </div>
                  </form>
                  <div className="column has-text-centered">
                  <p>Belum Punya Akun? <Link to="/users">Daftar Akun</Link></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default cadangan
