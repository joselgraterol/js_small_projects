
let count = 0

function updateCount () {
   const countaDisplay = document.getElementById('count-display');
   countaDisplay.innerHTML = count
   
   if (count > 0) {
      countaDisplay.classList.add("positivo")
      countaDisplay.classList.remove("negativo")
   }else if (count < 0) {
      countaDisplay.classList.remove("positivo")
      countaDisplay.classList.add("negativo")
   }else{
      countaDisplay.classList.remove("positivo")
      countaDisplay.classList.remove("negativo")
   }
}

// Define the hola function
function increment() {
   count++
   updateCount()
   console.log(count)
}

function decrement() {
   count--
   updateCount()
   console.log(count)
}

// Define the HTML string without the onclick attribute
const counter = `
   <h2>Counter</h2>
    <p>Count: <span id="count-display">0</span></p>
    <button id="decrement">Decrement</button>
    <button id="increment">Increment</button>
`;

// Export the header string
export default counter;

// Function to add the event listener
function addButtonClickListener() {
   // Wait for the DOM to be fully loaded
   document.addEventListener('DOMContentLoaded', (event) => {
      // Find the button by its ID
      const incrementBtn = document.getElementById('increment');
      const decrementBtn = document.getElementById('decrement');
      // Add the click event listener
      incrementBtn.addEventListener('click', increment);
      decrementBtn.addEventListener('click', decrement);
   });
}

// Call the function to add the event listener
addButtonClickListener();