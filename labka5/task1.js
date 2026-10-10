function seq(fns) {
    const chain = [fns];

    function inner(fn) {
        if (typeof fn === 'number') {
            return chain.reduceRight((acc, fn) => fn(acc), fn);
        }

        chain.push(fn);
        return inner;
    }

    return inner;
}

console.log(seq(x => x + 7)(x => x * 2)(5))