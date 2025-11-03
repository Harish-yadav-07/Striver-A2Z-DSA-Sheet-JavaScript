function printname(name , n) {
    if(n > 5) return;
    console.log(name);
    printname(name, n + 1)
}      
printname("Harish", 1)                      // Time and space complexity -> O(n)

