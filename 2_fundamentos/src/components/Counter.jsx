import { useState } from "react";

const Counter = () => {
  // [consultar, alterar]
  const [count, setCount] = useState(1);


// Variáveis não re-renderizam o componente
//   let x = 10
  return (
    <div>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
    
  );
};

export default Counter;
