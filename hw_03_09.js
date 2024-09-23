// 1. Create an empty array and log it to the console.

const arr = [];

console.log(arr);
console.log('\n');

// 2. Create an object with three key-value pairs and log it to the console.

const book = {
    "title": "The Lord of the Rings",
    "author": "John Ronald Reuel Tolkien",
};

console.log(book);
console.log('\n');

// 3. Create an array with three elements and log the first element to the console.

const arr_1 = [1, '2', 3];
console.log(arr_1[0]);
console.log('\n');

// 4. Create an object with a nested object inside it and log one of the nested object's
// values to the console.

const worker = {
    "name": {
        "firstName": "John",
        "lastName": "Doe",
    },
    "age": 21,
    "occupation": "programmer"
}

console.log(worker.name.firstName);
console.log('\n');

// 5. Create an array with at least five elements and log its length to the console.

const arr_2 = [1, 2, 3, 5, 9, 5];

console.log(arr_2.length);
console.log('\n');

// 6. Create an object with at least five key-value pairs and log the value of one of its keys
// to the console.

const Interstellar = {
    "Directed by": "Christopher Nolan",
    "Written by": ["Jonathan Nolan", "Christopher Nolan"],
    "Produced by": ["Emma Thomas", "Christopher Nolan", "Lynda Obst"],
    "Starring": [
        "Matthew McConaughey",
        "Anne Hathaway",
        "Jessica Chastain",
        "Bill Irwin",
        "Ellen Burstyn",
        "Michael Caine"
    ],
    "Cinematography": "Hoyte van Hoytema",
    "Edited by": "Lee Smith",
    "Music by": "Hans Zimmer"
};

console.log(Interstellar["Music by"]);
console.log('\n');

// 7. Create an array with at least three elements and an object with at least three
// key-value pairs. Use both the array and object to log a sentence to the console.

const car = ["Seat", "VW", "Audi", "Skoda"];
const model = {
    Seat: "Ibiza",
    VW: "Golf",
    Audi: "A4"
};

console.log(`I have a ${car[0]} and its model is ${model[car[0]]}.`);
console.log('\n');

// 8. Define a function that takes two arguments and returns their sum.

function sumOfTwo(a, b){
    return a+b;
}

const res = sumOfTwo(2, 3);
console.log(res);
console.log('\n');

// 9. Define a function that takes an array as an argument and consoles the second index
// of the array.

function getSecondIndex(arr){
    return arr[1];
}

const arr_3 = [9, 0, 3, 2, 7];
console.log(getSecondIndex(arr_3));
console.log('\n');

// 10. Define a function that takes an object as an argument and consoles the value of the
// second key in the object.

function getSecondValue(obj) {
    const values = Object.values(obj);
    if (values.length >= 2) {
        console.log(values[1]);
    } else {
        console.log("The object does not have a second key!");
    }
}

getSecondValue(Interstellar);
console.log('\n');

// 11. Define a function that takes an array of 3 numbers as an argument and returns the
// sum of all the numbers in the array.

function addValueToEachValueInArray(arr, val){
    for (let i=0; i<arr.length; i++){
        arr[i] += val;
    }
}

addValueToEachValueInArray(arr_3, 3);
console.log(arr_3);
console.log('\n');


// 12. Define a function that receives an object with 2 keys and an array with 2 values.
// The function should console the sum of the second value and the second key.


function sumOfSecondValues(obj, arr){
    console.log(((Object.keys(obj).length >=2 && arr.length >= 2) ? Object.values(obj)[1] + arr[1]: 
    "The object or array does not have at least 2 elements."));
}

const obj_num = {
    firstKey: 1,
    secondKey: 2,
    thirdKey: 3
};

const arr_num = [5,6,3,8];

sumOfSecondValues(obj_num, arr_num);
