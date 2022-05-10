import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import App from './app'
// import Aleatorio from './Componentes/Basicos/Aleatorio'
// import App from './app'
// import Primeiro from './Componentes/Basicos/Primeiro'
// import ComParametro from './Componentes/Basicos/ComParametro'
// import Fragmento from './Componentes/Basicos/Fragmento'
//referenciando css usando caminho relativo abaixo


ReactDom.render(
        <App/>,    
    document.getElementById('root')
)

//desafio aleatorio meu resultado
// ReactDom.render(
//     <Aleatorio
//     maximo={100}
//     minimo={1}/>,
//     document.getElementById('root')
// )

//Importando Primeiro Componente Abaixo 
//  ReactDom.render(
//      <App/>,
//      document.getElementById('root')
// )

// //Importando Primeiro Componente Abaixo 
//  ReactDom.render(
//      //para evitar o erro JSX parsing adjacente, deve-se envolver os dois componentes em uma div ou um componente React.Fragment reduzido ou não
//      <div>
//          <Primeiro></Primeiro>
//          <ComParametro 
//             titulo="Segundo Componente"
//             subtitulo="Passando Parametro !!"/>
//             <Fragmento></Fragmento>
//      </div>,
//      document.getElementById('root')
// )

//Sintax JSX Abaixo
// const tag = <strong>Olá React</strong>;
// ReactDom.render(
//     <div>
//         { tag }
//     </div>,
//     document.getElementById('root')
// )

// ReactDom.render(
//     'Olá React',
//     document.getElementById('root')
// )