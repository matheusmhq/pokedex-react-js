export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageForIndex(index) {
  index = index.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;
}
