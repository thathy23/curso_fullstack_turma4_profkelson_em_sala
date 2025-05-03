import React from 'react'

const Multiplicacao = () => {
  return (
    <div>
        <h1>Multiplicação:</h1>
        <h1>O resultado de {props.num1} x {props.num2} é: {props.num1*props.num2}</h1>
    </div>
  )
}

export default Multiplicacao