import React, { useState } from "react";


export default function Counter() {
  const [contador, setContador] = useState(0);

  const adicionar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={adicionar}>Aumentar</button>
    </div>
  );
}
