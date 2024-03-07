import { useEffect, useState } from "react";
import publicacion from "../assets/data-mock/publicaciones";
import "../pages/styles/perfil.css";
import axios from "axios";
import perfil from '../assets/perfil.png';

const Perfil = () => {
    //hooks
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/publicacion/lista").then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <>    
        <section className="user-perfil-container">
            <div className="img-perfil-user-container">
                <img className="img-perfil-user" src={perfil} />
            </div>
            
            <div className="user-info-perfil-container" >
                <div className="user-info-perfil">
                <p className="datos-info-perfil">Nombre: </p>
                <p className="datos-info-perfil">Email:</p>
                </div>
            </div>
        </section>
        <section className="add-publicacion-perfil-container" >
            <div className="add-button-perfil-container">
                <button className="add-button-perfil">+</button>
            </div>

        </section>
            <section className="publication-perfil-section">

                <article className="galeria-publicaciones-perfil">
                    {/* (esto va en componente card) */}
                    <h2 className="galeria-perfil-title">Mis publicaciones</h2>
                    {publicacion.map((item) => (
                        <div key={item.id_publicacion} className="publicacion-perfil-container">
                            <div className="img-perfil-container">
                                <img className="img-perfil-publicacion" src={item.image_publicacion} alt="" />
                            </div>
                            <div className="text-perfil-container">
                                <h5 className="title-text-perfil">{item.titulo_publicacion}</h5>
                                <hr />

                                <p className="desc-card">
                                    <b>Comuna: {item.comuna_id_comuna}</b>
                                </p>
                                <p className="desc-card">
                                    Precio: $<b>{item.precio}</b>
                                </p>
                                <p className="desc-card">
                                    <b>Unidad de medida: {item.unidad_medida}</b>
                                </p>
                            </div>
                            <div className="icon-perfil-container">
                                <a href="#"> <i className="uil uil-edit icon-perfil"></i></a>
                                <a href="#"> <i className="uil uil-trash-alt icon-perfil"></i> </a>

                            </div>
                        </div>
                    ))}
                    {/* {data.map((item) => (
            <div key={item.idPublicacion} className="publicacion-container">
              <div className="img-container">
                <img src="/src/assets/data-mock/img-kita/reja_2.jpg" alt="" />
              </div>
              <div className="body-card-container">
                <h5 className="title-card">{item.tituloPublicacion}</h5>
                <hr />
                <p className="desc-card">
                  <b>Usuario:{item.usuario}</b>
                </p>
                <p className="desc-card">
                  Precio:<b> ${item.precio}</b>
                </p>
                <p className="desc-card">
                  <b>Comuna:{item.comuna}</b>
                </p>
                <p className="desc-card">
                  <b>Unidad de medida:{item.unidadMedida}</b>
                </p>
              </div>
            </div>
          ))} */}
                </article>
            </section>
        </>
    );
};

export default Perfil;