import React from 'react'
import Aleatorio from './Componentes/Basicos/Aleatorio'
import Primeiro from './Componentes/Basicos/Primeiro'
import ListaAlunos from './Componentes/repeticao/ListaAlunos'
import ComParametro from './Componentes/Basicos/ComParametro'
import Fragmento from './Componentes/Basicos/Fragmento'
import Card from './Layout/Layout'
import Familia  from './Componentes/Basicos/Familia'
import FamiliaMembro  from './Componentes/Basicos/FamiliaMebro'
import TabelaProdutos from './Componentes/repeticao/TabelaProdutos'
import ParOrImpar from './Componentes/Condicional/ParOrImpar'
import UsuarioInfo from './Componentes/Condicional/UsuarioInfo'
import './App.css'

export default () => {
    return (
        //para evitar o erro JSX parsing adjacente, deve-se envolver os dois componentes em uma div ou um componente React.Fragment reduzido ou não
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
            <Card titulo="#08 - Renderização Condicional" color="#6A5ACD">
                  <ParOrImpar numero={21}></ParOrImpar>
                  <UsuarioInfo usuario={{nome: 'Fernando'}} />
                  <UsuarioInfo usuario={{email: 'Fer@nando.com'}} />
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#4CAF50">
                  <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#4169E1">
                   <ListaAlunos></ListaAlunos> 
            </Card>
            <Card titulo="#05 - Componentes com filhos" color="#8B4513">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"  />
                    </Familia>
            </Card>
                <Card titulo="#04 - Desafio Aleatorio" color="#D35400">
                    <Aleatorio
                        maximo={100}
                        minimo={1}>
                    </Aleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#F8C471">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parametro" color="#2ECC71">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Passando Parametro !!" />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#2E86C1">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}

//forma 3 de exportar uma função (como arrow function)

// export default props => {
//     return (
//         //para evitar o erro JSX parsing adjacente, deve-se envolver os dois componentes em uma div ou um componente React.Fragment reduzido ou não
//         <div id="app">
//             <h1>Fundamentos React</h1>
//             <Fragmento></Fragmento>
//             <ComParametro
//                 titulo="Segundo Componente"
//                 subtitulo="Passando Parametro !!" />
//             <Primeiro></Primeiro>
//         </div>
//     );
// }

//forma 2 de exportar uma função (como função anonima)
//só pode usar função anonima se for usar a forma de exportação for default

// export default function(props){
//     return (
//        //para evitar o erro JSX parsing adjacente, deve-se envolver os dois componentes em uma div ou um componente React.Fragment reduzido ou não
//      <div id="app">
//          <h1>Fundamentos React</h1>
//         <Fragmento></Fragmento>
//         <ComParametro 
//             titulo="Segundo Componente"
//             subtitulo="Passando Parametro !!"/>
//         <Primeiro></Primeiro>
//     </div>
//     );
// }

//forma 1 de exportar uma função

// export default function App(props){
//     return (
//        //para evitar o erro JSX parsing adjacente, deve-se envolver os dois componentes em uma div ou um componente React.Fragment reduzido ou não
//      <div id="app">
//          <h1>Fundamentos React</h1>
//         <Fragmento></Fragmento>
//         <ComParametro 
//             titulo="Segundo Componente"
//             subtitulo="Passando Parametro !!"/>
//         <Primeiro></Primeiro>
//     </div>
//     );
// }