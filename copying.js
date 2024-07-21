function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

// Example usage
const original = { a: 1, b: { c: 2, d: { e: 3 } } };
const cloned = deepClone(original);
console.log(cloned);
