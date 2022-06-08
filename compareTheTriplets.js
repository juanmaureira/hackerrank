const compareTriplets = (a, b) => {
  let pointAlice = 0,
    pointBob = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? pointAlice++ : a[i] < b[i] ? pointBob++ : 0;
  }

  return [pointAlice, pointBob];
};

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
