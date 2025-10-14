// Count digits

function countDigits() {
    let number = 7789;
    let counter = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        counter++;
    }
    console.log(counter);
}
countDigits();
