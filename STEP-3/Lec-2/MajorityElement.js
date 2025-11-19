function majorityElement(arr) {
    // Size of the given array
    const n = arr.length;

    // Creating a Map
    const map = new Map();

    // Storing the elements with their occurrences
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    // Searching for the majority element
    for (const [num, count] of map) {
        if (count > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const ans = majorityElement(arr);
console.log("The majority element is:", ans);

// Optimal approach -> using Moore's Algorithm 
function majorElem(arr) {
    let elem = null;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (count === 0) {
            elem = arr[i];
            count++;
        } else if (arr[i] == elem) {                // time -> O(n)
            count++;                                // space -> O(1)
        } else {
            count--;
        }
    }
    let frequency = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elem) frequency;
    }
    return elem;
}
console.log(`The majority element is: ${majorElem([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5])}`);