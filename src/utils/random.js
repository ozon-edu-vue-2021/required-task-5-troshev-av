export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomArrayItem(arr) {
  const randomIndex = randomIntFromInterval(0, arr.length - 1);
  return arr[randomIndex];
}
