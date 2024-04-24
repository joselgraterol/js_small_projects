// app.js
let scrollPositions = {};

function handleRoute(route) {
  const content = document.getElementById('content');
  const navigationItems = document.querySelectorAll('.navigation-item');
  
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
        content.innerHTML = '<h1>Clothing</h1><p>Discover the latest fashion trends...</p>';
        break;
      default:
        content.innerHTML = '<h1>Page Not Found</h1>';
    }

    // Remove the fade-out class and add the fade-in class to trigger the animation
    content.classList.remove('fade-out');
    content.classList.add('fade-in');

    // Restore scroll position if available
    if (scrollPositions[route]) {
      window.scrollTo(0, scrollPositions[route]);
    } else {
      window.scrollTo(0, 0);
    }
	
	    // Update the active navigation item
    navigationItems.forEach(item => {
      if (item.getAttribute('href') === route) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
	
  }, 300); // Wait for the fade-out animation to complete (300ms)
}

function handleRouteChange() {
  const currentRoute = window.location.hash;
  const previousRoute = Object.keys(scrollPositions).pop();

  // If no route is specified (first time page load), default to '#home'
  const route = currentRoute ? currentRoute : '#home';

  // Store scroll position of previous route
  if (previousRoute) {
    scrollPositions[previousRoute] = window.scrollY;
  }

  handleRoute(route);
}

// Attach event listener to the hashchange event
window.addEventListener('hashchange', handleRouteChange);

// Initial page load
handleRouteChange();