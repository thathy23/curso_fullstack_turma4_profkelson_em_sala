import React from 'react'
import fotoPerfil from '../assets/fotoPerfilGit.jpeg'

const TrabalhandoComImagensCondicionais = () => {

    const escolheImagem = (tipo) => {
        if(tipo === "Public"){
            return <img src='react2.jpeg'/>
        }else if(tipo === "Asset"){
            return <img src={fotoPerfil} alt="" />
        }
          
    }

  return (
    <div>
        <h4>Imagem publica</h4>
        {escolheImagem("Public")} 
        <br /><br />
        <h4>Imagem Asset</h4>
        {escolheImagem("Asset")}         
      
    </div>
  )
}

export default TrabalhandoComImagensCondicionais