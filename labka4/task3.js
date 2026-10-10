const sum = (...args) => {
    let sum = 0;
    let index = 0;
    while (index < args.length) {
        sum += args[index++];
    }
    return sum;
}

console.log(sum(3, 2, 3));