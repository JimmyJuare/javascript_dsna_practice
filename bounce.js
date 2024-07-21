function isBalanced(str) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (char in map) {
            stack.push(char);
        } else if (Object.values(map).includes(char)) {
            if (map[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
