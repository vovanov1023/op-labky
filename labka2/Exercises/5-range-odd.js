'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (startIndex, endIndex) => {
  const numArray = [];
  for (let i = startIndex; i <= endIndex; i++) {
    if (i % 2 !== 0) {
      numArray.push(i);
    }
  }
  return numArray;
};
module.exports = { rangeOdd };
