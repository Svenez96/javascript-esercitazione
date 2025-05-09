/**
 * JavaScript Array Methods Exercises
 * 
 * This file contains 10 exercises to practice the following array methods:
 * 1. forEach() - Execute a function for each array element
 * 2. map() - Create a new array with the results of calling a function on every element
 * 3. filter() - Create a new array with elements that pass a test
 * 4. find() - Return the first element that passes a test
 * 5. reduce() - Reduce the array to a single value by running a function on each element
 * 6. sort() - Sort the elements of an array
 * 7. push() - Add new elements to the end of an array
 * 8. join() - Join all elements of an array into a string
 * 9. findIndex() - Return the index of the first element that passes a test
 * 10. splice() - Add/remove elements from an array
 */

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
  const names = people.map ((person)=> `${person.firstName} ${person.lastName}`);
 
  console.log(names);
}


// Test your function

// const fullNames = getFullNames(people);
// console.log(fullNames);
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
  return array.filter (number => number %2 === 0) 
}

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
   return products.find (product => product.price < 20 )
}

// Test your function
console.log("\nExercise 4: find()");
const cheapProduct = findCheapProduct(products);
console.log(cheapProduct);
// Should output: { name: "USB Cable", price: 15 }

// =====================================================
// Exercise 5: reduce()
// =====================================================
/**
 * Problem: Calculate the total sales amount from an array of transactions.
 */

// Data
const transactions = [
  { id: 'T1', amount: 150 },
  { id: 'T2', amount: 230 },
  { id: 'T3', amount: 50 },
  { id: 'T4', amount: 175 }
];

// Exercise: Use reduce to calculate the total sales amount
function calculateTotalSales(transactions) {
  return transactions.reduce ((sum, transaction) => sum + transaction.amount ,0)
};

// Test your function
console.log("\nExercise 5: reduce()");
const totalSales = calculateTotalSales(transactions);
console.log(totalSales);
// Should output: 605

// =====================================================
// Exercise 6: sort()
// =====================================================
/**
 * Problem: Sort an array of students by their grade, from highest to lowest.
 */

// Data
const students = [
  { name: "Luca", grade: 85 },
  { name: "Marco", grade: 92 },
  { name: "Anna", grade: 78 },
  { name: "Sofia", grade: 95 },
  { name: "Paolo", grade: 88 }
];

// Exercise: Use sort to order students by grade (highest to lowest)
function sortStudentsByGrade(students) {
  return students.sort((a , b) =>  b.grade - a.grade);
}

// Test your function
console.log("\nExercise 6: sort()");
const sortedStudents = sortStudentsByGrade(students);
console.log(sortedStudents);
// Should output: Students array sorted by grade (highest first)

// =====================================================
// Exercise 7: push()
// =====================================================
/**
 * Problem: Implement a function that adds new items to a shopping list
 * and returns the number of items in the updated list.
 */

// Data
let shoppingList = ["milk", "bread", "eggs"];

// Exercise: Use push to add items to the shopping list
function addItemsToList(list, ...newItems) {
  list.push(...newItems)
}

// Test your function
console.log("\nExercise 7: push()");
const newLength = addItemsToList(shoppingList, "apples", "cheese", "chocolate");
console.log("New list length:", newLength); // Should output: 6
console.log("Updated shopping list:", shoppingList); 
// Should output: ["milk", "bread", "eggs", "apples", "cheese", "chocolate"]

// =====================================================
// Exercise 8: join()
// =====================================================
/**
 * Problem: Convert an array of words into a sentence, 
 * separating each word with a space and ending with a period.
 */

// Data
const words = ["JavaScript", "is", "a", "powerful", "language"];

// Exercise: Use join to create a sentence
function createSentence(wordsArray) {
  return wordsArray.join(" ");
  // Your solution here
}

// Test your function
console.log("\nExercise 8: join()");
const sentence = createSentence(words);
console.log(sentence);
// Should output: "JavaScript is a powerful language."

// =====================================================
// Exercise 9: findIndex()
// =====================================================
/**
 * Problem: Find the position of the first element in an array of numbers
 * that is divisible by 5.
 */

// Data
const numbers9 = [12, 7, 14, 35, 8, 22, 10, 9];

// Exercise: Use findIndex to find the position of the first number divisible by 5
function findDivisibleByFive(array) {
  return array.findIndex (number => number % 5 === 0 );
}

// Test your function
console.log("\nExercise 9: findIndex()");
const index = findDivisibleByFive(numbers9);
console.log("Index of first number divisible by 5:", index);
// Should output: 3 (because numbers9[3] is 35, which is divisible by 5)

// =====================================================
// Exercise 10: splice()
// =====================================================
/**
 * Problem: Implement a function that removes elements from an array
 * starting at a specified index and replaces them with new elements.
 */

// Data
const colors = ["red", "green", "blue", "yellow", "orange"];

// Exercise: Use splice to remove elements and insert new ones
function replaceElements(array, startIndex, deleteCount, ...newElements) {
  return array.splice (startIndex, deleteCount, ...newElements)
}

// Test your function
console.log("\nExercise 10: splice()");
const removedElements = replaceElements(colors, 1, 2, "purple", "pink");
console.log("Removed elements:", removedElements); // Should output: ["green", "blue"]
console.log("Modified array:", colors); // Should output: ["red", "purple", "pink", "yellow", "orange"]

/**
 * Bonus Exercise: Chain multiple array methods together
 * 
 * Problem: Given an array of numbers, perform the following operations in a single chain:
 * 1. Filter out the odd numbers
 * 2. Double the remaining even numbers
 * 3. Sort them in descending order
 * 4. Get the sum of the resulting values
 */

// Data
const numbersBonus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise: Chain filter, map, sort, and reduce together
function processNumbers(array) {

}

// Test your function
console.log("\nBonus Exercise: Chaining multiple array methods");
const result = processNumbers(numbersBonus);
console.log("Result of chained operations:", result);
// Should output: 60 (from 2*2 + 4*2 + 6*2 + 8*2 + 10*2 = 4 + 8 + 12 + 16 + 20 = 60)