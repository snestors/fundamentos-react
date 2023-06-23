import { useEffect, useState } from "react"
import FormularioTodo from "./components/todos/FormularioTodo"
import Todos from "./components/todos/Todos"

const initialStateTodos = JSON.parse( localStorage.getItem('todos')) || []


const App = () => {


    const [todos, setTodos] = useState(initialStateTodos)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log("useEffect")
    }, [todos])

    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        const newArray = todos.filter((todo) => todo.id !== id)
        setTodos(newArray)
    }

    const updateTodo = id => {

        setTodos(todos.map(todo => (todo.id === id ? {...todo, estado: !todo.estado} : todo)))

    }

    const orderTodo = arrayTodos => {
        return arrayTodos.sort((a, b)=>{
            if(a.prioridad === b.prioridad) return 0
            if(a.prioridad) return -1
            if(a.prioridad) return 1
           
            
        })
    }


    return (
        <>
            <div className="container pt-2" >
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{ position: 'sticky', top: 0 }}>

                            <FormularioTodo addTodo={addTodo} />

                        </div>

                    </div>


                    <div className="col-lg-6">
                        <h1>TODOS LIST <span className="badge bg-secondary">{todos.length}</span></h1>
                        <div style={{ overflowY: 'auto', maxHeight: '600px' }}>
                            <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                        </div>



                    </div>
                </div>
            </div>



        </>

    )
}

export default App