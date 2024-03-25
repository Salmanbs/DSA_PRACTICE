// Roman numerals are represented by seven different symbols:

// I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral,
// just two ones added together. 12 is written as XII,
// which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
//  However, the numeral for four is not IIII. Instead, the number four is
// written as IV. Because the one is before the five we subtract it making four.
//  The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


//Approach 

//Roman numbers are always in the form where greates value comes first.
//excpetions are of the form (IV...)
//So check if current is lesse than next. If so 
// subtract current from mext and add it to sum and increment
//  the index by 1 otherwise simply add it to sum

// the last next comes undefined so it is also handled.

function romanToInt(s) {
  let sum = 0;
  let mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // console.log(mapping["I"]);
  for (let i = 0; i < s.length; i++) {

    current = mapping[s[i]]
    next = mapping[s[i+1]]
    console.log(current,next, current < next)
    if (current < next) {
      sum += next - current;
      i = i + 1
      console.log(sum)
    } else {
      sum += current
    }
  }
  return sum
}

console.log(romanToInt("LVIII"));
