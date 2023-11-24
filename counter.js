// counter.js

// Function to increment the page visit counter
function incrementCounter() {
    // Get the current visit count from localStorage
    let count = localStorage.getItem('visitCount') || 0;

    // Increment the count
    count++;

    // Update the visit count in localStorage
    localStorage.setItem('visitCount', count);

    // Update the display on the webpage
    document.getElementById('visitCount').innerText = count;
}

// Call the incrementCounter function when the page loads
window.onload = incrementCounter;
