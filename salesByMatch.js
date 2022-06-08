const sockMerchant = (n, socks) => {
  let pares = 0;
  const paresEncontrados = new Set();

  for (let sock of socks) {
    if (paresEncontrados.has(sock)) {
      pares++;
      paresEncontrados.delete(sock);
    } else {
      paresEncontrados.add(sock);
    }
  }
  console.log(paresEncontrados);
  return pares;
};

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
