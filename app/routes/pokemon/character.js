import Route from '@ember/routing/route';

export default class PokemonCharacterRoute extends Route {
  model(params) {
    console.log(params);
    const { character_id } = params;

    let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${character_id}/`);

    return pokemon.then((response) => response.json());
  }
}
