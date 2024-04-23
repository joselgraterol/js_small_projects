import nav from './Nav.js';

// Define the hola function
function hola() {
   console.log('ss');
}

// Define the HTML string without the onclick attribute
const header = `
   <header>
      ${nav}
      <button id="myButton">click here</button>
   </header>
   
`;

// Export the header string
export default header;

// Function to add the event listener
function addButtonClickListener() {
   // Wait for the DOM to be fully loaded
   document.addEventListener('DOMContentLoaded', (event) => {
      // Find the button by its ID
      const button = document.getElementById('myButton');
      // Add the click event listener
      button.addEventListener('click', hola);
   });
}

// Call the function to add the event listener
addButtonClickListener();