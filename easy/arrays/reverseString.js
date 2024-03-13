/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1
    let curr = ''
    while (left < right){
        curr = s[left]
        s[left] = s[right]
        s[right] = curr
        left++
        right--
    }
    return s
};

let arr = ['h','e','l','l','o']
console.log(reverseString(arr))
