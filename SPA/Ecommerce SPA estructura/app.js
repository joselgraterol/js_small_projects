
let scrollPosition 

const navigationItems = document.querySelectorAll('.navigation-item');
function handleRoute(route) {
  const content = document.getElementById('content');

  const routes = {
    '#home': () => home(content),
    '#products': () => products(content),
    '#contact': () => contact(content)
  };

  // const productId = route.startsWith("#products/") ? route.split("/")[1] : null;
  // if (productId) {
  //   productDetail(content, productId)
  //   return
  // }

  content.classList.add('fade-out');

  setTimeout(() => {
    const routeHandler = routes[route] || '<h1>Page Not Found</h1>';
    if (typeof routeHandler === 'function') {
      routeHandler();
    } else if(route.startsWith("#products/")){
      const productId = route.split("/")[1]
      productDetail(content, productId)
    }
     else {
      content.innerHTML = routeHandler;
    }

    content.classList.remove('fade-out');
    content.classList.add('fade-in');
  }, 300);
}


function handleRouteChange() {
  const currentRoute = window.location.hash;

  // If no route is specified (first time page load), default to '#home'
  const route = currentRoute || '#home';

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
window.addEventListener('load', handleRouteChange);

// Initial page load
handleRouteChange();


function home(content) {
  content.innerHTML = `
    <h1>Welcome to our E-commerce</h1>
  `;
}

const allProducts = [
  {
    id: 1,
    name: "queso",
    details: "this are the details",
    price: 23
  },
  {
    id: 2,
    name: "pan",
    details: "this are the details",
    price: 10
  },
  {
    id: 3,
    name: "malta",
    details: "this are the details",
    price: 1
  },
  {
    id: 4,
    name: "agua",
    details: "this are the details",
    price: 40
  }
]

function products(content) {
  content.innerHTML = `
    <h1>these are our products</h1>
    <div id="products-container"></div>
  `;
  let productsContainer = content.querySelector("#products-container")
  renderProducts(productsContainer)
}

function goToLastPositionScroll() {
  window.scrollTo({
    top: scrollPosition,
    behavior: "instant"
  })
}

function renderProducts(container) {
  console.log(scrollPosition)

  
  let fragment = document.createDocumentFragment();

  allProducts.forEach(product => {
    let productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>$ ${product.price}</p>
      <a href="#products/${product.id}">see details</a>
    `
    fragment.appendChild(productDiv);
  })
  container.appendChild(fragment)
  goToLastPositionScroll()

  
  scrollPosition = 0
}

function productDetail(content, productId) {
  scrollPosition = window.scrollY
  console.log(scrollPosition)
  //find the product
  const product = allProducts.find(p => p.id === parseInt(productId))

  if (!product) {
    content.innerHTML = '<h1>Page Not Found</h1>'
    return
  }
  // content.classList.add("fade-in")
  content.innerHTML = `
    <h3>${product.name}</h3>
    <p>$ ${product.details}</p>
    <p>$ ${product.price}</p>
    <a href="#products">back</a>
  `;

}

function contact(content) {
  content.innerHTML = `
    <h1>this is our contact</h1>
  `;
}




