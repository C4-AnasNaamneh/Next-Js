// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getPokemonByName(req, res,ctx) {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${req.query.name}`
      );
      const pokemonDetails = await response.json();

    res.status(200).json({ pokemonDetails })
  }
  

