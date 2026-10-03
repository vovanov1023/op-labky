const getRandomFromRange = (min, max) => {
    if (max === undefined) { // ох і наркоманія
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

console.log(getRandomFromRange(0, 10));