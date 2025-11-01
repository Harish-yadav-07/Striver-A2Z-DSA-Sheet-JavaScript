function palindrome() {
    let number = 1001001;
    let ReverseNumber = 0;
    let dup = number;
    while (number > 0) {
        ReverseNumber = (ReverseNumber * 10) + number % 10;
        number = Math.floor(number / 10);
    }
    if (dup == ReverseNumber) {
        console.log("true")
    } else {
        console.log("false")
    }
}
palindrome();