// //ES6

// //let, const and var

// const fn = () => {
//   let a = "Hello"; //declare let with string
//   a = "spoof"; // we can reassign new value mutable, we cannot redeclare again once declared and block scoped
//   console.log(a);

//   const b = 10; //declare const with number
//   b = 30; // throws error because we cannot reassign new value so it is immutable and block scoped
//   console.log(b);

//   var c = "world"; //declare var with string
//   c = "nanda"; // same as let variable, but function scoped.
//   console.log(c);
// }; 
// // fn();

// //2

// const greet = "nanda";
// const two = () => {
//     console.log(`Hello ${greet}`);
// }
// // two();

// const obj1 = {name:"nanda", age:27, job:"Software Engineer"}

// const {name, age} = obj1;

// console.log(name, age);

// const arr1 = [1,2,3,4,5];

// const [value1, value2] = arr1;

// console.log(value1, value2);


// const car = {brand: "hyundai", model:"i20"}

// const newCar = {...car, engine:1200, brand:"suzuki"};

// console.log(newCar);

// //Rest param

// const fn2 = (...args) =>{
//     return (...args) => {
//         console.log(a)
//     }
// }

// const a =  "hello"
// const b = 100
// const func = fn2(a,b)
// func()

// //Default Parameter

// const fn3 = (num = 10) => {
// return console.log(num);
// }

// fn3();

// Shallow 

const obj1 = {
    name:"nanda",
    age: 27,
    skills: ["Design", "Code"]
}

const shallowCopy = {...obj1};

shallowCopy.skills.push("development");

// console.log(obj1)

// console.log(shallowCopy)
// Deep


// const obj2 = {
//     name:"nanda",
//     age: 27,
//     skills: ["Design", "Code"]
// }

// const deepCopy = structuredClone(obj2);

// deepCopy.skills.push("development");

// console.log(obj2);
// console.log(deepCopy);



//Iteration & Loops

// const arr3 = [{1 : 'raja'},{2: 'raj'},{3:'ra'}];

// let sum = 0;
// for (let element of arr3) {
//     sum += element
// }
// console.log(sum);


// const arr = arr3.entries(); // returns key aka index and value
// for (let fruit of arr) {
//   console.log(fruit);
// }

// const arr1 = arr3.values(); // returns values only from the array
// for (let fruit of arr1) {
//   console.log(fruit);
// }

// const arr2 = arr3.keys(); // returns key aka index from the array
// for (let fruit of arr2) {
//   console.log(fruit);
// }

//  Array Methods

let name = "nanda";

let dupArr = Array.from(name);

console.log(dupArr);

const arr = [1,2,3,4,5]

console.log(arr.find(num => num%2==0));

console.log(arr.findIndex(num => num%2==0));

console.log(arr.map( num => num*2 ))

console.log(arr.filter(num => num%2==0))

console.log(arr.reduce((prev,curr)=> prev + curr));

const arr2 = ['r','a','j','a']
// console.log(arr2.join(''))

// console.log(arr.concat(arr2));

// console.log(arr2.reverse())

//Splice

// console.log(arr2.splice(1,2));

// console.log(arr2.slice(1,2));

const arr3 = [1,2,3,4,99,3,4,2,1,3]

console.log(arr3.sort((a,b) => b-a)) // pass function inside for descending order

console.log(arr2.sort((a,b) => b.localeCompare(a)));

arr3.forEach(element => {
    element = element*10
});

const s = 'nandha'

console.log(s.includes('n'));

console.log(s.startsWith('a'));

console.log(s.endsWith('h'));

console.log(`This is array 1 ${arr2} which has ${arr2[0]}`)