function factorial(n) {
    if(n == 0) return 1;

    return n * factorial(n-1);
}

console.log(factorial(6));




/* execution factorial(6)
= 6 * factorial(5)
= 6 * (5 * factorial(4))
= 6 * (5 * (4 * factorial(3)))
= 6 * (5 * (4 * (3 * factorial(2))))
= 6 * (5 * (4 * (3 * (2 * factorial(1)))))
= 6 * (5 * (4 * (3 * (2 * (1 * factorial(0))))))
= 6 * 5 * 4 * 3 * 2 * 1 * 1
= 720 */