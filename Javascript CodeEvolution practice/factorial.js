const factorial = function (n) {
  if (n < 1) {
    return "Invalid Input";
  }
  if (n == 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i < n; i++) {
    factorial = factorial * (i + 1);
  }
  return factorial;
};

console.log(factorial(0), factorial(1), factorial(2), factorial(4));
