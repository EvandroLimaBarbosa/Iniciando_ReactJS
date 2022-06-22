import Item from "../components/Item";

export default function Noticias() {
  var noticias = [
    { titulo: "Times", sub: "tempos" },
    { titulo: "Globo", sub: "mundo" },
    { titulo: "Extra", sub: "plus" },
    { titulo: "Correio", sub: "carteiro" },
    { titulo: "SBT", sub: "silvio Santos" },
  ];
  return (
    <div>
      {noticias.map((noticia, key) => (
        <Item key={key} title={noticia.titulo} noticias={noticia.sub} />
      ))}
    </div>
  );
}
