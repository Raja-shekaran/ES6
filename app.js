// ====================================
// 🚀 JavaScript Concepts: Advanced
// ====================================

// 📌 1. Function Execution Without Debounce
let counter = 0;
const callAPI = (event) => {
    const query = event.target.value;
    console.log(query, ++counter);
};

// inputValue.addEventListener('keyup', callAPI);

// ====================================
// 📌 2. Debouncing - Delaying Function Execution
// ====================================

const debouncing = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

// inputValue.addEventListener("keyup", debouncing(callAPI, 500));

// ====================================
// 📌 3. Throttling - Limiting Function Execution
// ====================================

const throttling = (fn, tim) => {
    let lastExecutionTime = 0;
    return (...args) => {
        let currentTime = Date.now();
        if (currentTime - lastExecutionTime >= tim) {
            lastExecutionTime = currentTime;
            fn(...args);
        }
    };
};

// inputValue.addEventListener("keyup", throttling(callAPI, 5000));

// ====================================
// 📌 4. requestAnimationFrame - Smooth Animations
// ====================================

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

// Start animation on button click
startButton.addEventListener("click", () => {
    progressBar.style.width = "0%";
    animateProgress(2000);
});

// ====================================
// 📌 5. setInterval - Repeated Execution
// ====================================

window.onload = function () {
    let count = 0;
    let intervalId = setInterval(() => {
        let counterElement = document.getElementById("counter");
        counterElement.textContent = count;
        count++;
    }, 5000); // Updates every 5 seconds

    // Function to stop the counter
    window.stopCounter = function () {
        clearInterval(intervalId);
        alert("Counter stopped!");
    };
};

// ====================================
// 📌 6. Event Propagation: Bubbling & Capturing
// ====================================

// Bubbling (Bottom to Top) vs Capturing (Top to Bottom)
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Div Clicked");
}, { capture: true }); // Capturing phase

document.getElementById("child").addEventListener("click", (event) => {
    console.log("Button Clicked");
    // event.stopPropagation(); --> Stop Propagation
});

// ====================================
// 📌 7. Event Delegation
// ====================================

document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Clicked on ${event.target.textContent}`);
    }
});

// ====================================
// 📌 8. Stop Event Propagation
// ====================================

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

// ====================================
// 📌 9. Memoization - Optimizing Expensive Computation
// ====================================

function memoizedFibonacci() {
    let cache = {};
    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // 55
console.log(fibonacci(40)); // 102334155

// ====================================
// 📌 10. Lazy Loading - Load Images Only When Needed
// ====================================

document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll(".lazy-load");
    lazyImages.forEach(img => {
        img.src = img.dataset.src; // Loads actual image when needed
    });
});