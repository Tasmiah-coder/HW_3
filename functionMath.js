// PROBLEM-write a function called addNumbers that takes two numbers as parameters and returns their sum 

function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(5,10));




// PROBLEM-write a function called sumUpToN that takes a number n and retunrs the sum of all numbers from 1 to n.Use a loop.


let sum = 0;

function sumUpToN(n){
    for(i=1; i<= n, i++ ;){
     sum += i
    }
    return sum;
}

console.log(sumUpToN(10));


// PROBLEM- write a function called sumArray that takes an array of numbers as a parameter and rerturns the sum of all the numbers in the array

