import React from 'react'
import Livro from './Livro'

const ListaDeLivros = () => {

    const livros = [
        {titulo: 'O Hobbit', autor: 'J.R.R. Tolkien'},
        {titulo: 'Dom Casmurro', autor: 'Machado de Assis'},
        {titulo: '1984', autor: 'George Orwell'}
    ]
    //Iterar item por item dessa array pra renderizar na tela com map

  return (
    <div>
        <h3>Lista de Livros</h3>
        {/* abrir uma templete expression pra fazer o .map ,
         vai mapear cada item da lista acima pra renderizar*/}
        
        {
            livros.map((livro, index) => (
                <Livro key={index}titulo={livro.titulo} autor={livro.autor}/>
            ))        
        }    

    </div>
  )
}

export default ListaDeLivros