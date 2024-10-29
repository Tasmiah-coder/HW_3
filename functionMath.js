// PROBLEM-write a function called addNumbers that takes two numbers as parameters and returns their sum 

function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(5,10));




// PROBLEM-write a function called sumUpToN that takes a number n and retunrs the sum of all numbers from 1 to n.Use a loop.


let sum =0;
function sumUpToN(n){
    for(let i=1; i<=n; i++){
        sum +=i
    }

    return sum;
}
console.log(sumUpToN(10));




// PROBLEM- write a function called sumArray that takes an array of numbers as a parameter and rerturns the sum of all the numbers in the array
let sum_Array=0;
function sumArray(array){
for(let singleItem of array){
    sum_Array += singleItem;

}
return sum_Array;
}
console.log(sumArray([10,20,30,40,50]));


// PROBLEM-write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array 

 let sum_countEvenNumbers = 0;
 function countEvenNumbers(arr){
    for(let singleItem of arr){
       if( singleItem % 2 === 0){
        sum_countEvenNumbers = sum_countEvenNumbers + singleItem;
       }
    }
    return sum_countEvenNumbers;
 }

 console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9,10]));
 


//  PROBLEM-write a function called stringLength that takes a string as a parameter and returns the length of the string. 

function stringLength(str){
    return str.length
}

console.log(stringLength("Hello World"));


