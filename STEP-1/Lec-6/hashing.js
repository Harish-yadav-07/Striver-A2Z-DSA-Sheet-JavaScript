// A simple hash function that sums the ASCII values of characters in a string --> Collision problem
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i); // get ASCII value of each character
  }
  return hash;
}

console.log(simpleHash("abc")); // 294

