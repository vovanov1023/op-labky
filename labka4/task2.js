const sum = (...args) => {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}

console.log(sum(3, 2, 3));