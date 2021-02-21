export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageFromId(id) {
  id = id.toString().padStart(3, "0");
  //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

export function DetermineGenderRate(gender) {
  switch (gender) {
    case -1:
      return "N/A";
      break;
    case 0:
      return "0%\u2640 100%\u2642";
      break;
    default:
      const female = Math.round(gender * 1250) / 100;
      const male = 100 - female;
      return `${female}%\u2640 ${male}%\u2642`;
  }
}
