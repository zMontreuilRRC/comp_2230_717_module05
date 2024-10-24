async function getData() {
    return new Promise((resolve, reject) => {
        console.log("Sent request");
        setTimeout(() => {
            reject(
                {
                    response: 200, 
                    value: {first: true, second:false}
                }
            );
        }, 1000);
    });
}

// async functions can make use of the await keyword
async function useData() {
    console.log("Invoked useData");
    // await will "pause" the function until the awaited promise is resolved
    // the argument of resolve() will be assigned to the variable automatically
    try {
        const receivedData = await getData();
        
        console.log(`Received data: ${receivedData["response"]}`);
        // async functions always return their values as promise resolutions
        return 3;
    } catch(e) {
        console.log("Rejected")
    }
}

// returned data from an async function is "thenable"
try{ 
    let response = useData().then(result => console.log(result));
} catch(e) {
    console.log("rejected");
}
