// app.js


function handleRoute(route) {
  const content = document.getElementById('content');
  const savedScrollY = sessionStorage.getItem(route)

  const observer = new MutationObserver(function(){
    if (!savedScrollY) {
      content.scrollTop = savedScrollY
      //window.scrollTo(0, savedScrollY)
      //content.scrollTop = savedScrollY;
    }else{
      content.scrollTop = savedScrollY
      //content.scrollTop = 0
    }

    observer.disconnect()
  })

  observer.observe(content, {childList: true, subtree: true})

  //code2
  // if (!savedScrollY) {
  //   content.scrollTop = 0
  //   //window.scrollTo(0, savedScrollY)
  //   //content.scrollTop = savedScrollY;
  // }else{
  //   content.scrollTop = savedScrollY
  //   //content.scrollTop = 0
  // }


  //code 1
  // if (savedScrollY) {
  //   content.scrollTo(0, savedScrollY)
  //   //window.scrollTo(0, savedScrollY)
  //   //content.scrollTop = savedScrollY;
  // }else{
  //   window.scrollTo(0, 0)
  //   //content.scrollTop = 0
  // }

    switch (route) {
      case '#home':
        content.innerHTML = `
          <h1>Welcome to the Home Page</h1>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
        `;
        break;
      case '#about':
        content.innerHTML = `
          <h1>Welcome to the about Page</h1>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
        `;
        break;
      case '#contact':
        content.innerHTML = `
          <h1>Welcome to the content Page</h1>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
          <p>niene ineinwwineiwebuwe weuwbeuwe</p>
        `;
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

window.addEventListener("scroll", function() {
  const currentRoute = window.location.hash;
  sessionStorage.setItem(currentRoute, window.scrollY) 
})



// Attach event listener to the hashchange event
window.addEventListener('hashchange', handleRouteChange);

// Initial page load
handleRouteChange();