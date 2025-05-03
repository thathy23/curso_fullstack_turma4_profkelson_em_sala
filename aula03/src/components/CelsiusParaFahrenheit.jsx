import React from 'react'

const CelsiusParaFahrenheit = (props) => {
  return (
    <div>

        <h1>A temperatura {props.temperaturaC} C equivale à {(props.temperaturaC*9)/5+32} F </h1>       

    </div>
  )
}

export default CelsiusParaFahrenheit