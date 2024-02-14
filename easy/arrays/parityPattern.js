class Solution {
    /*
    we want to compare each element from left to right and see if the elements dont match
    in parity, and if they do match then we will return -1, ptherwise retun the number
    that breaks the parity(parity is just whether a number is odd or even)
    */
    parityPattern(nums) {

        for (let i = 0; i < nums.length; i++) {
            const ele = nums[i];
            if(ele % 2 === nums[i + 1] % 2) return i + 1
        }

        return -1
    }
  }
  
  let solution = new Solution()
  
  console.log(solution.parityPattern([1,2,3,4,6,6,7,8,9]))
  