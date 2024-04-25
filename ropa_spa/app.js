const allProducts = [
  {
    id: 1,
    name: "hat",
    price: 5.4,
    description: "this is a hat",
    color: ["red", "black", "purple"],
    tag: ["accesories", "clothes"],
    available: true
  },
  {
    id: 2,
    name: "t-shirt",
    price: 20,
    description: "this is a t-shirt",
    color: ["red", "black", "yellow", "pink"],
    size: ["XL", "S", "M", "L"],
    tag: ["clothes"],
    available: true
  },
  {
    id: 3,
    name: "sweater",
    price: 10.9,
    description: "this is a sweater",
    color: ["black", "red", "white"],
    size: ["S", "M", "L"],
    tag: ["clothes"],
    available: true
  },
  {
    id: 4,
    name: "shoe",
    price: 90,
    description: "this is a shoe",
    size: ["39", "40", "41", "42", "43", "44"],
    tag: ["clothes", "shoes"],
    available: true
  },
  {
    id: 5,
    name: "watch",
    price: 100,
    description: "this is a watch",
    tag: ["accesories", "watches"],
    available: true
  },
  {
    id: 6,
    name: "watch 2",
    price: 500,
    description: "this is a watch 2",
    tag: ["accesories", "watches"],
    available: false
  }
]

// general variables
let cart = []


// scroll
let scrollPosition 

/*-----------------------------------*\
  SPA LOGIC
\*-----------------------------------*/
const navigationItems = document.querySelectorAll('.navigation-item');

function handleRoute(route) {
  const content = document.getElementById('content');
  

  const routes = {
    '#home': () => home(content),
    '#products': () => products(content),
    '#shopping-cart': () => shoppingCart(content),
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

//scroll to its last position

window.addEventListener("scroll", function() {
  const currentRoute = window.location.hash;
  sessionStorage.setItem(currentRoute, window.scrollY) 
})

function goToLastPositionScroll(scrollPosition) {
  window.scrollTo({
    top: scrollPosition,
    behavior: "instant"
  })
}


/*-----------------------------------*\
  DIFFERENT PAGES
\*-----------------------------------*/

/*-----------------------------------*\
  HOME
\*-----------------------------------*/
// home starts

function home(content) {
  content.innerHTML = `
    <h1>Welcome to our E-commerce</h1>
  `;
}
// home ends


/*-----------------------------------*\
  ALL PRODUCTS
\*-----------------------------------*/
// all products starts

function products(content) {
  content.innerHTML = `
    <h1>these are our products</h1>
    <div id="products-container"></div>
  `;
  let productsContainer = content.querySelector("#products-container")
  renderProducts(productsContainer)
}



function renderProducts(container) {
const savedScrollY = sessionStorage.getItem("#products")

console.log(savedScrollY)
  
  let fragment = document.createDocumentFragment();

  allProducts.forEach(product => {
    let productDiv = document.createElement("div");
    productDiv.className = "productCard"
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>$ ${product.price}</p>
      <a href="#products/${product.id}">see details</a>
    `
    fragment.appendChild(productDiv);
  })
  container.appendChild(fragment)
  goToLastPositionScroll(savedScrollY)

  // goToLastPositionScroll()  
  // scrollPosition = 0
}

// all products ends

/*-----------------------------------*\
  individual product
\*-----------------------------------*/
// individual product starts

function productDetail(content, productId) {
  //scrollPosition = window.scrollY

  //find the product
  const product = allProducts.find(p => p.id === parseInt(productId))

  if (!product) {
    content.innerHTML = '<h1>Page Not Found</h1>'
    return
  }
  // content.classList.add("fade-in")
  content.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>$ ${product.price}</p>
    
    ${product.color ? `
      <label for="color-${product.id}">Color:</label>
      <select id="color-${product.id}">
        <option value="">select color</option>
        ${product.color.map(color => `<option value="${color}">${color}</option>`).join("")}
      </select>
    ` : ""}

    ${product.size ? `
      <label for="size-${product.id}">Size:</label>
      <select id="size-${product.id}">
        <option value="">select size</option>
        ${product.size.map(size => `<option value="${size}">${size}</option>`).join("")}
      </select>
      ` : ""}

    ${product.tag ? `
      <p class="tag ${product.tag.map(tage => tage).join(" ")}">Tag: ${product.tag.map(tage => tage).join(", ")}</p>
      ` : ""}

    <div class="counter-wrapper">

      <button class="counter-btn decrease-quantity" data-qty-minus>-</button>

      <input type="number" value="1" class="initial-quantity">

      <button class="counter-btn increase-quantity">+</button>

    </div>

    <a href="#products">back</a>
    <button id="${product.id}" class="add-to-cart-btn">add product</button>
  `;

  let addToCartBtn = content.querySelector(".add-to-cart-btn");
  let quantity = 1
  let initialQuantityInput = content.querySelector(".initial-quantity");
  let increaseQuantity = content.querySelector(".increase-quantity");
  let decreaseQuantity = content.querySelector(".decrease-quantity");
  initialQuantityInput.addEventListener("change", () => {
    if (initialQuantityInput.value < 1) {
      return initialQuantityInput.value = 1
    }
    quantity = initialQuantityInput.value
  })
  increaseQuantity.addEventListener("click", () => {
    quantity++
    initialQuantityInput.value = quantity
  })
  decreaseQuantity.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--
      initialQuantityInput.value = quantity
    }else{
      return
    }
  })
  addToCartBtn.addEventListener("click", () => {
    addToCart(product, quantity, content)  
  })

}


function addToCart(product, quantity, container) {

  const objProduct = {
    id: product.id,
    name: product.name,
    quantity: Number(quantity) < 1 ? 1: Number(quantity),
    price: product.price,
    size: product.size ? container.querySelector(`#size-${product.id}`).value : null,
    color: product.color ? container.querySelector(`#color-${product.id}`).value : null
  }

  const {size, color} = objProduct

  if (size === "" || color === "") {
    alert("seleccione los campos vacios")
    return
  }

  let itemIndex = cart.findIndex(item => item.name === product.name && item.color === color && item.size === size);
  if (itemIndex !== -1) {
      cart[itemIndex].quantity += objProduct.quantity;
  } else {
      cart.push(objProduct); 
  }

  // goToLastPositionScroll()
  window.location.href = "index.html#products"

}




// individual product ends


/*-----------------------------------*\
  shopping cart
\*-----------------------------------*/

// shopping cart starts

function shoppingCart(content) {

  content.innerHTML = `
    <h1>these are the products in the shopping cart</h1>
    <div id="products-in-shopping-cart-container"></div>
    <p id="total-cost">0</p>
    <p id="no-products-message">No products here</p>
  `;
  let productsInShoppingCartContainer = content.querySelector("#products-in-shopping-cart-container")
  renderProductsInShoppingCart(productsInShoppingCartContainer)
  updateTotalCost()

}

function renderProductsInShoppingCart(container) {
  let fragment = document.createDocumentFragment();
  cart.forEach(product => {
    let productDiv = document.createElement("div");
    productDiv.className = "product-in-shopping-cart"
    productDiv.classList.add('fade-in');
    productDiv.innerHTML = `
      <div class="product-in-cart-img-container">
        <img src="${product.img}" class="product-in-cart-img">
      </div>
        
      <div class="product-in-cart-info">
        <p class="product-in-cart-name">${product.name}</p>
        <p>$ ${product.price}</p>
        <div class="quantity-in-cart-container"> 
          <div class="counter-wrapper-in-cart">

            <button class="counter-btn-in-cart decrease-quantity-in-cart">-</button>

            <input type="number" value="${product.quantity}" id="${product.id}" class="initial-quantity">

            <button class="counter-btn-in-cart increase-quantity-in-cart">+</button>

          </div> 
          
          <button id="remove-btn-${product.id}" class="remove-from-cart-btn">remove</button>
        </div>
      </div>
      
    `

    // editar cantidad
    let cantidadInput = productDiv.querySelector("input");
    cantidadInput.addEventListener("change", () => {
      // if (cantidadInput.value > 10) {
      //   alert("You can only add up to 10 of the same item.");
      //   return cantidadInput.value = product.quantity;
      // }
      if (cantidadInput.value === "" || cantidadInput.value <= 0 || cantidadInput.value === NaN) {
        return cantidadInput.value = product.quantity;
      }else{
        product.quantity = Number(cantidadInput.value);
        updateTotalCost()
      }
    })

    let increaseQuantityInCart = productDiv.querySelector(".increase-quantity-in-cart");
    let decreaseQuantityInCart = productDiv.querySelector(".decrease-quantity-in-cart");

    increaseQuantityInCart.addEventListener("click", () => {
      product.quantity++
      cantidadInput.value = product.quantity;
      updateTotalCost()
    })

    decreaseQuantityInCart.addEventListener("click", () => {
      if (cantidadInput.value > 1) {
        product.quantity--
        cantidadInput.value = product.quantity;
        updateTotalCost()
      }else{
        return
      }
      
    })

    //remove from cart
    let removeProductBtn = productDiv.querySelector(".remove-from-cart-btn")
    removeProductBtn.addEventListener("click", () => {
      setTimeout(() => {
        productDiv.classList.add('fade-out');
        productDiv.classList.remove('fade-in');
        removeFromCart(product)
        let generalContent = document.querySelector("#content")
        shoppingCart(generalContent)
      }, 200); 
    })
    
    fragment.appendChild(productDiv);
  })
  container.appendChild(fragment)
}

function removeFromCart(product) {
  let index = cart.findIndex( element => element.id === product.id);
  cart.splice(index, 1)
}

function updateTotalCost() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i]
    totalCost += product.price * product.quantity;
  }
  let totalCostFinal = Math.round(totalCost * 100) / 100;

  let totalCostElement = document.querySelector("#total-cost");
  totalCostElement.innerHTML = "Total Cost: $" + totalCostFinal;
  let noProductsMessage = document.querySelector("#no-products-message");

  if (totalCost > 0) {
    noProductsMessage.classList.add("hide-message");
    totalCostElement.classList.remove("hide-cost");
  }else{
    noProductsMessage.classList.remove("hide-message");
    totalCostElement.classList.add("hide-cost");
  }

}


// shopping cart ends

// contact

function contact(content) {
  content.innerHTML = `
    <h1>this is our contact</h1>
  `;
}




