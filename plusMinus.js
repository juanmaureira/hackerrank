const plusMinus = (arr) => {
  let pos = 0,
    neg = 0,
    zero = 0;
  arr.forEach((num) => {
    num > 0 ? pos++ : num === 0 ? zero++ : neg++;
  });

  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
