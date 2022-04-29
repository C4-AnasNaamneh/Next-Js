import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Home Page</h1>

        <Link href="/pokemons">
          <a className={styles.anchorTag}>Go To Pokemons Page</a>
        </Link>
      </div>
    </>
  );
}
