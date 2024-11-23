function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"


function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"
