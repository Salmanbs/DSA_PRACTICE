const fibonacci = function (n) {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  const arr = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr;
};

const fibonacciAlternate = function (n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

console.log(fibonacci(3), fibonacciAlternate(3), fibonacciAlternate(5));
