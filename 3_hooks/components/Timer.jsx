import { useState, useEffect } from "react";

const Timer = () => {
  const [segundos, setSegundos ] = useState(0);

  // setInterval, setTimeout

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    // limpeza de estado sempre que tiver uma ação contínua
    return () => clearInterval(intervalId)
  }, []); //array dependencias vazio

  return <div>Timer: {segundos} segundos</div>;
};

export default Timer;
