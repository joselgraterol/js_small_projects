import header from './components/Header.js';
import counter from './components/Counter.js';


const render = () => {
 const app = document.getElementById("root");
 app.innerHTML = `
    ${header}
    ${counter}
 `;
};

// Initial render
render();
