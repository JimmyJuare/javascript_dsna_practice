/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArr = []
    for (const num of nums) {
        newArr.push(num * num)
    }
    newArr.sort((a,b) => a - b)

    return newArr
};  

let arr = [2,5,6,8,12]

console.log(sortedSquares(arr))
