//without debounce
let counter = 0;
const callAPI = (event) => {
    const query = event.target.value;
    console.log(query, ++counter);
};

// inputValue.addEventListener('keyup', callAPI)

//--------------------------------------------------------------

//with debounce

const debouncing = (fn, delay) => {
    //input: function and delay as parameter
    //output: function with setTimeout
    //action: it delays a function.
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

//inputValue.addEventListener("keyup", debouncing(callAPI, 500));

//----------------------------------------------------------------------

const throttling = (fn, tim) => {
    //input: function and delay as parameter
    //output: function call done only once within the time interval
    //action: it runs function once within time interval
    noOfCall = 0;
    return (...args) => {
        currentTime = Date.now();
        if (currentTime - noOfCall >= tim) {
            noOfCall = currentTime;
            fn(...args);
        }
    };
};

inputValue.addEventListener("keyup", throttling(callAPI, 5000));

//---------------------------------------------------

//requestAnimationFrame

const progressBar = document.getElementById("progress");

function animateProgress(duration) {
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = (timestamp - start) / duration;

        if (progress < 1) {
            progressBar.style.width = `${progress * 100}%`;
            requestAnimationFrame(step);
        } else {
            progressBar.style.width = "100%";
        }
    }

    requestAnimationFrame(step);
}

// Start the animation on button click
startButton.addEventListener("click", () => {
    progressBar.style.width = "0%";
    animateProgress(2000);
});

//---------------------------------------------------

//setInterval

window.onload = function() {
    let count = 0;
    let intervalId = setInterval(() => {
        let counterElement = document.getElementById("counter");
        counterElement.textContent = count;
        count++;
    }, 5000); // Updates every 5 second

    // Function to stop the counter
    window.stopCounter = function() {
        clearInterval(intervalId);
        alert("Counter stopped!");
    };
};

//-------------------------------------------------------

//Event Bubbling - Bottom - Top and Event Capturing - Top - Bottom

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Div Clicked");
}, { capture: true }); //capture flag is added at parent level

document.getElementById("child").addEventListener("click", (event) => {
    console.log("Button Clicked");
    //event.stopPropagation(); --> Stop Propogation
});

//Event Delegation

document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Clicked on ${event.target.textContent}`);
    }
});

//Stop Propagation

// document.getElementById("overlay").addEventListener("click", () => {
//     console.log("Overlay Clicked - Closing Modal");
//     document.getElementById("overlay").style.display = "none";
// });

// document.getElementById("modal").addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevents event from reaching overlay
//     console.log("Modal Clicked - Not Closing");
// });

// document.getElementById("closeModal").addEventListener("click", () => {
//     document.getElementById("overlay").style.display = "none";
// });