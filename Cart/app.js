let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');
let ListProductHTML = document.querySelector('.ListProduct');

let ListProduct = [];
iconCart.addEventListener ( 'click', () =>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener( 'click', () => {
    body.classList.toggle('showCart')
})
;


let cartItems = [];

function addtoCart(item) {
    
    cartItems.push(item);

   
    updateCartIcon();

    
    updateCartTab();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.icon-cart span');
    cartIcon.innerText = cartItems.length.toString();
}

function updateCartTab() {
    const cartList = document.querySelector('.ListCart');

   
    cartList.innerHTML = '';

    
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.innerHTML = `
            <div class="image">
                <img src="${item.image}" alt="">
            </div>
            <div class="name">
                ${item.name}
            </div>
            <div class="totalPrice">
                ${item.price}
            </div>
            <div class="quantity">
                <span class="minus" onclick="decreaseQuantity(${cartItems.indexOf(item)})">-</span>
                <span class="quantity-value" id="quantity-${cartItems.indexOf(item)}">${item.quantity}</span>
                <span class="plus" onclick="increaseQuantity(${cartItems.indexOf(item)})">+</span>
            </div>
        `;
        cartList.appendChild(cartItem);
    });
}

function increaseQuantity(index) {
    cartItems[index].quantity++;
    updateCartTab();
}

function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
    } else {
       
        cartItems.splice(index, 1);
    }
    updateCartTab();
}




function addtoCart(item) {
   
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
     
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
    } else {
        
        const newItem = {
            ...item,
            quantity: 1,
            totalPrice: item.price
        };
        cartItems.push(newItem);
    }

    
    updateCartIcon();

    
    updateCartTab();
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Function to populate cart items
    function populateCartItems() {
        const cartItemsContainer = document.querySelector('.cart-items');
        // Fetch cart items from local storage or wherever you store them
        const cartItems = getCartItems(); // You need to implement this function

        // Loop through cart items and create HTML elements
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="">
                <h2>${item.name}</h2>
                <div class="price">${item.price}</div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }


});
document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    const sr = ScrollReveal();
  
    // Configure ScrollReveal settings for each section
    sr.reveal('.scroll-reveal', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      delay: 200,
      easing: 'ease',
    });
  
    
    sr.reveal('.cartTab', {
      duration: 1500,
      origin: 'right',
      distance: '70px',
      delay: 10000,
      easing: 'ease',
    });
  });
  function redirectToPage(pageUrl) {
    
    let itemsInCart = document.querySelectorAll('.ListCart .item');
    
    if (itemsInCart.length <=1) {

        alert('Cannot place order! Please add atleast 2 items to cart before placing an order.');
       
    } else {
       
        window.location.href = pageUrl;
    }
}