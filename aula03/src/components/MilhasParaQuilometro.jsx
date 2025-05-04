import React from 'react'

const MilhasParaQuilometro = (props) => {
  const km = props.distanciaMetro/1000
  return (
    <div>
        <h1>{props.distanciaMetro} Metros equivalem à {km} KM</h1>
    </div>
  )
}

export default MilhasParaQuilometro