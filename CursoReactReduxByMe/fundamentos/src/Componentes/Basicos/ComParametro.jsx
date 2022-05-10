import React from 'react'
export default function ComParametro(params){
    console.log(params)
    return(
        <div>
            {/* essas propriedades são somente leitura,n pode tentar alterar */}
            <h2>{params.titulo}</h2>
            <h3>{params.subtitulo}</h3>
        </div>
    )
}