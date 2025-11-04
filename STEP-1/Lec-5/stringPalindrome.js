function stringPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase(); // clean string
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(stringPalindrome("level"));


// Palindrome strings -> LEVEL, MADAM, STATS, ROTOR...etc.