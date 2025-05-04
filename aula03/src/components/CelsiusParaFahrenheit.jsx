import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const fahrenheit = (props.temperaturaC*9)/5+32

  return (
    <div>

        <h1>A temperatura {props.temperaturaC}°C equivale à {fahrenheit}°F </h1>       

    </div>
  )
}

export default CelsiusParaFahrenheit