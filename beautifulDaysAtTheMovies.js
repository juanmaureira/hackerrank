const reverse = (n) => +Array.from(n.toString()).reverse().join('')

const beautifulDays = (i, j, k) => {
    let beautifuls = 0;
    for(let m = i; m<=j;m++){
        beautifuls = ((m - reverse(m)) % k ) === 0 ? beautifuls + 1 : beautifuls; 
    }
    return beautifuls;
}

console.log(beautifulDays(20, 23, 6))