import React from 'react'

const FahrenheitParaCelsius = (props) => {
  return (
    <div>
         <h1>A temperatura {props.temperaturaF} F equivale à {((props.temperaturaF-32)*5)/9} C </h1>

    </div>
  )
}

export default FahrenheitParaCelsius