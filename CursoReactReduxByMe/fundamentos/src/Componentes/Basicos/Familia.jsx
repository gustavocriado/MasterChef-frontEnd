import React,{cloneElement} from 'react'
export default props => {
    return (
        <div>
           {
               //o map serve para mapear as propriedades de um array para outro array
               React.Children.map(props.children, (child) => {
                   return cloneElement(child,props);
               })
           }
        </div>
    )
}