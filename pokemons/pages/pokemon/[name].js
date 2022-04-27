import { useRouter } from "next/router";

export default function name({ pokemonNames }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Name Page</h1>
      <p>{name}</p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //we will retrieve data from api using name of pokemon (${ctx.name})

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
  console.log(ctx);

  const pokemonNames = await res.json();

  return {
    props: { pokemonNames },
  };
}
