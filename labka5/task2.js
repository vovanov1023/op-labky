const array = () => {
    const items = [];

    const accessor = (i) => {
        return items[i];
    }

    accessor.push = (value) => {
        return items.push(value);
    };

    accessor.pop = () => {
        return items.pop();
    };

    return accessor;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
