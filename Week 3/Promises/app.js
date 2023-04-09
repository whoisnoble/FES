const emailRef = document.querySelector('.email');
console.log(emailRef);

console.log(fetch('https://jsonplaceholder.typicode.com/users/1'));

// 1. Then
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response =>{
        return response.json();
    })
    .then(data => {
        emailRef.innerHTML = data.email;
    }
);

// 2. Async/Await
async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();

    console.log(data);
    emailRef.innerHTML = data.email;
};

main();

/* 
    Creating a user promise
*/

function getSubscrpitionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP");
    });
}

async function MainTwo() {
    let status = await getSubscrpitionStatus();
    try {
        console.log(await getVideo(status));
    } catch(e) {
        console.log(e);
    };
}

MainTwo();

/* 
    Fun Challenge for Promises
*/

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video");
        } else if(subscriptionStatus === "FREE") {
            resolve("show trailer");
        } else {
            reject("no video");
        };
    });
};

