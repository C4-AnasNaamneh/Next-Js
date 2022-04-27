import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function pokemons({ pokemonNames }) {
  return (
    <div className={styles.container}>
      <h1>Pokemons Page</h1>
      <Link
        href={{
          pathname: "/pokemon/[name]",
          query: { name: "name" },
        }}
      >
        <a>Names Page</a>
      </Link>

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
