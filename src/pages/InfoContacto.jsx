import React from 'react';
import "../pages/styles/infoContacto.css";
import logo2 from '../assets/logo2.png';

const InfoContacto = () => {
    return (
        <>
            <div className='container-contact'>
                <div className="container-head">
                    <img className="img-logo" src={logo2} />
                    <h2 className="conteiner-title">R e s i d u o s   N o   M á s</h2>
                </div>
                <form className='contact-form'>
                    <div className='container-contact-title'>
                        <h3>¡Escríbenos!</h3>
                        <p>Rellena el siguiente formulario con tus datos y escríbenos , prometemos contactarte lo antes posible.</p>
                    </div>
                    <div className='container-contact-inputs'>
                        <div className="contact-inputs half-inputs">
                            <label className='contact-input-title'>Nombre</label>
                            <input id="" className="contact-input" type="" required />
                        </div>
                        <div className="contact-inputs half-inputs">
                            <label className='contact-input-title' >Teléfono</label>
                            <input id="" className="contact-input" type="" required />
                        </div>
                        <div className="contact-inputs half-inputs">
                            <label className='contact-input-title' >Email</label>
                            <input id="" className="contact-input" type="" required />
                        </div>
                        <div className="contact-inputs half-inputs">
                            <label className='contact-input-title' >Empresa</label>
                            <input id="" className="contact-input" type="" required />
                        </div>
                        <div className="contact-inputs all-inputs">
                            <label className='contact-input-title' >Asunto</label>
                            <input id="" className="contact-input" type="" required />
                        </div>
                        <div className="contact-inputs all-inputs">
                            <label className='contact-input-title' >Mensaje</label>
                            <textarea class="form-control form-control-light contact-input" name="" id=""></textarea>
                        </div>
                        <button className="button-login button-contact">Acceder</button>
                    </div>


                </form>

            </div>

        </>
    )
}

export default InfoContacto