import React from 'react'

export default props => {
    const IsPar = props.numero % 2 === 0
        return(
            <div>
                {IsPar ? <span>Par</span> : <span>Impar</span>}
            </div>
        )
}