const dayOfProgrammer = (year) => {
  const days = 243;

  if (year < 1700 || year > 2700) return "year is invalid";
  if (year == 1918) return "26.09.1918";
  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) return `${256 - (days + 1)}.09.${year}`;
    return `${256 - days}.09.${year}`;
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
      return `${256 - (days + 1)}.09.${year}`;
    return `${256 - days}.09.${year}`;
  }
};

console.log(dayOfProgrammer(1800));
