const angryProfessor = (k, a) =>  a.filter( alumn => alumn <= 0 ).length >= k ? "NO" : "YES"

console.log(angryProfessor(3,[-1, -3, 4, 2]));
console.log(angryProfessor(2,[0, -1, 2, 1]));