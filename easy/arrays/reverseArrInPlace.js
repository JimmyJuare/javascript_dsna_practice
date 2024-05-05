const reverseInPlace = (arr, left, right) =>{
    while(left < right){
        let temp = arr[right]
        arr[right] = arr[left]
        arr[left] = temp

        left++
        right--
    }
}
const reverseArrInPlace = (arr, operations) => {
    operations.forEach(op => {
        let left = op[0]
        let right = op[1]

        reverseInPlace(arr, left, right)
    });

    return arr
}


let arr = [1,2,3,4,5]
let ops = [[0,3]]


console.log(reverseArrInPlace(arr, ops))
