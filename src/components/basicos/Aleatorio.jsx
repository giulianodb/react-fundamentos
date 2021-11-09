function Aleatorio(props) {
    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
   
    return (
        <>
            
            <h2>{ Math.floor (Math.random() * (max - min+1) +min )}</h2>
        </>

    )

}

export default Aleatorio;
