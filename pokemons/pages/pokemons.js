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

      {pokemonNames.results.map((pokemonName) => (
        <ul>
          <li> {pokemonName.name}</li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemonNames = await res.json();

  return {
    props: {
      pokemonNames,
    },
  };
}
