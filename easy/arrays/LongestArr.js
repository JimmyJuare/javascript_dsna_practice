function longestEqualSubarray(arr) {
    let maxLen = 0;
    let count = 0;
    let map = new Map();
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        count += (arr[i] === 0) ? -1 : 1;

        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLen;
}

// Test
console.log(longestEqualSubarray([0, 1, 0, 1, 0, 0, 1, 1])); // Output: 6 (from index 1 to 6)
