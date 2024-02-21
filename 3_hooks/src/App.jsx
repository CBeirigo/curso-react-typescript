import ComponenteFilho from "./components/ComponenteFilho";
import Contador from "./components/Contador";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuContextoProvider } from "./contexts/MeuContexto";
import DisplayWindowSize from "./components/DisplayWindowSize";

import "./App.css";
import Container from "./components/Container";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";

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

    {/* 22 - Slots e children props */}
    <Container>
      <h1>Título da seção</h1>
      <p>Este é o meu subtítulo</p>
      <Contador/>
    </Container>

    {/* 23 - Sincronizar o estado com props */}
    {/* prop => componente => chamada de API => resulta em um dado */}
    <PerfilDeUsuario usuarioId={1}/>
    <PerfilDeUsuario usuarioId={2}/>

    {/* 24 - useMemo e useCallback */}
    <CalculoPesado numero={5}/>
    <ContadorCallback/>

    </>
  );
}

export default App;
