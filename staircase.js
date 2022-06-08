/**
 * n = 6
 *
 * espacios = 5 almoadilla = 1
 * _____#
 *
 * espacios = 4 almoadilla = 2
 * ____##
 *
 * espacios = 3 almoadilla = 3
 * ___###
 *
 * espacios = 2 almoadilla = 4
 * __####
 *
 * espacios = 1 almoadilla = 5
 * _#####
 *
 * espacios = 0 almoadilla = 6
 * ######
 *
 */

const staircase = (n) => {
  let espacios = n;
  let contador = 1;
  let almoadilla = "";

  while (espacios != 0) {
    for (let i = 0; i < espacios - 1; i++) {
      almoadilla += " ";
    }

    for (let i = 1; i <= contador; i++) {
      almoadilla += "#";
    }
    console.log(almoadilla);
    almoadilla = "";
    espacios--;
    contador++;
  }
};

staircase(6);
staircase(4);
staircase(10);
