export function randomNumber(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min) + min);
}