// Pattern 1: Square Pattern
function pattern1() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < 5; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// Pattern 2: Left Right-angle triangle pattern
function pattern2() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// Pattern 3: Left digits increasing pattern
function pattern3() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

// Pattern 4: Left same digits pattern
function pattern4() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row);
    }
}

// Pattern 5: Inverted left right-angle triangle pattern
function pattern5() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 5; j >= i; j--) {
            row += "* ";
        }
        console.log(row);
    }
}

// Pattern 6: Inverted left right-angle digits pattern
function pattern6() {
    for (let i = 5; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

// Pattern 7: Triangle pattern
function pattern7() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < 5 - i - 1; j++) row += " ";
        for (let j = 0; j < 2 * i + 1; j++) row += "*";
        for (let j = 0; j < 5 - i - 1; j++) row += " ";
        console.log(row);
    }
    console.log("Triangle Printed!");
}

// Pattern 8: Inverted Triangle pattern
function pattern8() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < i; j++) row += " ";
        for (let j = 0; j < 2 * 5 - (2 * i + 1); j++) row += "*";
        for (let j = 0; j < i; j++) row += " ";
        console.log(row);
    }
    console.log("Inverted Triangle Printed!");
}

// Pattern 9: Diamond Pattern
// Combining Pattern 7 and Pattern 8

// Pattern 10: Left Arrow Pattern
function pattern10() {
    let n = 5;

    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = "";
        let stars = i <= n ? i : 2 * n - i; // increase then decrease
        for (let j = 1; j <= stars; j++) {
            row += "* ";
        }
        console.log(row);
    }

}
  
// Pattern 11: Left-right angle triangle numbers pattern (1 01 101 0101 10101)
function pattern11() {
    let n = 5; 
    for (let i = 0; i < n; i++) {
        let start;
        if(i % 2 === 0 ) start = 1;
        else start = 0;
        let row = "";
        for(let j = 0; j <= i; j++){
            row += start + " ";
            start = 1 - start;
        }
        console.log(row);
    }
}

// Pattern 12: left and right numbers with spaces.
function pattern12() {
    let n = 5;
    let space = 2 * (n - 1);
    for(let i = 1; i <= n; i++){

    }
}

//call a pattern
// pattern1();
// pattern2();
// pattern3();
// pattern4();
// pattern5();
// pattern6();
// pattern7();
// pattern8();
// pattern10();
// pattern11();
// pattern12();