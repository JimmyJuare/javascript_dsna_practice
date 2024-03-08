const isPalidrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};
const isPalidromeTwo = (str) => {
  let left = 0;
  let right = str.length - 1;
  while(left < right){
    if(str[left] !== str[right]) return false
    left++
    right--
  }
  return true
};

let string = "racecar";

console.log(isPalidrome(string));
console.log(isPalidromeTwo(string));
