
import { useNavigate } from "react-router-dom"
import "../pages/styles/newPublication.css";
import { useEffect, useState } from "react";
import axios  from 'axios';

const NewPublication = () => {

    const navigate = useNavigate()


        // ---- Lógica CREATE ----
        const [cuerpo, setCuerpo] = useState("");
        const [precio, setPrecio] = useState("");
        const [unidadMedida, setUnidadMedida] = useState("");
        const [titulo, setTitulo] = useState("");
        const [idUsuario, setIdUsuario] = useState("");
    
        const handleSubmint = async (event) =>{
          event.preventDefault();
          try{
            const response = await axios.post('http://localhost:8080/api/v1/publicacion',{
                cuerpo: cuerpo,
                precio: precio,
                titulo: titulo,
                unidadMedida: unidadMedida,
                idUsuario : idUsuario,  

            });
            console.log('Registro exitoso', response.data);
    
          } catch(error){
            console.error('Error al registrar', error)
            console.log('Registro exitoso', response.data);
          } 
        };

    return (
        <>

            <div className="new-container">
                <form method="POST" class="row g-3" onSubmit={handleSubmint}>
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Título</label>
                        <input  class="form-control" id="inputEmail4" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>
                    <div class="col-md-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={cuerpo} onChange={(e) => setCuerpo(e.target.value)} required></textarea>
                    </div>
                    {/* <div class="col-12">
                        <label for="formFile" class="form-label">Agregar Imagen</label>
                        <input class="form-control" type="file" id="formFile"  />
                    </div> */}

                    <div class="col-6">
                        <label for="inputPrecio" class="form-label">Precio</label>
                        <input  class="form-control" id="inputPrecio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputUnidad" class="form-label">Unidad</label>
                        <input  class="form-control" id="inputUnidad" value={unidadMedida} onChange={(e) => setUnidadMedida(e.target.value)} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputUnidad" class="form-label">Usuario</label>
                        <input  class="form-control" id="inputUnidad" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required />
                    </div>

                    {/* <div class="col-md-6">
                        <label for="inputState" class="form-label">Residuo</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    
                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Ciudad</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div> */}

                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Crear Publicación</button>
                    </div>
                </form>

            </div>


        </>
    )
}

export default NewPublication;

