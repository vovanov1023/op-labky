const max = (matrix) => {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (const arr of matrix) {
        for (const i of arr) {
            if (i > maxNum) {
                maxNum = i;
            }
        }
    }
    return maxNum;
}

const m = max([[1, 2, 3], [10, 4, 5, 6], [7, 8, 9]]);
console.log(m);