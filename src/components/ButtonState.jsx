import { useState } from "react";


const ButtonState = () => { 
    

    const [count, setCount] = useState(0)



    const handleButtonClickIncrement = () => {
        setCount(count + 1)
    }
    const handleButtonClickDecrement = () => {
        setCount(count - 1)
    }

return (<>
<h3>{count}</h3>
<button onClick={handleButtonClickIncrement}>+ </button>
<button onClick={handleButtonClickDecrement}>- </button>
</>); };



export default ButtonState;