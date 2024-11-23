
// Apply offer of 10 % of array of no
const prices = [100, 200, 300, 400, 500];
const discountedPrices = prices.map(price => price * 0.9); // Applying 10% discount

console.log(discountedPrices); // Output: [90, 180, 270, 360, 450]

// const prices = [100, 200, 300, 400, 500];
prices.forEach((price, index, arr) => arr[index] = price * 0.9);

console.log(prices); // Output: [90, 180, 270, 360, 450]

