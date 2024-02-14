
const Descricao = (props) => {
    // props = {}
    // propriedades -> chave dos valores
    // props.nome = "Carolina"
  return (
    <div>
        <p>Seu nome é: {props.nome}</p>
        <p>E você tem: {props.anos} de idade.</p>
    </div>
  )
}

export default Descricao
