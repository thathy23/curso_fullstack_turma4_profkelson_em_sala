import React from 'react'

const FahrenheitParaCelsius = (props) => {
  const celcius = ((props.temperaturaF-32)*5)/9
  return (
    <div>
         <h1>A temperatura {props.temperaturaF}°F equivale à {celcius}°C </h1>

    </div>
  )
}

export default FahrenheitParaCelsius