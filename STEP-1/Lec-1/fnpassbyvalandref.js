// Pass by Value (for primitives)
function modifyPrimitive(x) {
    x = x + 10;
    console.log("Inside function (primitive):", x);
}

let num = 5;
modifyPrimitive(num);
console.log("Outside function (primitive):", num); // num is unchanged

// Pass by Reference (for objects)
function modifyObject(obj) {
    obj.value = obj.value + 10;
    console.log("Inside function (object):", obj);
}

let myObj = { value: 5 };
modifyObject(myObj);
console.log("Outside function (object):", myObj); // myObj is changed