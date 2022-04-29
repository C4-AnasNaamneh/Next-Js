import { useRouter } from "next/router";

export default function name({ pokemonDetails }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div style={{fontSize:"x-large"}}>
      <h1>Pokemon Details Page</h1>
      <p>Pokemon Name: {name}</p>
      {pokemonDetails.abilities.map((details) => (
        <>
          <p> Pokemon Abilities: {details.ability.name}</p>
        </>
      ))}
      <p>Pokemon Experience: {pokemonDetails.base_experience}</p>
      <p>Pokemon Height: {pokemonDetails.height}</p>
      <p>Pokemon Weight: {pokemonDetails.weight}</p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.name}`
  );
  const pokemonDetails = await res.json();
  return {
    props: { pokemonDetails },
  };
}
