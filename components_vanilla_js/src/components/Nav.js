// Define the hola function
// function hola() {
//    console.log('ss');
// }

// Define the HTML string without the onclick attribute
const nav = `
   <nav>
      <div class="logo">
         <a href="#">logo</a>
      </div>

      <ul>
         <li><a href="index.html">Home</a></li>
         <li><a href="notes.html">Notes</a></li>
         <li><a href="about.html">About</a></li>
      </ul>
   </nav>
`;

// Export the header string
export default nav;

// // Function to add the event listener
// function addButtonClickListener() {
//    // Wait for the DOM to be fully loaded
//    document.addEventListener('DOMContentLoaded', (event) => {
//       // Find the button by its ID
//       const button = document.getElementById('myButton');
//       // Add the click event listener
//       button.addEventListener('click', hola);
//    });
// }

// // Call the function to add the event listener
// addButtonClickListener();