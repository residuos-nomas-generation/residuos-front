// import React from 'react'
import "../components/Banner/banner.css";
import compu from '../assets/compu.png';
import img1 from '../assets/img1.png';
import funciona1 from '../assets/funciona1.png';
import funciona2 from '../assets/funciona2.png';
import funciona3 from '../assets/funciona3.png';
import funciona4 from '../assets/funciona4.png';
import container3 from '../assets/container3.png';
import container3icon from '../assets/container3-icon.png';


const Banner = () => {
    return (
        <div>
            <section className="banner-container">
                <div className="banner-info">
                    <p className="banner-info-title">Revive los residuos de manera sostenible junto a nosotros <br /> ¡Transformemos desperdicios en vida!</p>
                    <div className="d-flex">
                        <a href="#" className="btn-banner" >COMPRAR</a>
                        <a href="#" className="btn-banner">VENDER</a>
                    </div>
                </div>
                <div className="banner-img">
                    <img src={compu} className="" alt="Logo" />
                </div>
            </section>

            <section className="somos-container">
                <div className="container2-img">
                <img src={img1}  alt="Descripción de la imagen" />
                </div>                
                <div className="contenido">
                    <h2>¿QUIENES SOMOS?</h2>
                    <p className="somos-descripcion">ResiduosNoMás es una empresa especializada en la gestión integral de procesos de transacción de residuos sólidos, focalizada especialmente en la industria de la construcción. Nuestra misión principal es asegurar el acceso eficiente de estos productos a nuestros usuarios, al tiempo que contribuimos significativamente a la mejora de la gestión de residuos para las empresas.</p>
                </div>
            </section>

            <section className="funciona-container">
                
                <h2>¿CÓMO FUNCIONA?</h2>
                <div className="funciona-info1">
                <img src={funciona1} />
                    <h4>Oferta tus residuos</h4>
                    <p className="funciona-descripcion">Entregamos un espacio disponible para facilitar la venta de residuos que dejan las demoliciones / construcciones. </p>
                    <p className="funciona-info-numero">1</p>
                </div>
                <div className="funciona-info2">
                <img src={funciona2} />
                    <h4>Facilitamos la compra</h4>
                    <p className="funciona-descripcion">Hacemos el match con potenciales clientes por medio de una aplicación web intuitiva y sencilla</p>
                    <p className="funciona-info-numero">2</p>
                </div>
                <div className="funciona-info3">
                <img src={funciona3} />
                    <h4>Ahorra</h4>
                    <p className="funciona-descripcion">Cotiza productos de segunda mano  a un precio conveniente</p>
                    <p className="funciona-info-numero">3</p>
                </div>
                <div className="funciona-info4">
                <img src={funciona4} />
                    <h4>Reutiliza</h4>
                    <p className="funciona-descripcion">Realiza la compra de residuos y contribuye inmediatamente al medio ambiente</p>
                    <p className="funciona-info-numero">4</p>
                </div>
            </section>

            <section className="testimonio-container">
                <img src={container3} className="testimonio-img" />
                <p className="testimonio-descripcion">Accesibilidad, ahorro y compromiso. Es nuestra misión brindarlos constantemente a nuestros clientes.</p>
                <p className="testimonio-subdescripcion">Alexandra Salazar, Product owner</p>
                <img src={container3icon} className="testimonio-icon"/>
            </section>
        </div>
    );
}

export default Banner;