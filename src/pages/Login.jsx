import { useState } from "react";
import "../pages/styles/login.css";
import logo2 from '../assets/logo2.png';
    

const Login = () => {

    const [showLogin, setShowLogin] = useState(true);

    const toggleButtonLogin = () => {
        setShowLogin(true);
    };

    const toggleButtonRegister = () => {
        setShowLogin(false);
    };

    return (
        <>
            <div class="container-principal">
                <div className="container-head">
                    <img className="img-logo" src={logo2} />
                    <h2 className="conteiner-title">R e s i d u o s   N o   M a s</h2>

                </div>
                <div className="form-box">
                    <div className="button-box">
                        <button className={showLogin ? "button-action-active" : "button-action"} onClick={toggleButtonLogin}> Acceder </button>
                        <button className={!showLogin ? "button-action-active" : "button-action"} onClick={toggleButtonRegister}>Registrarse</button>
                    </div>
                    <form id="login" className={showLogin ? "input-box form-visible" : "input-box form-hidden"}>
                        <div className=" inputs-login input-box-email">
                            <label  >Correo Electrónico</label>
                            <input id="input-email" className="input-item input-email" type="email" required />
                        </div>
                        <div className="inputs-login input-box-password">
                            <label >Contraseña</label>
                            <input id="input-password" className="input-item input-password" type="password" required />
                        </div>
                        <div className="login-box">
                            <div className="login-box-space">
                                <p>¿Olvidaste tu contraseña?</p>
                                <button className="button-login">Acceder</button>
                            </div>
                        </div>
                    </form>

                    <form id="register" className={!showLogin ? "input-box form-visible" : "input-box form-hidden"}>
                        <div className="inputs-register input-box-email">
                            <label  >Nombre</label>
                            <input id="input-email" className="input-item input-email" type="email" required />
                        </div>
                        <div className="inputs-register input-box-email">
                            <label  >Apellido</label>
                            <input id="input-email" className="input-item input-email" type="email" required />
                        </div>
                        <div className="inputs-register input-box-email">
                            <label  >Correo Electrónico</label>
                            <input id="input-email" className="input-item input-email" type="email" required />
                        </div>
                        <div className="inputs-register input-box-password">
                            <label >Telefono</label>
                            <input id="input-password" className="input-item input-password" type="tel" required />
                        </div>
                        <div className="inputs-register input-box-password">
                            <label >Contraseña</label>
                            <input id="input-password" className="input-item input-password" type="password" required />
                        </div>
                        <div className="inputs-register input-box-password">
                            <label >Repetir Contraseña</label>
                            <input id="input-password" className="input-item input-password" type="password" required />
                        </div>
                        <div className="register-box">
                            <div className="login-box-space">
                                <p>Acepto los términos y condiciones</p>
                                <button className="button-login">Registrarse</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login

