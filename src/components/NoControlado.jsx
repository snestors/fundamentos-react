const NoControlado = () => { 
    
    return (
        <form>
        
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2"/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion"></textarea>
            <select className="form-select mb-2">
                <option  selected value="Pendiente">Pendiente</option>
                <option  value="completado">completado</option>
            </select>

            <button type="submit" className="btn-primary">Procesar</button>

        </form>
    )

 };

 export default NoControlado;