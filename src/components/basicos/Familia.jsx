import FamiliaMembro from "./FamiliaMembro";

function Familia(props) {
    return (
        <>
           {props.lista.map((element,i ) => (
                 <FamiliaMembro nome={element.nome} sobrenome={element.sobrenome}> </FamiliaMembro> 
            )) }

        </>
    )
}

export default Familia;