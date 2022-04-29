import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function pokemons({ pokemonNames }) {
  return (
    <div className={styles.container}>
      <h1>Pokemons Page</h1>

      {pokemonNames.results.map((pokemonName) => (
        <ul className={styles.ul}>
          <li> {pokemonName.name}</li>
          <Link href="/pokemon/[name]" as={`/pokemon/${pokemonName.name}`}>
            <a className={styles.anchorTag}> Go To Pokemon's Details Page</a>
          </Link>
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
