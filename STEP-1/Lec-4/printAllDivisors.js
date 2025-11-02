function printAllDivisors() {
    let num = 36;
    for(let i = 1; i <= num/2 ; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
    console.log(num);
}

printAllDivisors();                // but in this time complexitu is O(n);

function printDivisors() {
    let num = 96;
    let divisors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }
    divisors.sort((a, b) => a - b);      // optional: to print in ascending order
    console.log(divisors);
}
  
printDivisors();                        // In this time complexitu is O(√n);