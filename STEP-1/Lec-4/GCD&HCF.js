function gcd(a, b) {
    while(a > 0 && b > 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    if (a == 0) return b;
    return a;
}

console.log(gcd(56, 20));                   // Time Complexity -> O(log(min(a, b))) Space -> O(1)