const removeElements = (array, ...args) => {
    return array.filter(i => !args.includes(i));
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElements(array, 5, 1, 6));