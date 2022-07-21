import Route from '@ember/routing/route';

export default class PokemonRoute extends Route {
  // model() {
  //   let promise = fetch('https://pokeapi.co/api/v2/pokemon?limit=202');

  //   return promise
  //     .then((response) => response.json())
  //     .then((response) => response.results);
  // }

  async model() {
    let result = [];

    for (let i = 0; i < 100; i++) {
      result[i] = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
      ).json();
    }

    return result;
  }
}
