class Solution {
    removeDuplicate(numbers) {

        numbers.sort((a,b) => a - b)

        for (let i = 0; i < numbers.length; i++) {

            for (let j = i + 1; j < numbers.length; j++) {

                if(numbers[i] === numbers[j]){
                    
                    numbers.splice(j, 1)
                    j--
                } 
            }
            
        }
        return numbers
    }
  }

  let solution = new Solution()

  let arr = [1,1,1,1,2,3,4,5,6,7,8,8,8,8,8,9]

  console.log(solution.removeDuplicate(arr))
