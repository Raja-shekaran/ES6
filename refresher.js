// 🏗️ Variables & Copying
// ------------------------

// let, const and var
const fn = () => {
    let a = "Hello";
    a = "spoof";
    console.log(a);
  
    const b = 10;
    // b = 30; // ❌ Error: Assignment to constant variable
    console.log(b);
  
    var c = "world";
    c = "nanda";
    console.log(c);
  };
  // fn();
  
  // Template Literals
  const greet = "nanda";
  const two = () => {
    console.log(`Hello ${greet}`);
  };
  // two();
  
  // Object Destructuring
  const obj1 = { name: "nanda", age: 27, job: "Software Engineer" };
  const { name, age } = obj1;
  console.log(name, age);
  
  // Array Destructuring
  const arr1 = [1, 2, 3, 4, 5];
  const [value1, value2] = arr1;
  console.log(value1, value2);
  
  // Spread Operator
  const car = { brand: "hyundai", model: "i20" };
  const newCar = { ...car, engine: 1200, brand: "suzuki" };
  console.log(newCar);
  
  // Rest Parameters
  const fn2 = (...args) => {
    return () => {
      console.log(args);
    };
  };
  const func = fn2("hello", 100);
  func();
  
  // Default Parameters
  const fn3 = (num = 10) => {
    console.log(num);
  };
  fn3();
  
  // Shallow Copy
  const shallowObj = {
    name: "nanda",
    age: 27,
    skills: ["Design", "Code"],
  };
  const shallowCopy = { ...shallowObj };
  shallowCopy.skills.push("development");
  console.log(shallowObj);
  console.log(shallowCopy);
  
  // Deep Copy
  const obj2 = {
    name: "nanda",
    age: 27,
    skills: ["Design", "Code"],
  };
  const deepCopy = structuredClone(obj2);
  deepCopy.skills.push("development");
  console.log(obj2);
  console.log(deepCopy);
  
  // 🔄 Iteration & Loops
  // ------------------------
  
  const arr3 = [1, 2, 3, 4, 5];
  
  // for/of Loop
  for (let num of arr3) {
    console.log(num);
  }
  
  // Array.entries()
  for (let [index, value] of arr3.entries()) {
    console.log(index, value);
  }
  
  // Array.keys()
  for (let key of arr3.keys()) {
    console.log(key);
  }
  
  // Array.values()
  for (let val of arr3.values()) {
    console.log(val);
  }
  
  // 🔢 Array Methods
  // ------------------------
  
  console.log(Array.from("nanda"));
  console.log(arr3.find((num) => num % 2 === 0));
  console.log(arr3.findIndex((num) => num % 2 === 0));
  console.log(arr3.map((num) => num * 2));
  console.log(arr3.filter((num) => num % 2 === 0));
  console.log(arr3.reduce((acc, curr) => acc + curr, 0));
  
  const arr2 = ["r", "a", "j", "a"];
  console.log(arr2.join(""));
  console.log(arr3.concat(arr2));
  console.log(arr2.reverse());
  
  // splice(), slice()
  console.log(arr2.splice(1, 2)); // destructive
  console.log(arr2.slice(1, 2)); // non-destructive
  
  // sort()
  console.log(arr3.sort((a, b) => b - a));
  console.log(arr2.sort((a, b) => b.localeCompare(a)));
  
  // forEach()
  arr3.forEach((element) => {
    console.log(element * 10);
  });
  
  // 🔠 String Methods
  // ------------------------
  
  const s = "nandha";
  console.log(s.includes("n"));
  console.log(s.startsWith("a"));
  console.log(s.endsWith("h"));
  console.log(`This is array 1 ${arr2} which has ${arr2[0]}`);
  
  // 🚀 Functions & Async Code
  // ------------------------
  
  // Arrow Functions
  const arrow = () => console.log("hello");
  
  // Function Rest Parameters + Nested Function
  const fn1 = (...args) => {
    const fn2 = () => {
      console.log(`The values are: ${args.join(", ")}`);
    };
    fn2();
  };
  fn1(5, 10);
  
  // async/await with Fetch
  const url = "https://fake-json-api.mock.beeceptor.com/users";
  const promiseFunction = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // promiseFunction();
  
  // Debounce & Throttling (Throttle Example)
  const fnInput = (event) => {
    const result = event.target.value;
    console.log(result);
  };
  
  const throttle = (fn, delay) => {
    let lastCalled = 0;
    return (...args) => {
      let currentTime = new Date().getTime();
      if (currentTime - lastCalled >= delay) {
        lastCalled = currentTime;
        fn(...args);
      }
    };
  };
  
  // Usage:
  // inputValue.addEventListener('keyup', throttle(fnInput, 5000));