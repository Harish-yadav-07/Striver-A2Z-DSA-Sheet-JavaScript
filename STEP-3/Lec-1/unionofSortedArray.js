// Brute-force approach

function unionOfSortedArrays(arr1, arr2) {
    let mySet = new Set();
    for(let i = 0; i < arr1.length; i++){
        mySet.add(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        mySet.add(arr2[i]);
    }
    return [...mySet].sort((a, b) => a - b);
}
console.log(unionOfSortedArrays([1,2,3,2,2,3,4,5,5,3,6], [1,2,4,4,5,7,7,8,9,10]));

// Optimal approach

function optimal(a, b) {
    let i = 0, j = 0, r = [];

    const push = v => {
        if (!r.length || r[r.length - 1] !== v) r.push(v);
    };

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) push(a[i++]);
        else if (b[j] < a[i]) push(b[j++]);
        else push(a[i++]), j++;
    }

    while (i < a.length) push(a[i++]);
    while (j < b.length) push(b[j++]);

    return r;
}

console.log(optimal(
    [1,2,2,2,3,3,4,4,5],
    [1,2,3,3,6,7,3,8,9,10,11]
));
