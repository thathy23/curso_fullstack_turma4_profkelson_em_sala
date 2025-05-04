import React from 'react'

const Mensagem = (props) => {

    const exibirTipo = (tipo) => {
        if(tipo === "sucesso"){
            return <h1>Operacao com sucesso!</h1>
        }else if(tipo === "erro"){
            return <h2>algo deu Errado!</h2>            
        }else if(tipo === "aviso"){
            return <h3>Atencao verifique dados</h3>
        }else{
            return <h4>Tipo de mensagem inválida</h4>
        }
    }  

  return (
    <div>
        {exibirTipo(props.tipo)}
      
    </div>
  )
}

export default Mensagem