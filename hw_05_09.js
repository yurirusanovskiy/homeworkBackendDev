// 1. Write a JavaScript function to check whether an `input` is an array or not.

function is_array(lst){
    return lst instanceof Array
}

// Test Data :
console.log('task_1');
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log('\n');
// false
// true

// 2. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return
// the first 'n' elements of the array.

function first(lst, n = 1) {
    if (n < 0) return [];
    if (n === 1) return lst[0];
    return lst.slice(0, n);
}

console.log('task_2');
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log('\n');

// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// 3.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return
// the last 'n' elements of the array.

function last(lst, n=0){
    if (n === 0) return lst[lst.length-1];
    return lst.slice(0, n+1);
}

// Test Data :
console.log('task_3');
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log('\n');
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// 4.Write a simple JavaScript program to join all elements of the following array into a string. Sample
array : myColor = ["Red", "Green", "White", "Black"];

function stringifyArray(lst, s){
    return lst.join(s);
}

console.log('task_4');
console.log(stringifyArray(myColor, ","));
console.log('\n');

// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// “Red+Green+White+Black"

// 5.Write a JavaScript program which accept a number as input and insert dashes (-) between each
// two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

console.log('task_5');

function getFormattedNumber(num) {
    let res = num[0];
    for (let i = 0, j = 1; j < num.length; i++, j++) {
        if (num[i] % 2 === 0 && num[j] % 2 === 0) {
            res += '-';
        }
        res += num[j];
    }
    return res;
}

let num = "025468";
console.log(getFormattedNumber(num));  // Output: "0-254-6-8" 
console.log('\n');

// 6. Write a JavaScript program to find the most frequent item of an array.
array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log('task_6');

function getMostFrequentItem(arr){
    const res = {};
    for (let el of arr) {
        if (!res[el]) {
            res[el] = 1;
        } else {
            res[el]++;
        }
    }

    const vals = Object.values(res);
    const keys = Object.keys(res);
    const len = vals.length;
    let imax_c = 0;

    for (let i = 0; i < len; i++) {
        if (vals[imax_c] < vals[i]) {
            imax_c = i;
        }
    }
    
    return `${keys[imax_c]} ( ${vals[imax_c]} times )`;
}

console.log(getMostFrequentItem(arr1));
console.log('\n');

// Sample Output : a ( 5 times )

// 7.There are two arrays with individual values, write a JavaScript program to compute the sum of
// each individual index value from the given arrays. Go to the editor
console.log('task_7');

function sumArrays(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    let resArr = [];
    for (let i = 0; i < maxLength; i++) {
        const val1 = arr1[i] !== undefined ? arr1[i] : 0;
        const val2 = arr2[i] !== undefined ? arr2[i] : 0;
        resArr.push(val1 + val2);
    }
    return resArr;
}

// Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

console.log(sumArrays(array1, array2));
console.log('\n');
// Expected Output :
// [4, 5, 8, 10, 12, 13]
