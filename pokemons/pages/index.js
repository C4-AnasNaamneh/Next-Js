import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.homeHeader}>Home Page</h2>
        <Image src={logo} width={550} height={200} />
        <br />
        <br />
        <Link href="/pokemons">
          <a className={styles.anchorTag}>Go To Pokemons Page</a>
        </Link>
      </div>
   
    </>
  );
}
