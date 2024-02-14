


// eslint-disable-next-line react/prop-types
const NumberList = ({ numbers }) => {
  // estruturas de loop - for, while
  // metodos array - filter, map, reduce, ...
  // chaves - key (identificador único para cada elemento)
  return (
    <ul>
      {numbers.map((number, index) => (
        // eslint-disable-next-line react/jsx-key
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
