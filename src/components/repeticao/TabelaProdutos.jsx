import produtos from '../../data/produtos'

function TabelaProdutos() {
    
    function getLinhas() { 
        return produtos.map(produto =>{
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
    })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody >
                    {getLinhas()}
                </tbody>
            </table>

        </div>

    )
}

export default TabelaProdutos;