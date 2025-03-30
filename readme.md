# 📌 Event Propagation in JavaScript

Event propagation refers to how events travel through the **DOM (Document Object Model)**.  
There are two main phases:

1. **Event Bubbling** → The event starts at the target element and **bubbles up** to the root.
2. **Event Capturing (Trickling)** → The event starts at the root and **trickles down** to the target.

---

## 📌 Summary Table

| Concept                | Description | Example Output | Real-World Use Case |
|------------------------|-------------|----------------|----------------------|
| **Event Bubbling** | The event starts at the target element and moves **up** to its ancestors. | Clicking a button inside a div triggers both the button’s and the div’s event listeners. | **Form submission tracking** - Clicking the submit button logs an event at the form level. |
| **Event Capturing** | The event starts at the root and moves **down** to the target. | Using `{ capture: true }` in `addEventListener` makes the parent element's listener fire first. | **Navigation tracking** - Capturing clicks before the user navigates away. |
| **Event Delegation** | Uses event bubbling to handle multiple child elements with a single event listener. | A single event listener on `<ul>` handles clicks for dynamically added `<li>` items. | **Chat apps / To-Do lists** - New messages or tasks get event listeners dynamically. |
| **Stopping Propagation** | Prevents an event from bubbling or capturing further. | Calling `event.stopPropagation()` prevents parent elements from handling the event. | **Modal dialogs** - Clicking inside a modal shouldn’t close it, only clicking outside should. |

---

💡 **Event propagation helps improve performance, manage dynamic elements efficiently, and control event flow in web applications.**
