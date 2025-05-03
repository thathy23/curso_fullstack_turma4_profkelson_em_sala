import React from 'react'

const QuilometroParaMilha = (props) => {
  return (
    <div>
        <h1>{props.distanciakm} KM equivalem à {props.distanciakm*1000} Metros</h1>
    </div>
  )
}

export default QuilometroParaMilha