import { useEffect, useState } from "react"
import "../pages/styles/Publicaciones.css"




const Publicaciones = () => {
    //hooks 
    const [publicacion, setPublicacion] = useState("");


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
                    <div className="publicacion-container">
                        <div className="img-container">
                            <img src="/src/assets/data-mock/img-kita/reja_2.jpg" alt="" />
                        </div>
                        <div className="body-card-container">
                            <h5 className="title-card">Titulo Publicacion</h5>
                            <hr />
                            <p className="desc-card"><b>Usuario:</b></p>
                            <p className="desc-card">Precio: <b>$</b></p>
                            <p className="desc-card"><b>Comuna:</b></p>
                        </div>
                    </div>
                </article>
            </section>
        </>)
}

export default Publicaciones