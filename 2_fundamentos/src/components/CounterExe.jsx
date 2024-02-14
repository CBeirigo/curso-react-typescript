import {useState} from 'react'

const CounterExe = () => {

    const [count, setCount] = useState(0)
  return (
    <>
    <button onClick={() => setCount(count + 1)}>Aumentar</button>
    <p>Você clicou no botão {count} vezes</p>
    <button onClick={() => setCount(count - 1)}>Diminuir</button>
    </>
    
    
  )
}

export default CounterExe