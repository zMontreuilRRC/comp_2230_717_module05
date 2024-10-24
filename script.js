// API : "Application Programming Interface"
// RESTful APIs: Representational State Transfer (JSON)
// Means for two programs to talk to each other
// SOAP: Simple Object Access Protocol (XML)

// Interfaces: means of adding input or receiving output
// GUI (Graphical User Interface): modern computers
// Steering wheel / pedals / dashboard : car
// CLI (Command Line Interface): 

// "Endpoint": the location for accessing resources in a specific way
const countriesEndpoint = "https://restcountries.com/v3.1/all";

async function makeRequest(endpoint) {
    // function will stop running until the promise that we create is resolved
    // fetch: JavaScript Application Programming Interface (API) for making HTTP requests
    // by default, creates HTTP GET request to URL argument
    // resolves when the response is received
    try {
        const response = await fetch(endpoint);
        
        // boolean for response code in 200s rang
        if(!response.ok) {
            // new keyword means an object is being instantiated
            throw new Error(`Http error: ${response.status}`);
        }

        // parse the response object into a JavaScript Object
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}

// append all country names and populations to the ul
async function listCountries() {
    const countryUlNode = document.querySelector("#data-container");
    
    document.querySelector("#loading-message").remove();

    // async function returns its value as a promise resolution
    const countries = await makeRequest(countriesEndpoint);

    //iterate over all country objects
    // append to ul
    countries.forEach(country => {
        console.log(country);
        const countryName = country["name"]["official"];

        const newLiNode = document.createElement("li");
        newLiNode.textContent = countryName;
        countryUlNode.appendChild(newLiNode);
    });
}

listCountries();