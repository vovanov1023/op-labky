const people = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

const ages = (people) => {
    const agesMap = {};
    for (const personId in people) {
        const person = people[personId];
        agesMap[personId] = person.died-person.born;
    }
    return agesMap;
}

console.log(ages(people));