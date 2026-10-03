'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (startIndex, endIndex) => {
  const numArray = [];
  for (let i = startIndex; i <= endIndex; i++) {
    numArray.push(i);
  }
  return numArray;
};
module.exports = { range };
