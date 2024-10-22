let isValid = true;
const dataContainerNode = document.querySelector("#data-container");

const buttonNode = document.querySelector("button");

// Promises receive a callback function argument (aka. "Executor")
// executor can take a "resolve" and "reject" argument
// initialized promise state: "Pending"
let myPromise = new Promise(function(resolve, reject) {
    // executor runs immediately when the promise is initialized
    console.log("Initialized promise");

    setTimeout(function() {
    // invoking resolve() completes the promise
        if(isValid) {
            resolve("Pretend we loaded something nice");
        } else {
            reject();
        }
    }, 5000);
});

console.log("Running top-level")

// .then only executes when a promise is resolved
// this only pauses for the code within .then
myPromise.then(
    // resolution callback
    function(result) { dataContainerNode.textContent = result;},
    // rejection callback
    function() { console.log("Promise was Rejected")}
);

buttonNode.addEventListener("click", () => {
    alert("clicked the button")
});

console.log("After promise");