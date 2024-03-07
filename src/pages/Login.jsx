import { useState } from "react";
import "../pages/styles/login.css";
import logo2 from '../assets/logo2.png';
import axios  from 'axios';
import { Link, NavLink } from 'react-router-dom';
    
const Login = () => {

    // Alternar formularios
    const [showLogin, setShowLogin] = useState(true);

    const toggleButtonLogin = () => {
        setShowLogin(true);
    };

    const toggleButtonRegister = () => {
        setShowLogin(false);
    };

    // ---- Lógica Registro ----
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenha, setContrasenha] = useState("");

    const handleSubmint = async (event) =>{
      event.preventDefault();
      try{
        const response = await axios.post('http://localhost:8080/registro/nuevo',{
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasenha: contrasenha
        });
        console.log('Registro exitoso', response.data);

      } catch(error){
        console.error('Error al registrar', error)
      } 
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
                    <form id="login" method="" className={showLogin ? "input-box form-visible" : "input-box form-hidden"}>
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
                                <button className="button-login" type="submint">Acceder</button>
                            </div>
                        </div>
                        <div className="login-box">
                            <div className="login-box-space">
                                <p className="oculto">¿Olvidaste tu contraseña?</p>
                                <button className="button-login" ><NavLink to="/user">User Demo</NavLink></button>
                            </div>
                        </div>
                    </form>

                    <form id="register" onSubmit={handleSubmint} method="POST" className={!showLogin ? "input-box form-visible" : "input-box form-hidden"}>
                        <div className="inputs-register input-box-email">
                            <label >Nombre</label>
                            <input id="input-name" className="input-item input-email" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="inputs-register input-box-email">
                            <label  >Apellido</label>
                            <input id="input-apellido" className="input-item input-email"  value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                        </div>
                        <div className="inputs-register input-box-email">
                            <label  >Correo Electrónico</label>
                            <input id="input-email" className="input-item input-email" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        {/* <div className="inputs-register input-box-password">
                            <label >Telefono</label>
                            <input id="" className="input-item input-password" type="tel"  />
                        </div> */}
                        <div className="inputs-register input-box-password">
                            <label >Contraseña</label>
                            <input id="input-contrasenha" className="input-item input-password" type="password" value={contrasenha} onChange={(e) => setContrasenha(e.target.value)}required />
                        </div>
                        {/* <div className="inputs-register input-box-password">
                            <label >Repetir Contraseña</label>
                            <input id="" className="input-item input-password" type="password" required />
                        </div> */}
                        <div className="register-box">
                            <div className="login-box-space">
                                <p>Acepto los términos y condiciones</p>
                                <button className="button-login" type="submint">Registrarse</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login

