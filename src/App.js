import "./App.css";
// import Item from "./item";
import React, { useEffect, useState } from "react";

function App() {
  const [contador, setContador] = useState(0)
  // var noticias = [
  //   { titulo: "Times", sub: "tempos" },
  //   { titulo: "Globo", sub: "mundo" },
  //   { titulo: "Extra", sub: "plus" },
  //   { titulo: "Correio", sub: "carteiro" },
  //   { titulo: "SBT", sub: "silvio Santos" },
  // ];

  function adicionar () {
    setContador(contador+1)
  }
  return (
    <div>
      <h1>{contador}</h1>
      {/* {noticias.map((noticia, key) => (
        <Item key={key} title={noticia.titulo} noticias={noticia.sub} />
      ))} */}
      <button onClick={adicionar}>Aumentar</button>
    </div>
  );
}

export default App;
