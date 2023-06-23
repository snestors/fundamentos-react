import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => { 

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => { 
        e.preventDefault()
        // Caputra de datos
        const {titulo, descripcion, estado} = Object.fromEntries([...new FormData(form.current).entries()]) 

        // validacion de datos
        if( !titulo.trim() || !descripcion.trim() || !estado.trim()) {
            setError("todos los campos")
            //return console.log("Llena este Campo")
        } else {
            setError("")
        }


     }
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
        
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="titulo" defaultValue="titulo1" />
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="descripcion" defaultValue="Descripcion 1"></textarea>
            <select className="form-select mb-2" name="estado" defaultValue="Pendiente">
                <option   value="Pendiente">Pendiente</option>
                <option  value="completado">completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>

        {
            error !== "" && error
        }
        </form>
    )

 };

 export default NoControlado;