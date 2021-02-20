export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageForIndex(id) {
  id = id.toString().padStart(3, "0");
  //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}
