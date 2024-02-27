import { useEffect, useState } from "react";
import publicacion from "../assets/data-mock/publicaciones";
import "../pages/styles/Publicaciones.css";
import axios from "axios";

const Publicaciones = () => {
  //hooks
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/publicacion/lista").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {/* Img de publicación Galera */}
      <article className="filtro-container">
        <h5 className="filtro-text">Filtro:</h5>

        <select className="orden-selector" name="" id="">
          <option value="">Precio Mayor - Menor</option>
          <option value="">Precio Menor - Mayor</option>
          <option value="">Cantidad Mayor - Menor</option>
          <option value="">Cantaidad Menor - Mayor</option>
        </select>
        {/* <label htmlFor=""></label> */}
        <input type="text" placeholder="Buscar publicación" />
      </article>

      <section className="main-section">
        <article className="galeria-publicaciones">
          {/* (esto va en componente card) */}

          {publicacion.map((item) => (
            <div key={item.id_publicacion} className="publicacion-container">
              <div className="img-container">
                <img src={item.image_publicacion} alt="" />
              </div>
              <div className="body-card-container">
                <h5 className="title-card">{item.titulo_publicacion}</h5>
                <hr />
                <p className="desc-card">
                  <b>Usuario: {item.usuario_id_usuario}</b>
                </p>
                <p className="desc-card">
                  Precio: $<b>{item.precio}</b>
                </p>
                <p className="desc-card">
                  <b>Comuna: {item.comuna_id_comuna}</b>
                </p>
                <p className="desc-card">
                  <b>Unidad de medida: {item.unidad_medida}</b>
                </p>
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

export default Publicaciones;
