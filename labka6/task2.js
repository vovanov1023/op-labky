const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
    const listeners = {error: []};
    const f = (x) => {
        let acc = x;
        for (let i = fns.length - 1; i >= 0; i--) {
            try {
                acc = fns[i](acc);
            } catch (err) {
                listeners.error.forEach((handler) => handler(err));
                return undefined;
            }
        }
        return acc;
    }

    f.on = (event, handler) => {
        if (listeners[event]) {
            listeners[event].push(handler);
        }
    }

    return f;
}

let f = pipe(inc, twice, cube);
console.log(f(5));
f = pipe(7);
f.on('error', err => {console.log("функція впала з ащібкай "+err)})
console.log(f(5));