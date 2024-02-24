import  { useEffect } from 'react'

const Usuario = ({nome, idade}) => {

    useEffect(()=> {
        document.title = `${nome} tem ${idade} anos`
    },[nome,idade])
  return (
    <p>{nome} tem {idade} anos </p>
  )
}

export default Usuario