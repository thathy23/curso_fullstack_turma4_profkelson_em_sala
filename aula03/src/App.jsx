import React from 'react'
import Mensagem from './components/Mensagem'


const App = () => {
  return (
    <div>
      
      <Mensagem tipo="sucesso" />
      <Mensagem tipo="erro" />
      <Mensagem tipo="aviso" />
      <Mensagem tipo="outro" />
             
    </div>
  )
}

export default App