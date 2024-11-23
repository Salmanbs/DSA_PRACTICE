// Reverse number in js (By 3 type) Using while loop, 
// Using forloop, Using split join function	Find the Missing Number in an Array


const reverseWhile = (number) => {
    let reversed = '';
    while (number > 0){
        console.log(number,'number')
        const rem = number % 10;
         number =Math.floor(number / 10);
        reversed = reversed + rem
    }
    return parseInt(reversed);
}

function reverseNumberFor(num) {
    let str = num.toString();
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return parseInt(reversed);
}
console.log(reverseNumberFor(12345)); // Output: 54321


function reverseNumberSplitJoin(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumberSplitJoin(12345)); // Output: 54321


console.log(reverseWhile(125))