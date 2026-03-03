// app.js

// Functionality for HTML editing
function editElement(elementId, newContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = newContent;
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

// Variable detection functionality
function detectVariables(obj) {
    return Object.keys(obj);
}

// LocalStorage persistence functionality
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Reset functionality
function resetLocalStorage() {
    localStorage.clear();
}

// Example usage (to be called in the application)
console.log(detectVariables({ a: 1, b: 2 })); // Output: ["a", "b"]
editElement('exampleElementId', 'New Content'); // Example usage for editing HTML
saveToLocalStorage('myData', { name: 'John Doe' }); // Save data
console.log(getFromLocalStorage('myData')); // Retrieve data
resetLocalStorage(); // Reset localStorage
