import React, { useMemo } from "react";

const CalculoFibonacci = ({ n }) => {
  const resultadoCalculoFibonacci = useMemo(() => {
    return fibonacci(n);
  }, [n]);
  return <div>Fibonacci de {n} é {resultadoCalculoFibonacci}</div>;
};

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

export default CalculoFibonacci;
