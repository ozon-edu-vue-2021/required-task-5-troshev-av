import { randomArrayItem, randomIntFromInterval } from "@/utils/random";

const IMAGE_PATHS = [
  require("@/assets/images/6123150777.webp"),
  require("@/assets/images/6126039472.webp"),
  require("@/assets/images/6126040354.webp"),
  require("@/assets/images/6128597660.webp"),
  require("@/assets/images/6134992334.webp"),
  require("@/assets/images/6136170572.webp"),
  require("@/assets/images/6136172483.webp"),
  require("@/assets/images/6140906765.webp"),
  require("@/assets/images/6142673815.webp"),
  require("@/assets/images/6142681673.webp"),
  require("@/assets/images/6142683276.webp"),
  require("@/assets/images/6148226736.webp"),
];

export async function fetchProducts() {
  const response = await fetch(
    "https://random-data-api.com/api/food/random_food?size=30"
  );
  const result = await response.json();

  return result.map(({ uid, dish }) => ({
    id: uid,
    name: dish,
    cost: randomIntFromInterval(80, 800),
    preview: randomArrayItem(IMAGE_PATHS),
  }));
}
