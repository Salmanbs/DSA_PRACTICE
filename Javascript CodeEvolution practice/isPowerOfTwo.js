const isPowerOfTwo = function (a) {
  let temp = a;
  while (temp > 1) {
    if (temp % 2 == 0) {
      temp = temp / 2;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  isPowerOfTwo(3),
  isPowerOfTwo(5),
  isPowerOfTwo(4),
  isPowerOfTwo(8),
  isPowerOfTwo(16),
  isPowerOfTwo(32),
  isPowerOfTwo(64),
  isPowerOfTwo(128),
  isPowerOfTwo(256),
  isPowerOfTwo(512),
  isPowerOfTwo(1024),
  isPowerOfTwo(2048),
  isPowerOfTwo(4096)
);
