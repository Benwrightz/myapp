import "./Pokemon.css";
const Pokemon = () => {
  const rand = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rand}.png`;

  return url.map((items, index) => (
    <div className="Pokemon" key={index}>
      <h1>This is for Pokemon number: {items}</h1>
      <img src={url} alt="" />
    </div>
  ));
};

export default Pokemon;
