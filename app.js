//without debounce
let counter = 0;
const callAPI = (event) => {
  const query = event.target.value;
  console.log(query, ++counter);
};

// inputValue.addEventListener('keyup', callAPI)

//with debounce

const debouncing = (fn, delay) => {
  //input: function and delay as parameter
  //output: function with setTimeout
  //action: it delays a function.
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay);
  };
};

//inputValue.addEventListener("keyup", debouncing(callAPI, 500));

const throttling = (fn, tim) => {
  //input: function and delay as parameter
  //output: function call done only once within the time interval
  //action: it runs function once within time interval
  noOfCall = 0;
  return (...args) => {
    currentTime = Date.now()
    if(currentTime - noOfCall >= tim){
        noOfCall = currentTime
        fn(...args)
    }
  }
};

inputValue.addEventListener('keyup', throttling(callAPI, 5000));
