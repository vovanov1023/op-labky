const obj = { a: 1, b: 2, c: 3 };

const iterate = (
    object: Record<string, number>, callback: (key: string, value: number, obj: Record<string, number>) => void
) => {
    for (const key in object) {
        callback(key, object[key], object);
    }
};

iterate(obj, (key, value, objectRef) => {
    console.log({ key, value });
    console.log(objectRef[key] + " баран");
});
