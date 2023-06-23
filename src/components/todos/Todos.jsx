import ItemTodo from "./ItemTodo";


const Todos = ({ todos, deleteTodo, updateTodo }) => {

    //console.log(todos)

    return (<>





        {
            todos.map((todo) => (
                <ItemTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))
        }
        {
            todos.length === 0  && <h3 className="text-center">No Items</h3>
        }


    </>)
}



export default Todos;