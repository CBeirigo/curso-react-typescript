import "./App.css";
import BomDia from "./components/BomDia";
import BotaoAzul from "./components/BotaoAzul";
import BotaoEstilizado from "./components/BotaoEstilizado";
import Button from "./components/Button";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import CounterExe from "./components/CounterExe";
import Descricao from "./components/Descricao";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import LoginButton from "./components/LoginButton";
import NumberList from "./components/NumberList";
import Pai from "./components/Pai";
import PaiFunction from "./components/PaiFunction";
import RenderCondicional from "./components/RenderCondicional";
import TaskList from "./components/TaskList";
import UserInfoForm from "./components/UserInfoForm";
import Warning from "./components/Warning";

import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/*1 - Criação de componente */}
      <Welcome />

      {/*2 - Expressões do JSX */}
      <BomDia />

      {/* 3 - Componente dentro de componente */}
      <Pai />

      {/* 4 - Props */}
      <Descricao nome="Carolina" anos={23} />

      {/* 5 - Desestruturação de props */}
      <Cachorro nome="Shark" raca="Pastor Alemão" />

      {/* 6 - useState -> hook */}
      <Counter/>

      {/* 7 - Múltiplos estados */}
      <UserInfoForm/>

      {/* 8 - Eventos */}
      <Button/>

      {/* 9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction/>

      {/* 10 - Eventos de form */}
      <Form/>

      {/* 11 - Renderização condicional */}
      <RenderCondicional user="Carolina"/>

      {/* 12 - Expressão ternária */}
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>

      {/* 13 - Render nulo */}
      <Warning warning={true}/>

      {/* 14 - Listas chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]}/>

      {/* 15 - Estilos por atributo */}
      <BotaoEstilizado/>

      {/* 16 - Estilos globais */}
      <BotaoAzul/>

      {/* 17 - Exercícios */}
      <Greeting name="Maria"/>
      <CounterExe/>
      <TaskList tasks={[{id:1, text: "Primeira tarefa"}, {id:2, text: "Segunda tarefa"}]}/>
      <TaskList/>
      
    </>
  );
}

export default App;
