import "../components/login.css";


const Login = () => {
    return (
    <>
        <div class="container-principal">
            <img/>            
            <h2 className="conteiner-title">R e s i d u o s   N o   M a s</h2>
            <div className="form-box">
                <div className="button-box">
                    <button className="button-action"> Acceder </button>
                    <button className="button-action">Registrarse</button>
                </div>
                <form className="input-box">
                    <div className="input-box-email">
                        <label  >Correo Electrónico</label>
                        <input id="input-email" className="input-item input-email" type="email" /> 
                    </div>
                    <div className="input-box-password">
                        <label >Contraseña</label>
                        <input id="input-password" className="input-item input-password" type="password" />
                    </div>
                </form>
                <div className="login-box">
                    <div className="login-box-space">
                        <p>¿Olvidaste tu contraseña?</p>
                        <button className="button-login">Acceder</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login

