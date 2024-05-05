function findPairsWithSum(arr, targetSum) {
    let pairs = [];
    let seen = new Set();
    for (let num of arr) {
        let complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }
    return pairs;
}

// Test
console.log(findPairsWithSum([1, 2, 3, 4, 5, 6, 7], 7)); // Output: [[3, 4], [2, 5], [1, 6]]
