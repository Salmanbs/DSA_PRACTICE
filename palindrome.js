// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

////////////////////

//convert to string and check last equals first.

//edge case negative return false

function palindrome(x) {
  y = x.toString().split("");
  let i = 0;
  let j = y.length - 1;
  console.log(Math.floor((y.length / 2)))
  if( x < 0){
    return false
  }
  while (i < Math.floor((y.length / 2))) {
    if (y[i] !== y[j]) {
      return false;
    }
    i = i + 1;
    j = j - 1;
  }
  return true;
}

console.log(palindrome(121));

////////////
// MATHEMATICAL APPROACH
// find reverse and check reverse equls number or not.

function reversePalindrome(x){
    let reverse_x = 0;
    let temp = x

    if(x < 0){
        return false
    }
    while(x >= 10 ){
        reminder = x % 10;
        reverse_x = (reverse_x *10) + reminder ;
        x = Math.floor(x/10) 
    }

    reverse_x = (reverse_x * 10) + x;
    if(reverse_x === temp){
        return true 
    } else {
        return false
    }
}

console.log(reversePalindrome(121));
