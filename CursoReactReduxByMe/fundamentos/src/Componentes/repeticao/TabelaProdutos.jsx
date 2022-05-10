import React from 'react'
import produtos from '../../data/produtos'
import '../../Layout/Table.css'

export default props => {
    const NomesProdutos = produtos.map((produto,i) => {
        return <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R${produto.preco.toFixed(2).replace('.',',')}</td>
        </tr>         
})
    return(
        <div id="customers" className="Table">
           <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
            
                    {NomesProdutos} 
                </tbody>
           </table>
        </div>
    )
}