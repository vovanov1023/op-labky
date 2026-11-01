const store = (num: number):Function => {
    return ():number => num;
}

const read:Function = store(5);
const value:number = read();
console.log(value);
