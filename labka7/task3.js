const unique = (array) => {
    const entryCount = {};
    const newArray = array.slice();
    for (let i of array) {
        if (entryCount[i] === undefined) entryCount[i] = 0;
        else entryCount[i] += 1;
    }
    for (let i in newArray) {
        if (entryCount.i !== 0) {
            entryCount.i -= 1;
            newArray.splice(i, 1);
        }
    }
    return newArray;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);