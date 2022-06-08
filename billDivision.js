const bonAppetit = (bill, k, b) => {
  const response =
    b -
    bill
      .filter((_, index) => index !== k)
      .reduce((acc, total) => (acc += total)) /
      2;

  return response !== 0 ? response : "Bon Appetit";
};

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
console.log(bonAppetit([2, 4, 6], 2, 3));
