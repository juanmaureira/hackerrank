const findDigits = (n)  => {
    let accum  = 0
    let finished = false
    let digits = [];
    let number = n;

    while(!finished){
        digits.push(n % 10)
        accum = Math.floor(n/10)
        n = accum
        finished = accum === 0
    }

    return digits.filter( d => number % d === 0).length
}

console.log(findDigits(123456789))
console.log(findDigits(114108089))
console.log(findDigits(110110015)) 
console.log(findDigits(121))
console.log(findDigits(33))
console.log(findDigits(44))
console.log(findDigits(55))
console.log(findDigits(66))
console.log(findDigits(77))
console.log(findDigits(88))
console.log(findDigits(106108048))










