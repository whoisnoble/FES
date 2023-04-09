
console.log('Script is linked!');

/* 
    Question 1: Show rating
*/

function showRating(rating) {
    let ratings = "";

    for (let i = 0; i < Math.floor(rating); i++) {
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        };
    };

    if (!Number.isInteger(rating)) {
        ratings = ratings += " .";
    };

    return ratings;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

console.log("------------------------");

/*
    Question 2: Sort Low to High
*/

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
};

console.log(sortLowToHigh([1, 5, 0, 10, 4]));

console.log("------------------------");

/* 
    Question 3: Sort by highest to lowest price
*/

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => {
        return b.price - a.price;
    });
};

console.log(sortHighToLow([
    {
        id: 1, price: 50
    },
    {
        id: 2, price: 0
    },
    {
        id: 3, price: -500
    }
]))

console.log("------------------------");

/* 
    Question 4: Promises (No longer needed)
*/

/*
    Question 5: Find all the posts by a single user
*/

async function postsByUser(userId) {
    // fetch api
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // return results
    return data.filter(elem => elem.userId === userId);
};

postsByUser(4);

/* 
    Question 6: Find incomplete todos
*/

async function firstSixIncomplete() {
    // fetch api
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json();

    // return results
    return data.filter(elem => !elem.completed).slice(0, 6);
};

console.log(firstSixIncomplete());