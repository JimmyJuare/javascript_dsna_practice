const maxSub = (arr, k) => {
  let left = 0,
    curr = 0,
    ans = 0;


  for (let right = 0; right < arr.length; right++) {
  
    curr += arr[right];

    while (curr > k) {
      curr -= arr[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

let arr = [1, 2, 3, 4, 5, 1, 3];

console.log(maxSub(arr, 12));
