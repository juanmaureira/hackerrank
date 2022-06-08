/**
 * [[1, 2, 3],
 *  [4, 5, 6],
 *  [9, 8, 9]]
 *
 */

const diagonalDifference = (arr) => {
  let leftToRigth = 0;
  let rigthToLeft = 0;

  for (let i = 0, j = 0; i < arr.length; i++, j++) leftToRigth += arr[i][j];
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--)
    rigthToLeft += arr[i][j];

  return Math.abs(rigthToLeft - leftToRigth);
};

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
