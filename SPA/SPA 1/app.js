// app.js

const navigationItems = document.querySelectorAll('.navigation-item');

function handleRoute(route) {
  const content = document.getElementById('content');
  
  
  // Add the fade-out class to initiate the animation
  content.classList.add('fade-out');

  // Wait for the animation to complete
  setTimeout(() => {
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
        content.innerHTML = '<h1>Clothing</h1><p>Discover the latest fashion trends...<a href="#products/clothing/zara">zara</a></p>';
        break;
      case '#products/clothing/zara':
        content.innerHTML = '<h1>Clothing</h1><p>zara...</p>';
        break;
      default:
        content.innerHTML = '<h1>Page Not Found</h1>';
    }

    // Remove the fade-out class and add the fade-in class to trigger the animation
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
	
  }, 300); // Wait for the fade-out animation to complete (300ms)
}

function handleRouteChange() {
  const currentRoute = window.location.hash;

  // If no route is specified (first time page load), default to '#home'
  const route = currentRoute ? currentRoute : '#home';

  handleRoute(route);

  // Update the active navigation item
  navigationItems.forEach(item => {
    if (route.startsWith(item.getAttribute("href"))) {
      item.classList.add("active");
    }else{
      item.classList.remove("active");
    }
  });
}

// Attach event listener to the hashchange event
window.addEventListener('hashchange', handleRouteChange);

// Initial page load
handleRouteChange();

