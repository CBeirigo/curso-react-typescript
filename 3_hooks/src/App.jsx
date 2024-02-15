import ComponenteFilho from "./components/ComponenteFilho";
import Contador from "./components/Contador";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuContextoProvider } from "./contexts/MeuContexto";
import DisplayWindowSize from "./components/DisplayWindowSize";

import "./App.css";

function App() {
  return (
    <>
      {/* 18 - usEffect */}
      <ExemploUseEffect />
      <Timer />

      {/* 19 - useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>

      {/* 20 - useReducer */}
      {/* estados mais complexos */}
      {/* <Contador/> */}

      {/* 21 - Custom Hooks */}
      <DisplayWindowSize />
    </>
  );
}

export default App;
