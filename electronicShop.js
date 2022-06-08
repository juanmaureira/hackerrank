const getMoneySpent = (keyboards, drives, b) => {
  let mostExpensive = 0;
  let total = 0;
  keyboards.map((boards) =>
    drives.map((drive) => {
      total = boards + drive;
      mostExpensive =
        total <= b && total > mostExpensive ? total : mostExpensive;
    })
  );
  return mostExpensive !== 0 ? mostExpensive : -1;
};

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
