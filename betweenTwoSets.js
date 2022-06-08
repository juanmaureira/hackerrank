/**
 * a = [2,6]
 * b = [24,36]
 *
 * Numbers between array a and array b
 * c = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
 *
 * 1 condition
 * c % a == 0  all element of array a are factors to elements the array c
 * 2nd condition
 *
 * b % c == 0 all elements of array b are factors to element the array c
 * -----------------------------------------------------------------------
 *
 * [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] / [2.6]
 *
 *  6%2 == 0 -> [6]
 *  7%2 != 0 -> [6]
 *  8%2 == 0 -> [6,8]
 *  9%2 != 0 ->
 *  10%2 ==0 -> [6,8,10]
 *  .....
 */
const getTotalX = (a, b) => {
  let response = [];
  let cont = 0;

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    a.forEach((numa) => {
      b.forEach((numb) => {
        if (i % numa === 0 && numb % i === 0) cont++;
        if (cont === a.length * b.length) {
          response.push(i);
        }
      });
    });
    cont = 0;
  }
  return response.length;
};

console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([2, 4], [16, 32, 96]));
