// Write a function to find the longest common prefix string
// amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


//Approach

//Take the first word to be tha answer.
//Loop through rest of the words.
//Inside the loop check whether indexOf() method returns 0 in a while loop
//If not take out the last character from string. substring(0,lenght - 1)
//if the value is empty means no common prefix
//otherwise the calue after the for llop runs would be the common prefix

const longestCommonPrefix = function (strs) {
  ans = strs[0];
  for(i = 1 ; i < strs.length ;i ++){
    while(strs[i].indexOf(ans) !== 0){
        ans = ans.substring(0,ans.length - 1)
        if(ans  == ''){
            return ''
        }
    }
  } 
  return ans
};
