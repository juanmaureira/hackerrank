const kaprekarNumbers = (p, q) => {
  const arr = [];

  for (let i = p; i <= q; i++) {
    let large = i.toString().length;
    let squart = Math.pow(i, 2).toString();

    let rigth =
      large > 2
        ? +squart.slice(large - 1, squart.length)
        : +squart.slice(large, squart.length);

    let left =
      large > 2 ? +squart.slice(0, large - 1) : +squart.slice(0, large);

    if (left + rigth === i && (rigth !== 0 || left === 1)) arr.push(i);

    console.log({ i, large, squart, left, rigth });
  }
  if (arr.length === 0) console.log("INVALID RANGE");
  else {
    console.log(arr.join(" "));
  }
};

//kaprekarNumbers(1, 100);
//kaprekarNumbers(100, 300);
kaprekarNumbers(500, 600);

/**
 *
 * num = 45
 * large = num.toString().length / 2
 * squart = Math.pow(num,2).toString() / '2025'
 * rigth = squart.slice(squart.length, large)
 *
 */
