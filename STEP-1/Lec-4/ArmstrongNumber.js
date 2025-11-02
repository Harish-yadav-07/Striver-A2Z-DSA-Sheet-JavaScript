function armstrongNumber() {
    let number  = 153;
    let sum = 0;
    let duplicate = number;
    while(number > 0) {
        let lastDigit = number % 10;
        let cube = lastDigit ** 3;
        sum += cube;    
        number = Math.floor(number/10);
    }
    if (sum == duplicate) {
        console.log("true");
    } else {
        console.log("false")
    }
}

armstrongNumber();