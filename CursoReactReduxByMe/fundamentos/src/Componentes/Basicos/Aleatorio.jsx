//deve pegar o valor maximo passado por parametro via propriedade
//deve pegar o valor minimo passado por parametro via propriedade
//e deve retornar um numero aleatorio entre o minimo e o maximo
//math.randrom

import React from 'react';

export default function Aleatorio(params)
{
    console.log(params);
    return(
        <div>
            <h2>Numero Maximo Recebido:{params.maximo}</h2>
            <h2>Numero Minimo Recebido:{params.minimo}</h2>
            {RetornarNumeroAleatorio(params)}
        </div>
    )
}
function RetornarNumeroAleatorio(params){
    return(
    <h2>Resultado Aleatorio: {
        parseFloat(
            Math.random() * (params.maximo - params.minimo) + params.minimo)
            .toFixed(0)
    }</h2>
    )
}