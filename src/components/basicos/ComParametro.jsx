function ComParametro(props) {
    
    const resultado = props.nota > 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong> tem nota {props.nota} e foi {resultado}
            </p>
        </div>

    )
}

export default ComParametro;
