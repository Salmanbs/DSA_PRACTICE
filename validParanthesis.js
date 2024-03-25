// Given a string s containing just the characters
//  '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of
//   the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//////////////////////////////////////

//        APPROACH                 //

//1 Create a list of opening bracktes.
//2 Create a mapping of brackets opening and close.
//3 Initialise an empty stack
//4 when u see opening brackets u push it to stack
//5 when u see closing brackets u check if the stack is empty
//iF empty means no opening bracket ans thi
// if not empty u pop from atck and comare it with mapping.
//if mapped value and the closing is not same return false.

//otherwises continue.

/// outside the loop if stack is pty return true otherwise false.



var isValid = function (s) {
  let openingBrackets = ["(", "{", "["];
  let closingBrackets = [")", "}", "]"];

  let mapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if(openingBrackets.includes(s[i])){
        stack.push(s[i])
    } else{
        if(mapping[stack.pop()] !== s[i]){
            return false
        }
    }
  }
  if(stack.length == 0 ){
    return true
  } else{
    return false
  }
};


console.log(isValid('({[]]})'))
