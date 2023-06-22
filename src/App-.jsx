
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListFrutas from "./components/frutas/ListFrutas";
import pathImg from "./assets/images/459-200x300.jpg"
import ButtonState from "./components/ButtonState";



const App = () => {


    const user = true;
    //const pathImg = "src/assets/images/459-200x300.jpg"
    const tittle = "Mi primer Proyecto react ";
    const classColors = {
        primary: "text-primary",
        info: "text-info",
    };

    const atrib = "text-center";

    const frutas = ['🍎', '🍍', '🍇', '🍘']

    return (
        <>
            
            <ButtonState></ButtonState>
           
            <div className="container">
                <h1 className={classColors.primary}>{tittle}</h1>
                <p className={classColors.info}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eos sapiente dolorem voluptatum hic natus iste mollitia, sunt quas odit minima doloribus magni? </p>
            </div>


            <h1 className={atrib}>Hola React</h1>
            <p className={atrib}>{atrib}</p>
            
                <img className="imagen-circular" src={pathImg} alt={`imagen-${atrib}`} />

            

            <MyButton text="Boton 1" />
            <WelcomeText user={user}/>
            <ListFrutas frutas={frutas}/>

        </>
    )

}

export default App;