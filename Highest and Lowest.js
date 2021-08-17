// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = numbers => {
  const arrayFromString = numbers.split(' ').map(x => parseInt(x));
  return Math.max(...arrayFromString) + ' ' + Math.min(...arrayFromString);
}
