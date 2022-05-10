import React from 'react'

export default function Fragmento(props){
    return (
        //formas de se resolver o erro de fragmentação
        //forma 1
        <div>
            <h2>Fragmento</h2>
            <p>cuidado com esse erro !!</p>
        </div>
        // //forma 2
        // <React.Fragment>
        //     <h2>Fragmento</h2>
        //     <p>cuidado com esse erro !!</p>
        // </React.Fragment>
        // //forma 3
        // <>
        //     <h2>Fragmento</h2>
        //     <p>cuidado com esse erro !!</p>
        // </>
    )
}