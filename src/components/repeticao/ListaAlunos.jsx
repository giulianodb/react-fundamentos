import alunos from '../../data/alunos'

function ListaAlunos(props) {
    
    // const li1 = <li>{alunos[0].id} - {alunos[0].nome} - {alunos[0].nota}</li>

    const lis = alunos.map( aluno => {
        //Id serve para react conseguir rastrear mais facilmente possíveis alterações no elemento
        return (
            <li key={aluno.id}>{aluno.id} - {aluno.nome} - {aluno.nota}</li>
        )
    })

    return (
        <div>
            <ul>
                {lis}
            </ul>

        </div>
    )

}

export default ListaAlunos;