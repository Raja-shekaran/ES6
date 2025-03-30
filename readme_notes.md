# 🚀 JavaScript Optimization & Event Propagation Notes

## 📌 Function Optimization Techniques  

| Technique       | Description | Example |
|----------------|-------------|---------|
| **Memoization** | Caches function results to avoid redundant calculations. | [Example](#memoization) |
| **Lazy Loading** | Loads resources only when needed. | [Example](#lazy-loading) |
| **Code Splitting** | Splits JavaScript bundles for better performance. | [Example](#code-splitting) |

---

### 1️⃣ **Memoization**
- **Stores computed results** to prevent recalculations.  
- Used in **recursive functions**, **caching API calls**, and **dynamic programming**.  

#### **Example (Python)**
```python
from functools import lru_cache
@lru_cache(maxsize=None)
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)
```

---

### 2️⃣ **Lazy Loading**
- **Defers resource loading** until needed.  
- Used for **images, videos, scripts**, etc.  

#### **Example (JavaScript)**
```html
<img src="placeholder.jpg" data-src="actual.jpg" class="lazy-load" />
<script>
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lazy-load").forEach(img => img.src = img.dataset.src);
});
</script>
```

---

### 3️⃣ **Code Splitting**
- **Loads JavaScript modules dynamically** to reduce initial load time.  
- Used in **React, Webpack, Parcel**.  

#### **Example (React)**
```javascript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
<Suspense fallback={<div>Loading...</div>}><HeavyComponent /></Suspense>
```

---

## 📌 Event Propagation in JavaScript  

| Concept | Description | Example |
|---------|-------------|---------|
| **Event Bubbling** | Event starts at the target and bubbles **up**. | Clicking inside a `<div>` triggers parent event listeners. |
| **Event Capturing** | Event starts at the root and trickles **down**. | Using `{ capture: true }` in `addEventListener()`. |
| **Event Delegation** | Handles multiple child elements with one listener. | Attaching a click listener to `<ul>` instead of `<li>`. |
| **Stopping Propagation** | Prevents event bubbling/capturing. | `event.stopPropagation()` stops event from reaching parents. |

---

### 🔥 Quick Event Examples

#### **Bubbling (Default Behavior)**
```javascript
document.querySelector("#child").addEventListener("click", () => console.log("Child clicked"));
document.querySelector("#parent").addEventListener("click", () => console.log("Parent clicked"));
```
➡ Clicking **child** logs `"Child clicked"` → `"Parent clicked"` (Bubbling)

#### **Capturing (Use `{ capture: true }`)**
```javascript
document.querySelector("#parent").addEventListener("click", () => console.log("Parent clicked"), true);
```
➡ `"Parent clicked"` logs **before** `"Child clicked"`

#### **Event Delegation (Efficient for Dynamic Elements)**
```javascript
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") console.log("Clicked:", e.target.innerText);
});
```
➡ Handles clicks on all `<li>` items, including future additions.

#### **Stopping Propagation**
```javascript
document.querySelector("#child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Only child clicked");
});
```
➡ Clicking **child** prevents bubbling to parent.

---

## 🚀 Summary
- **Optimize functions** using Memoization, Lazy Loading, and Code Splitting.
- **Understand event flow** (Bubbling, Capturing, Delegation) for better event handling.
- **Use event delegation** for dynamic content and **stop propagation** when necessary.

📌 **Mastering these concepts enhances performance, optimizes UX, and improves coding efficiency.**
