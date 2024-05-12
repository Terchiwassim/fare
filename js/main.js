var cart = document.querySelector('.cart');
var all_products_json;
var product_cart = [];

// Open and close cart
function open_cart() {
    cart.classList.add("active");
}

function close_cart() {
    cart.classList.remove("active");
}

// Add items to cart
function addtocart(id, btn) {
    let existingItem = product_cart.find(item => item.id === id);
    if (!existingItem) {
        product_cart.push(all_products_json[id]);
        btn.classList.add("active");
        console.log(product_cart);
        getCartItems();
    } else {
        alert("This item is already in your cart!");
    }
}

// Update cart items UI
// Update cart items UI
function getCartItems() {
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
            <div class="item_cart">
                <img src="${product_cart[i].img}" alt="${product_cart[i].name}">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-arrow-up"></i></button>
            </div>
        `;
        total_price += product_cart[i].price;
    }
    items_in_cart.innerHTML = items_c;
    price_cart_head.textContent = "$" + total_price.toFixed(2);
    count_item.textContent = product_cart.length;
    count_item_cart.textContent = `(${product_cart.length} item${product_cart.length > 1 ? 's' : ''} in cart)`;
    price_cart_total.textContent = "$" + total_price.toFixed(2);
}
