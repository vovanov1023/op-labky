const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('ті бурак блін вашє тут нада функциі а ти мені шо попало тут сунеш вась');
        }
    }
    return x => {
        let acc = x;
        for (const func of fns) acc = func(acc);
        return acc;
    };
}

let f = pipe(inc, twice, cube);
console.log(f(5));

f = pipe(inc, 7, cube);
console.log(f(5));