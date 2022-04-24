import styles from "../styles/Home.module.css";

export default function pokemons({ pokemonNames }) {
  // console.log(pokemonNames);
  //console.log(pokemonNames);

  return (
    <div className={styles.container}>
      <h1>Pokemons Page</h1>

      {pokemonNames.game_indices.map((pokemonName) => (
        <ul>
          <li> {pokemonName.version.name}</li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemonNames = await res.json();

  return {
    props: {
      pokemonNames,
    },
  };
}
