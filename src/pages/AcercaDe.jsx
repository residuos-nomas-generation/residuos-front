import React from 'react';
import "../pages/styles/acercaDe.css";
import about from '../assets/about.png';

const AcercaDe = () => {
    return (
        <>
            <div className='container-about-us'>
            <h2 className='about-title'>¿Quienes Somos?</h2>

                <div className='container-separation'>
                    <div className='container-text'>

                        <p className='about-text'>Residuos No Más es una empresa especializada en la gestión integral de procesos de transacción de residuos sólidos, focalizada especialmente en la industria de la construcción.</p>
                        <h4 className='about-subtitle'>Visión:</h4>
                        <p className='about-text'>Nuestra misón es ser la principal plataforma global que promueve la construcción sostenible y accesible, conectando a comunidades y empresas para la compra y venta de materiales de segunda mano, facilitando la construcción de hogares de manera económica y respetuosa con el medio ambiente."</p>

                        <h4 className='about-subtitle'>Misión:</h4>
                        <p className='about-text'>Facilitar el acceso a materiales de construcción asequibles y de alta calidad, promoviendo la reutilización y reduciendo la generación de residuos en la industria de la construcción. Nos comprometemos a ser la fuente preferida para comunidades y empresas que buscan contribuir a un mundo más sostenible y mejorar las condiciones de vida a través de la construcción de viviendas dignas.</p>

                        <h4 className='about-subtitle'>Innovación:</h4>
                        <p className='about-text'>Residuos No Más se distingue como la primera plataforma especializada en la compra y venta de materiales de segunda mano específicamente destinados a la construcción de hogares. A diferencia de otras plataformas que ofrecen residuos de construcción no procesados, nosotros proporcionamos materiales listos para su uso, tales como puertas, maderas, ventanas y más. Esta innovación no solo simplifica el proceso de construcción, sino que también impulsa la economía circular al fomentar la reutilización de recursos y reducir la huella ambiental de la construcción.</p>
                    </div>
                    <img className='img-about' src={about} />
                </div>




            </div>

        </>
    )
}

export default AcercaDe