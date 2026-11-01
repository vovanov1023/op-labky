const removeElements = (array, ...args) => {
    for (let i of args) {
        const index = array.indexOf(i);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);