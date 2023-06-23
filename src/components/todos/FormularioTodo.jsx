import { useState } from "react";



const FormularioTodo = ({ addTodo }) => {



    const [todo, setTodo] = useState({
        titulo: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false,
    })

    const { titulo, descripcion, estado, prioridad } = todo


    const handleChange = (e) => {
        const { type, value, name, checked } = e.target


        setTodo({ ...todo, [name]: type === "checkbox" ? checked : value })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(error)

        if (!titulo.trim() || !descripcion.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y Descripcion Obligatorios',

            })

        }

        addTodo({
            id: Date.now(),
            ...todo,
            estado: estado === "completado",
            prioridad: prioridad
        })

        setTodo({
            titulo: '',
            descripcion: '',
            estado: 'pendiente',
            prioridad: false,
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo agregado correctamente',
            showConfirmButton: false,
            timer: 1500
        })


    }


    return (

        <div className="container mt-2 mb-2">
            <h2>Formulario</h2>

            <form onSubmit={handleSubmit} >

                <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="titulo" value={titulo} onChange={handleChange} />

                <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="descripcion" value={descripcion} onChange={handleChange}></textarea>

                <div className="form-check mb-2">
                    <input type="checkbox" name="prioridad" className="form-check-input" id="inputCheck" checked={prioridad} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="inputCheck">Prioridad</label>
                </div>

                <select className="form-select mb-2" name="estado" value={estado} onChange={handleChange}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <button type="submit" className="btn btn-primary">Procesar</button>


            </form>

        </div>
    )

};

export default FormularioTodo;