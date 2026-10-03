const functions = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

const introspection = (array) => {
    const result = [];
    for (const funcIndex in array) {
        result.push([array[funcIndex].name, array[funcIndex].length])
    }
    return result;
}

console.log(introspection(functions));