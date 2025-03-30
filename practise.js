// ====================================
// 🚀 JavaScript Essentials
// ====================================

// 📌 1. Variables: let & const
let a = 'nandha'; // Mutable
a = 'raja';

const b = 'nandha'; // Immutable
// b = 'raja'; // Error: Assignment to constant variable

console.log(a, b);

// ====================================
// 📌 2. Functions: Traditional & ES6
// ====================================

// Traditional Function
function sum(a, b) {
  return a + b;
}

// ES6 Arrow Function
const sumArrow = (a, b) => a + b;

console.log(sum(4, 2), sumArrow(2, 4));

// ====================================
// 📌 3. Object & Array Destructuring
// ====================================

const object = { name: 'raja', age: 25 };
let { name, age } = object;

console.log(typeof name, typeof age);
console.log(name, age);

// Array Destructuring
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let [element1, element2] = fruits;

console.log(element1, element2);

// ====================================
// 📌 4. For-Of Loop
// ====================================

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car);
}

const language = "JavaScript";
for (let letter of language) {
  console.log(letter);
}

// ====================================
// 📌 5. Map & Set Objects
// ====================================

// Map Object
const fruitMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruitMap);
console.log(fruitMap.get("apples"));

// Set Object (No Duplicates)
const carSet = new Set();
carSet.add("BMW").add("BMW").add(["cars", "BMW"]);

console.log(carSet);

// ====================================
// 📌 6. Spread Operator (...)
// ====================================

const dukeBaseObject = {
  brand: 'KTM',
  model: 'Duke',
  color: 'Black'
};

const duke200 = { ...dukeBaseObject, engine: 200, color: 'Orange' };
const duke250 = { ...dukeBaseObject, engine: 250, color: 'Grey' };
const duke390 = { ...dukeBaseObject, engine: 390 };

console.log(duke200);
console.log(duke250);
console.log(duke390);

// ====================================
// 📌 7. Array Methods: slice() & splice()
// ====================================

let carList = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];

// slice(start, end) - Returns new array
let newCarList = carList.slice(0, 4);
console.log(newCarList);

// splice(index, deleteCount, item1, item2, ...) - Modifies array
carList.splice(0, 1, 'BMW');
carList.splice(2, 2, 'BMW', 'Mini');

console.log(carList);

// ====================================
// 📌 8. String Methods
// ====================================

let str = 'helloworld';
console.log(str.includes('h'));  // true
console.log(str.startsWith('h')); // true
console.log(str.endsWith('d'));  // true

// ====================================
// 📌 9. Array Methods: entries(), from(), keys()
// ====================================

// entries() - Converts to Key-Value Pair
const fruitEntries = fruits.entries();
for (let fruit of fruitEntries) {
  console.log(fruit);
}

// from() - Creates an array from a string
let newArray = Array.from("raja");
console.log(newArray);

// keys() - Extracts keys of an array
const keys = fruits.keys();
for (let key of keys) {
  console.log(key);
}

// ====================================
// 📌 10. Finding Elements: find() & findIndex()
// ====================================

const fruitList = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruitList.find(value => value.startsWith('O')));
console.log(fruitList.findIndex(value => value.startsWith('O')));

// ====================================
// 📌 11. Math Functions
// ====================================

console.log(Math.trunc(4.9), Math.trunc(4.2), Math.trunc(-4.2));
console.log(Math.sign(-4), Math.sign(0), Math.sign(4));
console.log(Math.cbrt(8));
console.log(Math.log2(2));
console.log(Math.log10(10));

// ====================================
// 📌 12. Number Functions
// ====================================

console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isInteger(10));
console.log(Number.isSafeInteger(10));
console.log(Number.isFinite(10));
console.log(Number.isNaN('raja'));

// ====================================
// 📌 13. Higher Order Array Methods: map(), filter(), reduce()
// ====================================

const numbers = [1, 2, 3, 4, 5];

// map() - Multiply each element by 2
console.log(numbers.map(number => number * 2));

// filter() - Get even numbers
console.log(numbers.filter(number => number % 2 === 0));

// reduce() - Sum of Elements
console.log(numbers.reduce((prev, curr) => prev + curr));

// ====================================
// 📌 14. Synchronous vs Asynchronous Execution
// ====================================

// 🟢 Synchronous Example
console.log("Start");

function syncTask() {
  console.log("Performing synchronous task...");
  for (let i = 0; i < 3; i++) {
    console.log(`Task step ${i + 1}`);
  }
  console.log("Synchronous task completed.");
}

syncTask();

console.log("End");

// 🟢 Asynchronous Example using Callback
console.log("Start");

function asyncTask(callback) {
  console.log("Performing asynchronous task...");
  setTimeout(() => {
    console.log("Asynchronous task completed.");
    callback();
  }, 2000);
}

asyncTask(() => {
  console.log("Callback executed after asynchronous task.");
});

console.log("End");

// ====================================
// 📌 15. Callbacks
// ====================================

console.log("Start");

setTimeout(() => console.log("ok"), 2000);

console.log("End");

// ====================================
// 📌 16. Promises using Fetch API
// ====================================

const fetchAPIPromises = () => {
  const apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

// ====================================
// 📌 17. Async/Await Fetch API
// ====================================

const fetchAPI = async () => {
  const apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }

  console.log('Screen');
};