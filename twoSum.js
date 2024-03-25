// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to
// target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

//////////////////////////////////

// If the array is sorted , two pointer approach

function twosum(nums, target) {
  i = 0;
  j = nums.length - 1;
  while (i < j) {
    sum = nums[i] + nums[j];
    if (target < sum) {
      j = j - 1;
    } else if (target > sum) {
      i = i + 1;
    } else if (sum == target) {
      return [i, j];
    }
  }
}
console.log(twosum([3, 5, 6], 9), "first");

///////////////////////////////////////

//hashmap approach -- store compliments
// {
//     7 => 0,
//     2 => 1
// }

//checks if the number is present in map(as key) on looping.[ map.has(nums[i])]
//if not Stores the compliment and the index (compliment => index) .set(comp,i)
//if present returns i and .get(nums[i])

function hashmapTwoSum(nums, target) {
  const compliments = new Map();

  for (i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliments.has(nums[i])) {
      return [i, compliments.get(nums[i])];
    } else {
      compliments.set(compliment, i);
    }
  }
}

console.log(hashmapTwoSum([2, 7, 11, 15], 9), "second");
