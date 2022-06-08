/**
 * ar = [1, 2, 3, 4, 5, 6]
 * k = 5
 *
 * [1 + 2] = 3
 * [1 + 3] = 4
 * [1 + 4] = 5 cont = 1
 * [1 + 5] = 6
 * [1 + 6] = 7
 * [2 + 3] = 5 cont = 2
 * [2 + 4] = 6
 * [2 + 5] = 7
 * [2 + 6] = 8
 * [3 + 4] = 7
 * [3 + 5] = 8
 * [3 + 6] = 9
 * [4 + 5] = 9
 * [4 + 6] = 10 cont = 3
 * [5 + 6] = 11
 */

const divisibleSumPairs = (n, k, ar) => {
  let cont = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 1 + i; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) cont++;
    }
  }

  return cont;
};

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
