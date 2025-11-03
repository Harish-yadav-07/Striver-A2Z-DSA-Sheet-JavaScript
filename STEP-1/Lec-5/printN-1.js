function printNto1(i) {
    if(i < 1) return;
    console.log(i);
    printNto1(i - 1);
}

printNto1(10);                       // Time and space complexity -> O(n)