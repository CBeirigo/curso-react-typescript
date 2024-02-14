const Button = () => {
  const handleClick = () => {
    console.log("Clicou!");
  };
  //   quando se quer passar um argumento se usa função anônima
  //    () => handleClick(5)
  return <button onClick={handleClick}>Clique em mim!</button>;
};

export default Button;
