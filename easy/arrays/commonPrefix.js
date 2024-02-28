class Solution {
  commonPrefix(strs) {
    let res = "";
    let i = 0;

    while (
      i < strs[0].length &&
      i < strs[strs.length - 1].length &&
      strs[0][i] === strs[strs.length - 1][i]
    ) {
      res += strs[0][i];
      i += 1;
    }
    return res;
  }
}

let solution = new Solution();

console.log(solution.commonPrefix(["flower", "flow", "flowip"]));
