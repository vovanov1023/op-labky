const contract = (fn: Function, ...types: any[]) => {
    return (...args: any[]) => {

        const argTypes = types.slice(0, -1);
        const returnType = types[types.length - 1];

        for (let i = 0; i < args.length; i++) {
            if (args[i].constructor !== argTypes[i]) {
                throw new TypeError(
                    `аргумент з індексом ${i} має бути типу ${argTypes[i].name}`
                );
            }
        }

        const result = fn(...args);

        if (result.constructor !== returnType) {
            throw new TypeError(
                `результат має бути типу ${returnType.name}`
            );
        }

        return result;
    };
};

const add = (a: number, b: number): number => a + b;
const addNumbers:Function = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);