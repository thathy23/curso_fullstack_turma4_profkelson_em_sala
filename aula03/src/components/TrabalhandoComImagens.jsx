import React from 'react'
import perfilGit from '../assets/fotoPerfilGit.jpeg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <h1>Imagem Pública</h1>
        <img src='react2.jpeg' alt="logo react"/><br />
        <h2>Imagem Asset</h2>
        <img src={perfilGit} alt="foto de pefil"/><br />
    </div>
  )
}

export default TrabalhandoComImagens