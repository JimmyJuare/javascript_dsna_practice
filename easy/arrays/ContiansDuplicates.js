class Solution {
  containsDuplicate(numbers) {

    numbers.sort((a, b)=> a - b)

    for (let i = 0; i < numbers.length - 1; i++) {

        const element = numbers[i];

        const nextEle = numbers[i + 1];

        if(element === nextEle) return true
    }
    return false
  }
}

let solution = new Solution()

console.log(solution.containsDuplicate([5,3,1,6,7,4,3,10]))
