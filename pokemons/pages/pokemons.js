import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function pokemons({ pokemonNames }) {
  return (
    <div >
      <h2 className={styles.header}>Pokemons Page</h2>

      {pokemonNames.pokemonName.results.map((pokemonName) => (
        <ul className={styles.ul}>
          <Link href="/pokemon/[name]" as={`/pokemon/${pokemonName.name}`}>
            <a className={styles.anchorTag}>
              {" "}
              <li className={styles.li}> {pokemonName.name}</li>
            </a>
          </Link>
        </ul>
      ))}

      <Link href="/">
        <a className={styles.link}>Go To Home Page</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/pokemonNames/pokemon");
  const pokemonNames = await res.json();

  return {
    props: {
      pokemonNames,
    },
  };
}
