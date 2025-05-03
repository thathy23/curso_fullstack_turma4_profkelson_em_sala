import React from 'react'

const MilhasParaQuilometro = (props) => {
  return (
    <div>
        <h1>{props.distanciaMetro} Metros equivalem à {props.distanciaMetro/1000} KM</h1>
    </div>
  )
}

export default MilhasParaQuilometro