
/*
    Converting Temperatures
*/ 

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/* 
    Difference between == and ===
*/

let bool = '1' == 1 // true because the values match
let boool = '1' === 1 // false because types don't match

console.log(bool, boool)

/* 
    bool checks i guess
*/

let subscribed = false;
let loggedIn = true;

if(subscribed === true) {
    console.log('show the video');
} else if (loggedIn === true) {
    console.log('tell the user to upgrade their subscription');
} else {
    console.log('tell user to log into their own account.');
}

/* 
    testing out if statements and learning how to use code in text
*/

let cash = 40;
let price = 40;
let difference = cash - price;

if (cash > price) {
    console.log(`you paid extra - here's ${cash-price} your change`)
} else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
} else {
    console.group(`not enough money, you still owe ${price-cash}`);
};

/* 
    store stuff
*/

cash = 50
price = 40
let isStoreOpen = true

if(cash >= price && isStoreOpen) {
    console.log("print the receipt")
}

/* 
    terny op
*/

let hot = false

hot ? console.log("its hot") : console.log("it is not hot")

/* 
    coding problem to solve

    task:
        print give receipt if store is open and you have enough money
        dont give receipt if we don't have enough money or if the store is not open

    i just wrote it with terny operators because i am lazy
*/

cash = 50
price = 40
isStoreOpen = true
 
hasReciept = cash > 40 && isStoreOpen ? "Thank you for purchasing, here's your item!" : !isStoreOpen ? "Store is not open! cannot purchase item" : cash < price ? "Cannot give item, not enough money" : "cannot purcahse item, store isn't open but you have enough money."

console.log("--------------------------");
/* 
    this is for loops section
*/

for (let i = 0; i != 5; i++) {
    console.log(i+1);
};

/* 
    Coding Challenge for for-loops
*/

for(let i = 1; i <= 20; i++) {
    if(i % 3 > 0 && i % 5 > 0) {
        console.log(`Not Divisible by Both Numbers: ${i}`);
    } else if(i % 3 === 0 && i % 5 === 0) {
        console.log(`Frontend Simplified`)
    } else if(i % 3 === 0) {
        console.log(`Frontend`);
    } else if(i % 5 === 0) {
        console.log(`Simplified`);
    };
}

console.log("--------------------------");

"Frontend Simplified".split("").forEach(element => {
    console.log(element)
});

const str = "Frontend Simplified"

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log("--------------------------");

/* 
    Functions
*/

function welcomePersonToFES(firstName, lastName) {
    console.log(`Welcome to FES, ${firstName} ${lastName}!`)
}

welcomePersonToFES(`Charles`, 'Mendez');

function fn() {
    return "my return";
}

console.log(fn());

/* 
    Create a Function that converts Celsius to Fahrenheit
*/

const celesiusToFahrenheitOne = (celesius) => {
    return celesius * 1.8 + 32;
};

console.log(celesiusToFahrenheitOne(0));
console.log(celesiusToFahrenheitOne(10));
console.log(celesiusToFahrenheitOne(30));

function celesiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
};

console.log(celesiusToFahrenheit(0));
console.log(celesiusToFahrenheit(10));
console.log(celesiusToFahrenheit(30));

console.log("--------------------------");
/*
    Array Section
*/

let arr = [20, 30, 40, 50, 100];

console.log(arr[arr.length - 1]);
arr.push(200);

let newArr = arr.filter(element => {
    return element < 50;
});

let newArr2 = arr.filter(element => element >= 50);

console.log(newArr);
console.log(newArr2);

/* 
    Filter Failed Grades Challenge
*/

let grades = ['A+', 'A', 'FAIL']

let filteredOne = grades.filter(element => element !== "FAIL");
let filteredTwo = grades.filter(element => {
    return element !== "FAIL";
});

console.log(filteredOne, filteredTwo);

/* 
    Filter Failed Grades Challenge NO FILTER METHOD
*/

grades = ['A+', 'A', 'FAIL']

let newGrades = [];

for(let i = 0; i < grades.length; i++) {
    if (grades[i] !== "FAIL")
        newGrades.push(grades[i]);
};

console.log(newGrades);

/* 
    Arr map
*/

arr =  [1, 4, 9, 16];

newArray = arr.map((element) => {
    console.log(element);
    return undefined;
});

console.log(newArray);

/* 
    Dollars to Cents
*/

let dollars = [1, 5, 10, 3];

newArray = dollars.map(element => {
    return element * 100;
});

newArrayOne = dollars.map(element => element * 100);

newArrayTwo = [];
for(let i = 0; i < dollars.length; i++) {
    newArrayTwo.push(dollars[i]*100);
};

console.log(newArray, newArrayOne, newArrayTwo);

/* 
    Objects
*/

let users = [
    {
        username: "David",
        email: "david@fes.com",
        password: 'password',
        subscriptionStatus: 'VIP',
        discordId: 'David Bragg#0001',
        lessonsCompleted: [
            0, 1
        ]
    },
    {
        username: "Mitri",
        email: "mitri@fes.com",
        password: 'password',
        subscriptionStatus: 'VIP',
        discordId: 'Mitri#0001',
        lessonsCompleted: [
            0, 1
        ]
    }
]

function login(email, password) {
    for(let i = 0; i < users.length; i++) {
        console.log('this ran!!')
        if(users[i]['email'] === email) {
            if(users[i]['password'] === password) {
                console.log('log the users in, the creds are correct')
            } else {
                console.log('password is incorrect, try again')
            };
            return;
        };
    };
    console.log(`this email does not exist?!`);
};

login('david@fes.com', 'password')

/* 
    Register Challenge
*/

// stores the users
users = [];

function registerUser(username, email, password, subscriptionStatus, discordId, lessonsCompleted) {
    users.push({
        username: username,
        email: email,
        password: password,
        subscriptionStatus: subscriptionStatus,
        discordId: discordId, 
        lessonsCompleted: lessonsCompleted
    });
    console.log(users);
};

// register a user
registerUser('noble', 'noble@example.com', 'password', 'VIP', 'noble#0709', []);

/* 
    DOM (Document Object Model)
*/

console.log(document.querySelector('#title'));

console.log(document.getElementById('title'));

document.querySelector('.title').innerHTML += " Frontend Simplified";

let a = 1;
a = a + 2;

console.log(a);


function changeTitleToRed() {
    console.log('clicked');
    document.querySelector('.title').style.color = 'red';
};

function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme')
}