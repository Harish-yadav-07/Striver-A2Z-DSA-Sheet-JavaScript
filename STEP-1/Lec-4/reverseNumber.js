function ReverseNumber () {
    let number = 7789;
    let ReverseNumber = 0;
    while (number > 0) {
        ReverseNumber = (ReverseNumber * 10) + number % 10;
        number = Math.floor(number / 10);
    }
    console.log(ReverseNumber)
}
ReverseNumber();