const breakingRecords = (scores) => {
  let min = Math.max(...scores);
  let max = 0;
  let highestScore = 0;
  let lowestScore = 0;

  scores.forEach((score, index) => {
    if (score > max) {
      max = score;
      if (index !== 0) highestScore++;
    }
    if (score < min) {
      min = score;
      if (index !== 0) lowestScore++;
    }
  });

  return [highestScore, lowestScore];
};

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
