import ItemFrutas from "./ItemFrutas";


const ListFrutas = ({frutas}) => {

    
    return (
        <ul>
                {frutas.map((fruta,index) => (
                        <ItemFrutas key={index} fruta={fruta}/>                        
                ))}
            </ul>
    )
}

export default ListFrutas;