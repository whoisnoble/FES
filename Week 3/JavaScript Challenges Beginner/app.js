
console.log("Script File is Linked!");

/*
    Question 1: Addition Script
*/

function addition(num1, num2) {
    return num1 + num2;
};

console.log(addition(-6, -9));
console.log(addition(6, 9));

console.log("------------------------");

/* 
    Question 2: Hours to Seconds
*/

function hoursIntoSeconds(hour) {
    return hour * 3600;
};

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

console.log("------------------------");

/* 
    Question 3: Perimeter of a Rectangle
*/

function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
};

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

console.log("------------------------");

/* 
    Question 4: Calculate the Area of a Triangle
*/

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
};

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

console.log("------------------------");

/* 
    Question 5: Extend String

    AMAZING TIP: +number (i guess casts the variable into a number to make sure it is a number)
*/

function appendFrontend(word) {
    return word += "Frontend"
};

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

console.log("------------------------");

/*
    Question 6: Greater than 100
*/

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
};

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

console.log("------------------------");

/* 
    Question 7: Less than or Equal to Zero?
*/

function lassThanOrEqualToZero(number) {
    return number <= 0;
};

console.log(lassThanOrEqualToZero(3));
console.log(lassThanOrEqualToZero(0));
console.log(lassThanOrEqualToZero(-2));

console.log("------------------------");

/* 
    Question 8: Opposite Boolean
*/

function oppositeBoolean(bool) {
    return !bool; 
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

console.log("------------------------");

/* 
    Question 9: Is not the number 0
*/

function isNotZero(element) {
    return element !== 0;
};

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

console.log("------------------------");

/* 
    Question 10: Calculate the Remainder
*/

function calcRemainder(num1, num2) {
    return num1 % num2;
};

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

console.log("------------------------");

/* 
    Question 11: Is the number odd?
*/

function isOdd(number) {
    return number % 2 !== 0;
};

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

console.log("------------------------");

/* 
    Question 12: If a number is even, return 1 otherwise return -1
*/

function booleanInteger(number) {
    return number % 2 === 0 ? 1 : -1;
};

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

console.log("------------------------");

/* 
    Question 13: Check if a user is logged in AND subscribed
*/

function isLoggedinAndSubscribed(loginStatus, subscribeStatus) {
    return loginStatus === "LOGGED_IN" && subscribeStatus === "SUBSCRIBED"
}

console.log(isLoggedinAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedinAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedinAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

console.log("------------------------");