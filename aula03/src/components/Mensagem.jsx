import React from 'react'

const Mensagem = () => {

    const exibirTipo = (tipo) => {
        if(tipo === "sucesso"){
            return <h1>Operacao com sucesso</h1>
        }else if(tipo === "erro"){
            return <h2>algo deu Erro</h2>            
        }else if(tipo === "Aviso"){
            return <h3>Atencao verifique dados</h3>
        }else{
            return <h4>Tipo de mensagem inválida</h4>
        }
    }  

  return (
    <div>
        {exibirTipo("sucesso")}
        {exibirTipo("erro")}
        {exibirTipo("Aviso")}
        {exibirTipo()}
        
    </div>
  )
}

export default Mensagem