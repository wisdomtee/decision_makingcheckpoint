function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.slice(1, -1));
    }
}

// Test the function
let string = prompt("Enter a string:");
if (isPalindrome(string)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
