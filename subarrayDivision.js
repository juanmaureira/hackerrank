/**
 * [2, 2, 1, 3, 2]
 * m = 2
 * S[0] + s[1] = d = 4
 * [2,2] [1,3]
 *
 *
 *
 */

const birthday = (s, d, m) => {
  let arr = [];
  let sum = 0;
  let ways = 0;
  if (s.length === 1 && d === s[0]) return 1;
  for (let i = 0; i < s.length - 1; i++) arr.push(s.slice(i, i + m));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < m; j++) {
      sum += arr[i][j];
    }
    if (sum === d) ways++;
    sum = 0;
  }
  return ways;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));
