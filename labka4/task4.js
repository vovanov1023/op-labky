const sum = (...args) => {
    let sum = 0;
    let index = 0;
    do {
        sum += args[index++];
    } while (index < args.length);
    return sum;
}

console.log(sum(3, 2, 3, 8));