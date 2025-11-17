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