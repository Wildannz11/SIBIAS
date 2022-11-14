const registForm = `
<div class="regist-container">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src="../public/logo.png" alt="Logo SIBIAS" title="Logo SIBIAS" class="text-center">
            <h5 class="card-title text-center">Hallo Sobat SIBIAS</h5>
            <p class="card-subtitle text-muted mb-5 text-center">Sign In to Continue</p>

            <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="name" placeholder="Nama Anda">
                </div>

                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inputkan Email Anda">
                </div>

                <div class="mb-3">
                  <input type="password" class="form-control" id="password" placeholder="Password">
                </div>

                <div class="mb-3">
                    <input type="password" class="form-control" id="ulangi-password" placeholder="Ulangi Password">
                </div>

                <div class="d-grid text-center">
                    <button type="submit" class="btn btn-primary mb-3">Sign Up</button>

                    <p>Sudah Punya Akun?<a href="#" id="sign-in"> Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
</div> 
`;

const loginForm = `
<div class="login-container">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src="../public/logo.png" alt="Logo SIBIAS" title="Logo SIBIAS" class="text-center">
            <h5 class="card-title text-center">Hallo Sobat SIBIAS</h5>
            <p class="card-subtitle text-muted mb-5 text-center">Sign In to Continue</p>

            <form>
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <div class="input-group">
                  <span class="input-group-text" id="addon-wrapping"><i class="fa-light fa-envelope"></i></span>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inputkan Email Anda">
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <div class="input-group">
                  <span class="input-group-text" id="addon-wrapping"><i class="bi bi-lock">@</i></span>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Min 8 Karakter">
                  </div>
                </div>

                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Remind Me</label>
                </div>

                <div class="d-grid text-center">
                    <button type="submit" class="btn btn-primary mb-3">Login</button>

                    <h6 class="text-muted mb-3">Or</h6>
                    <button type="submit" class="btn btn-light mb-4">Login Dengan Google</button>

                    <div class="lupa-passwword-regist">
                        <p><a href="#" class="lupa-password">Lupa Password?</a></p>
                        <p>Belum Punya Akun? <a href="#" id="registrasi-akun">Registrasi Akun</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div> 
`;

export {
  registForm,
  loginForm,
};
