import { useRouter } from "next/router";

export default function name({ pokemonDetails }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Name Page</h1>
      <p>Pokemon Name: {name}</p>
      {pokemonDetails.abilities.map((pokemonDetail) => (
        <>
          {console.log(pokemonDetail)}
          <li>Pokemon Abilities: {pokemonDetail.ability.name}</li>
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
  console.log(ctx);
  return {
    props: { pokemonDetails },
  };
}
