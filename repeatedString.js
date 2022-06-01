

const repeatedString = (s, n) => Array.from(s.matchAll(/a/g)).length * ( Math.floor(n / s.length)) + Array.from(s.slice(0,(n % s.length)).matchAll(/a/g)).length

console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))
console.log(repeatedString('abcac', 10))