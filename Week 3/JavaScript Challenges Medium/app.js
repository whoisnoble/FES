
console.log("Script is Linked!")

/*
    Question 1: Falsy or Truthy?
*/

function filterOutFalsy(value1, value2) {
    return !value1 ? value1 : value2;
};

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, 'Dog'));

console.log("------------------------");

/*
    Question 2: Return the length of any given array
*/

function arrLength(array) {
    return array.length;
};

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

console.log("------------------------");

/* 
    Question 3: Get last element of an array
*/

function lastElement(array) {
    return array[array.length - 1];
};

console.log(lastElement([1, 2, 3]));
console.log(lastElement([5, 0, -4, 1]));
console.log(lastElement([]));

console.log("------------------------");

/* 
    Question 4: Find the sum of an array
*/

function arrSum(array) {
    finalNum = 0;
    for(let i = 0; i < array.length; i++) {
        finalNum += array[i];
    };
    return finalNum;
};

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

console.log("------------------------");

/* 
    Question 5: Add up the numbers from a single number
*/

function progressiveSum(number) {
    finalNum = 0;
    for(let i = 1; i <= number; i++) {
        finalNum += i;
    };
    return finalNum;
};

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));


console.log("------------------------");

/* 
    Question 6: Calculate the Time
*/

function calcTime(number) {
    // get numbers
    let minutes = Math.floor(number/60);
    let seconds = number % 60;

    // format numbers
    return `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
};

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

console.log("------------------------");

/* 
    Question 7: Find the largest number
*/

function getMax(array) {
    largestNum = array[0]; 
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largestNum)
            largestNum = array[i];
    };
    return largestNum;
};

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

console.log("------------------------");

/* 
    Question 8: Reverse a string
*/

function reverseString(string) {
    text = "";
    for(let i = string.length; i > 0; i--) {
        text += string[i-1];
    };
    return text;
}

console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));

console.log("------------------------");

/* 
    Question 9: Turn every elemnt in an array into 0
*/

function convertToZeros(array) {
    array = array.map(element => {
        return 0;
    });
    return array;
};

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

console.log("------------------------");

/* 
    Question 10: Filter out all the apples
*/

function removeApples(array) {;
    return array.filter(element => element != "Apple");
};

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples(['Tomato', 'Orange', 'Banana']));
console.log(removeApples(['Banana', 'Orange', 'Apple']));

console.log("------------------------");

/*
    Question 11: Filter out all the falsy values
*/

function removeFalsy(array) {;
    return array.filter(element => !!element);
};

console.log(removeFalsy(["", [], 0, null, undefined, "0"]));
console.log(removeFalsy(['Tomato', 'Orange', 'Banana', false]));
console.log(removeFalsy(['Banana', 'Orange', 'Apple']));

console.log("------------------------");

/*
    Question 12: Truthy to true, Falsy to false
*/

function convertToBoolean(array) {
    return array.map(elem => !!elem)
};

console.log(convertToBoolean([500, 0, "David", "", []]));