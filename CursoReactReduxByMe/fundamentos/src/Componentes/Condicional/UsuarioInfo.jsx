import React from 'react'
import If from './If'

export default props => {
    const Usuario = props.usuario || {}
    return (
        <div>
            <If test={Usuario || Usuario.nome}>
                Seja Bem Vindo <strong>{Usuario.nome}</strong> !
            </If>
            <If test={!Usuario || !Usuario.nome}>
                Seja Bem Vindo <strong>Amigão</strong> !
            </If>
        </div>
    )
}