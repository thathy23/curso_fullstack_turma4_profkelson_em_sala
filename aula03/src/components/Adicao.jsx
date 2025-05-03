import React from 'react'

const Adicao = (props) => {
  return (
    <div>

        <h1>Adição:</h1>

        <h1>O resultado de {props.num1} + {props.num2} é igual à: {props.num1 + props.num2}</h1>    


    </div>
    
  )
}

export default Adicao