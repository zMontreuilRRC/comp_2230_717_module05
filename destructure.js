// destructuring is a way of extracting values from arrays or objects into variables

//array destructuring
let myArr = ["potato", "cabbage", "durian", 5000];
let [starch, vegetable, fruit, aNumber] = myArr;

// creates variables with values matching the indices
console.log(starch); // expected: "potato"
console.log(aNumber); // expected: "5000"

// Object destructuring
let myObject = {
    a: 1, 
    b: 2, 
    c: {
        nestedA: 50,
        nestedB: 60
    }
};

// create variables that match the key names of the object
const {
    a,
    c: {
        nestedA,
    }
} = myObject;

console.log(nestedA);

