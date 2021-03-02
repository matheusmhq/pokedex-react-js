export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageById(id) {
  id = id.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

export function DetermineGenderRate(gender) {
  switch (gender) {
    case -1:
      return "N/A";
    case 0:
      return "0%\u2640 100%\u2642";
    default:
      const female = Math.round(gender * 1250) / 100;
      const male = 100 - female;
      return `${female}%\u2640 ${male}%\u2642`;
  }
}
