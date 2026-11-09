const array1 = [7, -2, 10, 5, 0, 0];
const array2 = [0, 10];

const difference = (array1, array2) => {
    return array1.filter(i => !array2.includes(i));
}

const result = difference(array1, array2);
console.log(result);