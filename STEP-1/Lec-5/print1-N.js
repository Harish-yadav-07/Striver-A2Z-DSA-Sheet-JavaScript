function print1toN(i , n) {
    if(i > n) return;
    console.log(i);
    print1toN(i + 1, n)
}

print1toN(1, 10);               // Time and space complexity -> O(n)