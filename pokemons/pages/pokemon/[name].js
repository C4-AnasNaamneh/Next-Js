import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/name.module.css";
export default function name({ pokemonDetails }) {
  const router = useRouter();
  const { name } = router.query;
  
  let style 

if (pokemonDetails.pokemonDetails.types[0].type.name == "grass") {
   style = styles.grass
} else if (pokemonDetails.pokemonDetails.types[0].type.name == "bug") {
  style = styles.bug

}  else if (pokemonDetails.pokemonDetails.types[0].type.name == "water") {
  style = styles.water

} else if (pokemonDetails.pokemonDetails.types[0].type.name == "fire") {
  style = styles.fire

} else if (pokemonDetails.pokemonDetails.types[0].type.name == "normal"){
  style = styles.normal

} else {
  style = styles.default
}



  return (
    <div className={styles.name}>
      <h1>Pokemon Details Page</h1>
      <div className={style}>
      <p>Pokemon Name: {name}</p>

      {pokemonDetails.pokemonDetails.abilities.map((details) => (
        <>
          <p> Pokemon Abilities: {details.ability.name}</p>
        </>
      ))}
      <p>Pokemon Experience: {pokemonDetails.pokemonDetails.base_experience}</p>
      <p>Pokemon Height: {pokemonDetails.pokemonDetails.height}</p>
      <p>Pokemon Weight: {pokemonDetails.pokemonDetails.weight}</p>
      </div>
     
      <Link href="/">Go Back To Home Page</Link>
   
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/pokemonDetails/${ctx.query.name}`
  );
  const pokemonDetails = await res.json();
  return {
    props: { pokemonDetails },
  };
}
