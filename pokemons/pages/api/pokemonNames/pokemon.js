// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getPokemons(req, res) {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/`
      );
      const pokemonName = await response.json();

    res.status(200).json({ pokemonName })
  }
  

