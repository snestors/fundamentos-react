import { useState } from "react";



const Controlado = () => {

    const [todo, setTodo] = useState({
        titulo: '',
        descripcion: '',
        estado: 'Pendiente',
        prioridad: false,
    })

    const { titulo, descripcion, estado, prioridad } = todo


    const [error, setError] = useState(false)


       const handleChange = (e) => {
        const {type, value, name, checked} = e.target


        setTodo({ ...todo, [name]: type === "checkbox" ? checked : value })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(error)

        if(!titulo.trim() || !descripcion.trim()) {

            setError(true)
            
        } else {
            
            titulo.trim().length >= 10 ? setError(false) : setError(true)
            
        }
        

    }

    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
    )
    return (

        <div className="container mt-2">
        <h2>Formulario</h2>
        {error && <PintarError/>}
        <form onSubmit={handleSubmit} >

            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="titulo" value={titulo} onChange={handleChange} />
            {titulo.length < 10 && <span className="text-danger mb-2">El numero de caracteres minimo es 10 y van {titulo.length}</span>}
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="descripcion" value={descripcion} onChange={handleChange}></textarea>

            <div className="form-check mb-2">
                <input type="checkbox" name="prioridad" className="form-check-input" id="inputCheck" checked={prioridad} onChange={handleChange} />
                <label className="form-check-label" htmlFor="inputCheck">Prioridad</label>
            </div>

            <select className="form-select mb-2" name="estado" value={estado} onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="completado">completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>


        </form>

        </div>
    )

};

export default Controlado;