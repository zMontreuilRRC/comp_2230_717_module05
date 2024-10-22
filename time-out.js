let storedValue = "old";

// invokes the callback after the second argument has elapsed in milliseconds
setTimeout(function() {
    storedValue = "new";  // storedValue = fetch("data.ca")
}, 3000);

console.log("Changing value");
console.log(storedValue);