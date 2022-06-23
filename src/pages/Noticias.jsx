import { useState } from "react";
import Item from "../components/Item";

export default function Noticias() {
  const [hiddeItem, setHideItem] = useState(false);
  var noticias = [
    { titulo: "Times", sub: "tempos" },
    { titulo: "Globo", sub: "mundo" },
    { titulo: "Extra", sub: "plus" },
    { titulo: "Correio", sub: "carteiro" },
    { titulo: "SBT", sub: "silvio Santos" },
  ];
  return (
    <div>
      <button onClick={() => setHideItem(!hiddeItem)}>{hiddeItem ? "Mostrar" : "Ocultar"}</button>
      {hiddeItem
        ? null
        : noticias.map((noticia, key) => (
            <Item key={key} title={noticia.titulo} noticias={noticia.sub} />
          ))}
    </div>
  );
}
