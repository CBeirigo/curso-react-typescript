import { useState, createContext } from "react";

// Criação do Contexto
export const MeuContexto = createContext();

// Componente Provedor que encapsula seus filhos fornecendo o contexto
// eslint-disable-next-line react/prop-types
export const MeuContextoProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState("Mensagem inicial");

  // O valor que será passado para os consumidores do contexto
  const valorDoContexto = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider value={valorDoContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
