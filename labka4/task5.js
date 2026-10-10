const sum = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(3, 2, 3));