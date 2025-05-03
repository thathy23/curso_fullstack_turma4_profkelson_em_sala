import React from 'react'

const Divisao = () => {
  return (
    <div>
        <h1>Divisão:</h1>
        <h1>O resultado de {props.num1} x {props.num2} é: {props.num1/props.num2}</h1>
    </div>
  )
}

export default Divisao