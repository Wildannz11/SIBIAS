const registForm = `
<img src="../public/logo.png" alt="Logo SIBIAS" title="Logo SIBIAS" class="text-center" type="png">
<h3 class="card-title text-center sign-up-page-title">Sign Up</h3>
<p class="card-subtitle text-muted mb-5 text-center">Buat Akun Baru</p>

  <div class="sign-up-form-container">
  
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-user"></i></span>
        <input type="text" class="form-control" id="username" placeholder="Username">
      </div>
    </div>
        
    <div class="mb-3">
      <div class="input-group">
          <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-user"></i></span>
          <input type="text" class="form-control" id="name" placeholder="Nama Anda">
      </div>
    </div>
        
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-envelope"></i></span>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inputkan Email Anda">
      </div>
    </div>
        
    <div class="mb-3">
      <div class="input-group">
          <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-lock"></i></span>
          <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
    </div>
        
    <div class="mb-3">
      <div class="input-group">
          <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-lock"></i></span>
          <input type="password" class="form-control" id="ulangi-password" placeholder="Ulangi Password">
      </div>
    </div>

  </div>
`;

const loginForm = `
<img src="../public/logo.png" alt="Logo SIBIAS" title="Logo SIBIAS">
                    <h3 class="card-title text-center login-page-title">Hallo Sobat SIBIAS</h3>
                    <p class="card-subtitle text-muted mb-5 text-center">Sign In to Continue</p>
                    <form id="form">
<div class="sign-in-form-container">
  <div class="mb-4">
    <label for="inputEmail1" class="form-label">Email address</label>
    <div class="input-group">
      <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-envelope"></i></span>
      <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Inputkan Email Anda">
    </div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <div class="input-group">
      <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-lock"></i></span>
      <input type="password" class="form-control" id="input-password" placeholder="Min 8 Karakter">
    </div>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remind Me</label>
  </div>
</div>
</form>

`;

export {
  registForm,
  loginForm,
};
