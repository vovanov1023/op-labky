const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

const difference = (array1, array2) => {
    const newArray = [];
    for (const i of array1) {
        if (!array2.includes(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}

const result = difference(array1, array2);
console.log(result);