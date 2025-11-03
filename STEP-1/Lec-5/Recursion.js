function factorial(n) {
  // Base case: stop recursion when n becomes 1
  if (n === 1) {
    return 1;
  }

  // Recursive case: multiply n by factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


let count = 0; // global variable

function counter() {
  // Base case: stop when count reaches 5
  if (count === 5) {
    console.log("Done!");
    return;
  }
  
  // Increment and print count
  console.log(count);
  count++;

  // Recursive call
  counter();
}

counter();
