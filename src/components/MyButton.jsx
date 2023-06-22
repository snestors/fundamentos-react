
const MyButton = ({text}) => {


    const handleClickButton = (tittle) => {
        console.log(tittle)
    }
    //const {text}= props
    return (<>
        <button onClick={() => handleClickButton("Titulo: " + text)}>{text}</button>
    </>);
}

export default MyButton