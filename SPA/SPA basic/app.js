// app.js

function handleRoute(route) {
  const content = document.getElementById('content');
  
    switch (route) {
      case '#home':
        content.innerHTML = '<h1>Welcome to the Home Page</h1>';
        break;
      case '#about':
        content.innerHTML = '<h1>About Us</h1><p>We are a company that...</p>';
        break;
      case '#contact':
        content.innerHTML = '<h1>Contact Us</h1><p>Email: info@example.com</p>';
        break;
      case '#products':
        content.innerHTML = '<h1>Our Products</h1><p>Check out our amazing products...</p>';
        break;
      case '#products/electronics':
        content.innerHTML = '<h1>Electronics</h1><p>We offer a wide range of electronic devices...</p>';
        break;
      case '#products/clothing':
        content.innerHTML = '<h1>Clothing</h1><p>Discover the latest fashion trends...</p>';
        break;
      default:
        content.innerHTML = '<h1>Page Not Found</h1>';
    }

}

function handleRouteChange() {
  const currentRoute = window.location.hash;

  // If no route is specified (first time page load), default to '#home'
  const route = currentRoute ? currentRoute : '#home';


  handleRoute(route);
}

// Attach event listener to the hashchange event
window.addEventListener('hashchange', handleRouteChange);

// Initial page load
handleRouteChange();