'use strict'

const array = [1, true, 228, 52, 42, 21, "Barabolya", false, "Oleksandr Potsiluiko", 6.7, "ЯЛКВМОМ", -333];
const counters = {};

for (const item of array) {
    if (typeof item === "string") {
        counters.string === undefined ? counters.string = 1 : counters.string += 1;
    } else if (typeof item === "number") {
        counters.number === undefined ? counters.number = 1 : counters.number += 1;
    } else if (typeof item === "boolean") {
        counters.boolean === undefined ? counters.boolean = 1 : counters.boolean += 1;
    }
}

console.log(counters);
