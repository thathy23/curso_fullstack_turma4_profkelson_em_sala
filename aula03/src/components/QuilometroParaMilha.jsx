import React from 'react'

const QuilometroParaMilha = (props) => {
  const metros = props.distanciakm*1000
  return (
    <div>
        <h1>{props.distanciakm} KM equivalem à {metros} Metros</h1>
    </div>
  )
}

export default QuilometroParaMilha