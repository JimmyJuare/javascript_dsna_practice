function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
