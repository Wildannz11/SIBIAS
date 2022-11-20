import React from 'react'

function cadangan-signup() {
  return (
    <div>
      is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop box">
                    <div className="column has-text-centered mb-3">
                        <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias'/>
                        <h3 className="title form-page-title">Sign Up</h3>
                        <p className="subtitle">Buat Akun Baru</p>
                    </div>
                    <p className='has-text-centered warn-msg'>{msg}</p>
                    <form onSubmit={Register} className='form-input'>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input username" 
                                type="text" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                // error={errors.username}
                                />
                                
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                            <p className='warn-msg'>{msgUsername}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input name" 
                                type="text" 
                                placeholder="Nama Lengkap"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                // error={errors.name}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-user"></i>
                                </span>
                            </div>
                            <p className='warn-msg'>{msgName}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                className="input email" 
                                type="text" 
                                placeholder="Alamat Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                // error={errors.email}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                            <p className='warn-msg'>{msgEmail}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="password" 
                                className="input password pw" placeholder='Password Anda'
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                // error={errors.password}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                            <p className='warn-msg'>{msgPassword}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="password" 
                                className="input confirm-password pw" placeholder='Ulangi Password' 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                // error={errors.confirmPassword}
                                />
                                <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                                </span>
                            </div>
                            <p className='warn-msg'>{msgConfirmPassword}</p>
                        </div>
                        <div className='field mt-5'>
                            <div className="control has-icons-left">
                                <input 
                                type="text" 
                                className="input role"  
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                // error={errors.role} 
                                disabled/>
                                <span className="icon is-small is-left">
                                <p>Role</p>
                                </span>
                            </div>
                        </div>
                        <div className='field mt-5'>
                          <button 
                          className='button is-success is-fullwidth button-sin-up'>
                            Sign Up
                          </button>
                        </div>
                    </form>
                    <div className="column has-text-centered">
                    <p>Sudah Punya Akun? <Link to="/login" className='sign-in-link'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

<section className="hero">
<div className="card form-container">
  <div className="card-body sub-form-container">
    <div className="text-center mb-5 title-signup-login-container">
      <img src={logo} alt="Logo SIBIAS" title="Logo SIBIAS" className='logo-sibias mb-3'/>
      <h3 className="title  form-page-title">Hallo Sobat SIBIAS</h3>
      <p className="subtitle text-muted">Sign In Untuk Melanjutkan</p>
    </div>
    <div className="text-center">
      <p className='warn-msg'>{msg}</p>
    </div>

    <form onSubmit={Register}>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>

            <input 
            className="input username" 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <p className='warn-msg'>{msgUsername}</p> 
        </div>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>

            <input 
            className="input name" 
            type="text" 
            placeholder="Nama Lengkap"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <p className='warn-msg'>{msgName}</p> 
        </div>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
            <input
             className="input email" 
             type="text" 
             placeholder="Alamat Email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className='warn-msg'>{msgEmail}</p>
        </div>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
            <input
            type="password" 
            className="input password pw" 
            placeholder='Password Anda'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <span className="input-group-text hide-password" id="addon-wrapping"><i className="fa-solid fa-eye"></i></span>
          </div>
          <p className='warn-msg'>{msgPassword}</p>
        </div>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-envelope"></i></span>

            <input 
           type="password" 
           className="input confirm-password pw" placeholder='Ulangi Password' 
           value={confirmPassword} 
           onChange={(e) => setConfirmPassword(e.target.value)} 
            />
             <span className="input-group-text hide-password" id="addon-wrapping"><i className="fa-solid fa-eye"></i></span>
          </div>
          <p className='warn-msg'>{msgConfirmPassword}</p> 
        </div>

        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
            <input
           type="text" 
           className="input role"  
           value={role} 
           onChange={(e) => setRole(e.target.value)}
           disabled
            />
          </div>
        </div>

        <div className="d-grid text-center mb-5">
        <button type="submit" className="btn btn-primary is-success btn-login">Login</button>
        </div>
    </form>

    <div className="text-center">
      <p>Sudah Punya Akun? <Link to="/login">Login</Link></p>
    </div>
  </div>
</div> 
</section>
  )
}

export default cadangan-signup
