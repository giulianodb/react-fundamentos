import alunos from '../../data/alunos'

function ListaAlunos(props) {
    
    const li1 = <li>{alunos[0].id} - {alunos[0].nome} - {alunos[0].nota}</li>

    return (
        <div>
            <ul>
                {li1}
                <li>Ana - 9.7</li>
                <li>Carlos - 7.7</li>
                <li>Daniel - 6.5</li>
            </ul>

        </div>
    )

}

export default ListaAlunos;