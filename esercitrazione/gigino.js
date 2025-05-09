// =====================================================
// Exercise 1: forEach()
// =====================================================
/**
 * Problem: Given an array of numbers, log each number multiplied by 2.
 */

// Data
const numbers1 = [10, 20, 30, 40, 50];

// Exercise: Use forEach to log each number multiplied by 2
function doubleAndLog(array) {
    array.forEach(item => console.log(item * 2));
  }
  
  // Your solution here

// Test your function
console.log("Exercise 1: forEach()");
doubleAndLog(numbers1);
// Should output: 20, 40, 60, 80, 100

// =====================================================
// Exercise 2: map()
// =====================================================
/**
 * Problem: Given an array of people objects, create a new array containing only their full names.
 */

// Data
const people = [
    { firstName: "Mario", lastName: "Rossi", age: 32 },
    { firstName: "Giulia", lastName: "Bianchi", age: 27 },
    { firstName: "Carlo", lastName: "Verdi", age: 45 }
  ];
  
  // Exercise: Use map to create an array of full names
  function getFullNames(peopleArray) {
    return peopleArray.map(person => `${person.firstName} ${person.lastName}`);
    // Your solution here
  }
  
  // Test your function
  console.log("\nExercise 2: map()");
  const fullNames = getFullNames(people);
  console.log(fullNames);
  // Should output: ["Mario Rossi", "Giulia Bianchi", "Carlo Verdi"]
  
  // =====================================================
  // Exercise 3: filter()
// =====================================================
/**
 * Problem: Given an array of numbers, filter out only the even numbers.
 */

// Data
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise: Use filter to get only even numbers
function filterEvenNumbers(array) {
    const evenNumbers = numbers3.filter(function(number) {
        return number & 2 === 0});
    }

  // Your solution here


// Test your function
console.log("\nExercise 3: filter()");
const evenNumbers = filterEvenNumbers(numbers3);
console.log(evenNumbers);
// Should output: [2, 4, 6, 8, 10]

// =====================================================
// Exercise 4: find()
// =====================================================
/**
 * Problem: Given an array of products, find the first product with price less than 20€.
 */

// Data
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Keyboard", price: 80 },
    { name: "Mouse", price: 25 },
    { name: "USB Cable", price: 15 },
    { name: "Monitor", price: 300 }
  ];
  
  // Exercise: Use find to get the first product with price < 20
  function findCheapProduct(products) {
    
    // Your solution here
  }
  
  // Test your function
  console.log("\nExercise 4: find()");
  const cheapProduct = findCheapProduct(products);
  console.log(cheapProduct);
  // Should output: { name: "USB Cable", price: 15 }
  
  // =====================================================