const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  console.log(
    apples.map((apple) => apple + a).filter((range) => range >= s && range <= t)
      .length
  );
  console.log(
    oranges
      .map((orange) => orange + b)
      .filter((range) => range >= s && range <= t).length
  );
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
