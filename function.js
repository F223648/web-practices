

//        TASK-1 IIFE   

// for immediate call (function define hote h call hojae ga)
// (function greeting()
// {
//     console.log("hello");
// })();

// //
// let greet = function funt(name){
//     return `Welcome ${name}`;
// };




//        TASK-2



// nameless func
// let name = (namme)=>
// {
//     return `hello ${namme}`;
// }
// // calling nameless
// let greeting = name("Alice");
// console.log(greeting); 



//        TASK-3

// return the elements that are duplicates 
// const findDuplicates = (arr) => {
//     return arr.filter((item, index) => arr.indexOf(item) !== index);
// };

// const arr = [1, 2, 3, 4, 2, 5, 3, 6, 1];
// const duplicates = findDuplicates(arr);
// console.log(duplicates);




//        TASK-4

// let multiply = (a, b) => {
//     return a * b;
// };

// let add = (a, b) => {
//     return a + b; // Changed from a * b to a + b
// };

// OPERAION = FUNCTION
// let manipulator = (a, b, operation) => {
//     return operation(a, b); // Now calls the passed operation
// };

// Example calls
// console.log(multiply(2, 3)); // Output: 6
// console.log(add(2, 3));      // Output: 5

// // Using the manipulator function
// console.log(manipulator(2, 3, multiply)); // Output: 6
// console.log(manipulator(2, 3, add));      // Output: 5

// mult is replaced by arrow function
// console.log(manipulator(2,3,(x,y)=> x*y));



//        TASK-5

// Closure

// function counter()
// {
//     var count = 0 ;

//     return function()
//     {
//         return count++;
//     }
// }

//  let coun = counter();
//  console.log(coun()); // output = 0 
//  console.log(coun()); // output = 1



//        TASK - 6 

//duplication with closure

// function createDuplicateFinder() {
//     let seen = new Set(); // Private variable to track seen items
//     let duplicates = [];   // Private variable to store duplicates

//     return function(arr) {
//         arr.forEach(item => {
//             if (seen.has(item)) {
//                 if (!duplicates.includes(item)) {
//                     duplicates.push(item); // Add to duplicates if not already included
//                 }
//             } else {
//                 seen.add(item); // Add item to seen set
//             }
//         });
//         return duplicates; // Return the list of duplicates
//     };
// }

// const findDuplicates = createDuplicateFinder();

// // Example usage:
// console.log(findDuplicates([1, 2, 3, 2, 4, 3])); // Outputs: [2, 3]
// console.log(findDuplicates([5, 5, 6, 7, 6, 8])); // Outputs: [5, 6]






//        TASK - 7
// reference operator .... can pass multiple values in this function
// let mul = function(...val)
// {
//     return val.reduce((res,curr)=> res * curr,1)
// };

// console.log(mul(1,2,3,4));



// task 8 
// timeout function
//  setTimeout(()=>{console.log(mul(1,2,3,4))},5000);


// task 9
// function generator


