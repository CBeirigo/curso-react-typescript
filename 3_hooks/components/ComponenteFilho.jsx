import { useContext } from "react"
import { MeuContexto } from "../contexts/MeuContexto"

const ComponenteFilho = () => {
    const {mensagem, setMensagem} = useContext(MeuContexto)
  return (
    <div>

        <button onClick={() => setMensagem("Nova mensagem")}>
            Alterar mensagem
        </button>

        <p>{mensagem}</p>
    </div>
  )
}

export default ComponenteFilho