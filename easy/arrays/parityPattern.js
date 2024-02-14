class Solution {
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
  