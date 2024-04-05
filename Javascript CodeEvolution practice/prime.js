const isPrime = function (n) {
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

console.log(isPrime(3), isPrime(4), isPrime(5), isPrime(6));
