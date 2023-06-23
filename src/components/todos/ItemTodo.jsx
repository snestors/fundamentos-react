const ItemTodo = ({ todo, deleteTodo, updateTodo}) => {
    return (
        <div className="card mb-2 mt-2" >
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                <h5 className="card-title">{todo.titulo} </h5>

                <div className="d-flex gap-2">
                {todo.estado ? <span className="badge bg-success">Finalizado</span> : <span className="badge bg-warning text-dark">Pendiente</span>}
                <span className="badge bg-primary">{todo.prioridad ? "Alta" : "Baja"}</span>
                </div>
                
                </div>
                
                <p className="card-text">{todo.descripcion}</p>
                
                <div className="d-flex justify-content-star gap-2">
                    <button className="btn btn-sm btn-danger" onClick={() =>{deleteTodo(todo.id)}}>Eliminar</button>
                    <button className="btn btn-sm btn-warning" onClick={() =>{updateTodo(todo.id)}}>Actualizar</button>
                </div>

            </div>

        </div>
    )
}

export default ItemTodo